"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const typedefs = apollo_server_express_1.gql `
  type Query {
    getAcronyms(from: Int!, limit: Int!, search: String): String!
  },  
`;
exports.default = typedefs;
//# sourceMappingURL=typedefs.js.map