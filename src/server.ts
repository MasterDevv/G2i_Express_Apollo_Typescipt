import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import { mongodUrl } from './config'
import _resolvers from './_resolvers';
import _typedefs from './_typedefs';

const app = express();

app.use(express.json());

export const server: ApolloServer = new ApolloServer({
  typeDefs: _typedefs,
  resolvers: _resolvers,
  playground: true,
  introspection: true,
  context: ({ req }) => {
    let Authorization = false;
    if(req.headers.authorization) {
      Authorization = true;
    }
    return {Authorization};
  }
});

server.applyMiddleware({ app });

mongoose
  .connect(process.env.mongodbUrl || mongodUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log("mongoDB is err, ", err));

const PORT = process.env.PORT || 4000;

app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
