"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typedefs = apollo_server_express_1.gql `
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
exports.default = typedefs;
//# sourceMappingURL=typedefs.js.map