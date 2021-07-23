"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const person_route_1 = __importDefault(require("./person.route"));
const api_limiter_middleware_1 = require("../middleware/api-limiter.middleware");
const router = express_1.default.Router();
const rootAPI = '/api';
router.use(`${rootAPI}/persons`, api_limiter_middleware_1.apiLimiter, person_route_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map