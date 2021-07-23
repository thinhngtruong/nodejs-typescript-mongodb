// import autoIncrement from 'mongoose-auto-increment';

import { Schema, model } from 'mongoose';
import { IPerson } from './person';

let schema = new Schema<IPerson>({
	name: String,
	number: String,
});

// Auto increment id start from 0
// const connection = mongoose.createConnection(db.url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true
// });

// autoIncrement.initialize(connection);

// schema.plugin(autoIncrement.plugin, 'Person');

schema.method('toJSON', function () {
	const { __v, _id, ...object } = this.toObject();
	object.id = _id;
	return object;
});

const Person = model<IPerson>('Person', schema, 'Person');

export default Person;
