"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const _resolvers_1 = __importDefault(require("./_resolvers"));
const _typedefs_1 = __importDefault(require("./_typedefs"));
const app = express_1.default();
app.use(express_1.default.json());
exports.server = new apollo_server_express_1.ApolloServer({
    typeDefs: _typedefs_1.default,
    resolvers: _resolvers_1.default,
    playground: true,
    introspection: true,
});
exports.server.applyMiddleware({ app });
const PORT = process.env.PORT || 4000;
app.listen({ port: PORT }, () => console.log(`Server ready at http://localhost:${PORT}${exports.server.graphqlPath}`));
//# sourceMappingURL=server.js.map