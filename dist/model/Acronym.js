"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AcronymsSchema = new Schema({
    acronym: {
        type: String,
        require: true,
    },
    definition: {
        type: String,
        require: true,
    },
});
const Acronym = mongoose.model('Acronym', AcronymsSchema);
exports.default = Acronym;
//# sourceMappingURL=Acronym.js.map