import express from 'express';
import * as Sentry from '@sentry/node';
import * as Tracing from '@sentry/tracing';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';

import router from './routes';
import db from './models';
import handleErrorMiddleware from './middleware/error-handler.middleware';
import loggerMiddleware from './middleware/logger.middleware';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

// Init Sentry
Sentry.init({
	dsn: process.env.SENTRY_URL || '',
	integrations: [
		// enable HTTP calls tracing
		new Sentry.Integrations.Http({ tracing: true }),
		// enable Express.js middleware tracing
		new Tracing.Integrations.Express({
			// to trace all requests to the default router
			app,
			// alternatively, you can specify the routes you want to trace:
			// router: someRouter,
		}),
	],
	// Set tracesSampleRate to 1.0 to capture 100%
	// of transactions for performance monitoring.
	// We recommend adjusting this value in production
	tracesSampleRate: 1.0,
});

// The request handler must be the first middleware on the app
app.use(Sentry.Handlers.requestHandler());

// TracingHandler creates a trace for every incoming request
app.use(Sentry.Handlers.tracingHandler());

// Logger middleware
app.use(loggerMiddleware);

// Cors middleware
app.use(cors());

// Helmet middleware
app.use(helmet());

// Connect DB
db.mongoose
	.connect(db.url, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => {
		console.log('Connected to the database!');
	})
	.catch((err) => {
		console.log('Cannot connect to the database!', err);
		process.exit();
	});

app.use(express.json());

app.use(router);

// The error handler must be before any other error middleware and after all controllers
app.use(Sentry.Handlers.errorHandler());

// Error handler middleware
app.use(handleErrorMiddleware);

app.get('/', (req, res) => {
	res.send(`Hello world`);
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
