"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const person_controller_1 = __importDefault(require("../controllers/person.controller"));
const router = express_1.default.Router();
router.post('/', person_controller_1.default.create);
router.get('/', person_controller_1.default.findAll);
router.get('/:id', person_controller_1.default.findOne);
router.put('/:id', person_controller_1.default.update);
router.delete('/:id', person_controller_1.default.delete);
exports.default = router;
//# sourceMappingURL=person.route.js.map