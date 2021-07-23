"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const morgan_1 = __importDefault(require("morgan"));
// Request body logger
morgan_1.default.token('req-body', (req, res) => JSON.stringify(req.body));
const logger = morgan_1.default(':method :url :status :res[content-length] - :response-time ms :req-body');
exports.default = logger;
//# sourceMappingURL=logger.middleware.js.map