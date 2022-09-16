import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import _resolvers from './_resolvers';
import _typedefs from './_typedefs';

const app = express();

app.use(express.json());

export const server: ApolloServer = new ApolloServer({
  typeDefs: _typedefs,
  resolvers: _resolvers,
  playground: true,
  introspection: true,
});

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen({ port: PORT }, () =>
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
