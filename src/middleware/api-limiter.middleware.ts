import rateLimit from 'express-rate-limit';

// Rate Limiter
export const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // start blocking after 100 requests
	status: 429, // response status code
	message: {
		error: 'Too many accounts created from this IP, please try again after an hour',
	},
});