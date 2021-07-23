import mongoose from 'mongoose';
import dbConfig from '../config/db.config';
import personModel from './person.model';

export default {
	mongoose,
	url: dbConfig.url,
	persons: personModel,
};
