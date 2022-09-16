import { gql } from 'apollo-server-express';

const typedefs = gql`
 type Query {
    getAcronyms(from: Int!, limit: Int!, search: String): String!
  }

  type Mutation {
    addAcronym(acronym: String!, definition: String!): String!
    updateAcronym(acronym: String!, definition: String!): String!
    deleteAcronym(acronym: String!): String
  }
  type Acronym {
    _id: ID!
    acronym: String!
    definition: String!
  }
`;

export default typedefs;