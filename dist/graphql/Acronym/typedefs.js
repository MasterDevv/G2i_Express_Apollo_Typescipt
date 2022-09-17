"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typedefs = apollo_server_express_1.gql `
  type Query {
    """
    getAcronyms Func results does not need params(return String)
    F.EX: getAcronyms(from: 1, limit: 10, search: "one")
    """
    getAcronyms(
      "Acronyms from number"
      from: Int!, 
      "Acronyms limit number"
      limit: Int!, 
      "String for search"
      search: String
    ): String!
  }

  type Mutation {
    """
    addAcronym is function for create acronym. (return String)
    F.EX: addAcronym(acronym: "one", definition: "one is one.")
    """
    addAcronym(
      "add Acronym.(String)"
      acronym: String!, 
      "add Acronym's definition.(String)"
      definition: String!
    ): String!

    """
    updateAcronym is function for update acronym. (return String)
    F.EX: updateAcronym(acronym: "one", definition: "one is one.")
    """
    updateAcronym(
      "add Acronym.(String)"
      acronym: String!, 
      "add Acronym's definition.(String)"
      definition: String!
    ): String!

    """
    deleteAcronym is function for delete acronym. (return String)
    F.EX: deleteAcronym(acronym: "one")
    """
    deleteAcronym(
      "delete Acronym.(String)"
      acronym: String!
    ): String
  }

  type Acronym {
    "MongoDb ObjectId"
    _id: ID!
    "WTF's short string"
    acronym: String!
    "Acronym's detail string"
    definition: String!
  }
`;
exports.default = typedefs;
//# sourceMappingURL=typedefs.js.map