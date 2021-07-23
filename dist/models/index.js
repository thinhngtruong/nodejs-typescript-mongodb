"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const db_config_1 = __importDefault(require("../config/db.config"));
const person_model_1 = __importDefault(require("./person.model"));
exports.default = {
    mongoose: mongoose_1.default,
    url: db_config_1.default.url,
    persons: person_model_1.default,
};
//# sourceMappingURL=index.js.map