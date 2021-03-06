import { Response, Request, NextFunction } from 'express';

const errHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
	console.error(err.message);

	if (err) {
		if (err.name === 'CastError') {
			return res.status(400).send({ err: 'incorrect id format' });
		} else {
			res.status(500).send({
				message: err.message || 'Some err occurred while creating the Person.',
			});
		}
	}

	next(err);
};

export default errHandler;
