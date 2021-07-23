import { Response, Request, NextFunction } from 'express';
import Person from '../models/person.model';
import { IPerson } from '../models/person';

const findAll = (req: Request, res: Response, next: NextFunction) => {
	Person.find({})
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).end();
			}
		})
		.catch((err) => {
			next(err);
		});
};

const findOne = (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	Person.findById(id)
		.then((person) => {
			if (person) {
				res.send(person);
			} else {
				res.status(404).end();
			}
		})
		.catch((err) => {
			next(err);
		});
};

const update = (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	const { name, number } = req.body;
	const newPerson: IPerson = { name, number };
	Person.findByIdAndUpdate(id, newPerson, { new: true })
		.then((updatedPerson) => {
			if (updatedPerson) {
				res.send(updatedPerson);
			} else {
				res.status(404).end();
			}
		})
		.catch((err) => {
			next(err);
		});
};

const create = (req: Request, res: Response, next: NextFunction) => {
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
	const newPerson = new Person({ name, number });
	newPerson
		.save()
		.then((data) => {
			if (data) {
				res.send(data);
			} else {
				res.status(404).end();
			}
		})
		.catch((err) => {
			next(err);
		});
};

const deleteOne = (req: Request, res: Response, next: NextFunction) => {
	const { id } = req.params;
	Person.findByIdAndRemove(id)
		.then(() => {
			res.status(204).end();
		})
		.catch((err) => {
			next(err);
		});
};

export default {
	findAll,
	findOne,
	update,
	create,
	delete: deleteOne,
};
