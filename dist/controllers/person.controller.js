"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const person_model_1 = __importDefault(require("../models/person.model"));
const findAll = (req, res, next) => {
    person_model_1.default.find({})
        .then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.status(404).end();
        }
    })
        .catch((err) => {
        next(err);
    });
};
const findOne = (req, res, next) => {
    const { id } = req.params;
    person_model_1.default.findById(id)
        .then((person) => {
        if (person) {
            res.send(person);
        }
        else {
            res.status(404).end();
        }
    })
        .catch((err) => {
        next(err);
    });
};
const update = (req, res, next) => {
    const { id } = req.params;
    const { name, number } = req.body;
    const newPerson = { name, number };
    person_model_1.default.findByIdAndUpdate(id, newPerson, { new: true })
        .then((updatedPerson) => {
        if (updatedPerson) {
            res.send(updatedPerson);
        }
        else {
            res.status(404).end();
        }
    })
        .catch((err) => {
        next(err);
    });
};
const create = (req, res, next) => {
    const { name, number } = req.body;
    if (!name) {
        return res.status(400).send({
            error: 'Missing name',
        });
    }
    if (!number) {
        return res.status(400).send({
            error: 'Missing number',
        });
    }
    const newPerson = new person_model_1.default({ name, number });
    newPerson
        .save()
        .then((data) => {
        if (data) {
            res.send(data);
        }
        else {
            res.status(404).end();
        }
    })
        .catch((err) => {
        next(err);
    });
};
const deleteOne = (req, res, next) => {
    const { id } = req.params;
    person_model_1.default.findByIdAndRemove(id)
        .then(() => {
        res.status(204).end();
    })
        .catch((err) => {
        next(err);
    });
};
exports.default = {
    findAll,
    findOne,
    update,
    create,
    delete: deleteOne,
};
//# sourceMappingURL=person.controller.js.map