"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Acronym_1 = __importDefault(require("../../model/Acronym"));
const resolvers = {
    Query: {
        getAcronyms: (args) => __awaiter(void 0, void 0, void 0, function* () {
            const { from, limit, search } = args;
            let getData;
            try {
                getData = yield Acronym_1.default.find({
                    $or: [
                        { acronym: { $regex: search.toString() } },
                        { definition: { $regex: search.toString() } }
                    ]
                }).skip(from).limit(limit);
            }
            catch (error) {
                throw new Error("Query's getAcronyms Server Error.");
            }
            return JSON.stringify({
                success: true,
                getData
            });
        })
    }
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map