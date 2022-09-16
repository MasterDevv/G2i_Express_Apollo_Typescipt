"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.typedefs = exports.resolvers = void 0;
const resolvers_1 = __importDefault(require("./resolvers"));
exports.resolvers = resolvers_1.default;
const typedefs_1 = __importDefault(require("./typedefs"));
exports.typedefs = typedefs_1.default;
exports.default = {
    resolvers: resolvers_1.default, typedefs: typedefs_1.default
};
//# sourceMappingURL=index.js.map