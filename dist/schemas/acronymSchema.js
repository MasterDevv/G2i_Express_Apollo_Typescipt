"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mutationDelAcronymSchema = exports.mutationAddorUpdateAcronymSchema = exports.queryGetAcronymSchema = void 0;
const yup_1 = require("yup");
exports.queryGetAcronymSchema = yup_1.object({
    args: yup_1.object({
        from: yup_1.number()
            .max(1000)
            .required('Acronym from number is required.'),
        limit: yup_1.number()
            .max(1000)
            .required('Acronym limit number is required.'),
        search: yup_1.string()
            .max(100)
            .required('Acronym search string is required.'),
    }),
});
exports.mutationAddorUpdateAcronymSchema = yup_1.object({
    args: yup_1.object({
        acronym: yup_1.string()
            .max(1000)
            .required('Acronym acronym string is required.'),
        definition: yup_1.string()
            .max(100)
            .required('Acronym definition string is required.'),
    }),
});
exports.mutationDelAcronymSchema = yup_1.object({
    args: yup_1.object({
        acronym: yup_1.string()
            .max(1000)
            .required('Acronym acronym string is required.'),
    }),
});
//# sourceMappingURL=acronymSchema.js.map