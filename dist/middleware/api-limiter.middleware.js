"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiLimiter = void 0;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
// Rate Limiter
exports.apiLimiter = express_rate_limit_1.default({
    windowMs: 15 * 60 * 1000,
    max: 100,
    status: 429,
    message: {
        error: 'Too many accounts created from this IP, please try again after an hour',
    },
});
//# sourceMappingURL=api-limiter.middleware.js.map