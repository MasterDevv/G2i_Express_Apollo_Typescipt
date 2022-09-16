"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_merge_1 = __importDefault(require("lodash.merge"));
const index_1 = __importDefault(require("./graphql/Example/index"));
const Acronym_1 = __importDefault(require("./graphql/Acronym"));
exports.default = lodash_merge_1.default(index_1.default.resolvers, Acronym_1.default.resolvers);
//# sourceMappingURL=_resolvers.js.map