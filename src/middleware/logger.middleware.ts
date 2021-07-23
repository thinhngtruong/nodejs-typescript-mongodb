import morgan from 'morgan';
import { Response, Request } from 'express';
// Request body logger
morgan.token('req-body', (req: Request, res: Response) => JSON.stringify(req.body));

const logger = morgan(':method :url :status :res[content-length] - :response-time ms :req-body');

export default logger;
