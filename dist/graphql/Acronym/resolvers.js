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
        getAcronyms: (__, args) => __awaiter(void 0, void 0, void 0, function* () {
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
    },
    Mutation: {
        addAcronym: (__, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { acronym, definition } = args;
            let createAcronym;
            if (yield Acronym_1.default.findOne({ acronym })) {
                throw new Error('Acronym already Exists.');
            }
            try {
                createAcronym = yield Acronym_1.default.create({
                    acronym, definition
                });
            }
            catch (error) {
                throw new Error("Mutation's addAcrnym Server Error.");
            }
            return JSON.stringify({
                success: true,
                createAcronym
            });
        }),
        updateAcronym: (__, args, authInfo) => __awaiter(void 0, void 0, void 0, function* () {
            if (!authInfo.Authorization) {
                throw new Error('Not Permission.');
            }
            const { acronym, definition } = args;
            let updateAcronym;
            if (!(yield Acronym_1.default.findOne({ acronym }))) {
                throw new Error('Acronym does not Exist.');
            }
            try {
                updateAcronym = yield Acronym_1.default.findOneAndUpdate({ acronym: acronym }, {
                    acronym,
                    definition
                });
            }
            catch (error) {
                throw new Error("Mutation's updateAcrnym Server Error.");
            }
            return JSON.stringify({
                success: true,
                updateAcronym
            });
        }),
        deleteAcronym: (__, args, authInfo) => __awaiter(void 0, void 0, void 0, function* () {
            if (!authInfo.Authorization) {
                throw new Error('Not Permission.');
            }
            const { acronym } = args;
            let delAcronym;
            if (!(yield Acronym_1.default.findOne({ acronym }))) {
                throw new Error('Acronym does not Exist.');
            }
            try {
                delAcronym = yield Acronym_1.default.findOneAndRemove({ acronym: acronym });
            }
            catch (error) {
                throw new Error("Mutation's updateAcrnym Server Error.");
            }
            return JSON.stringify({
                success: true,
                delAcronym
            });
        })
    }
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map