import dotenv from 'dotenv';
import Express from 'express';
import cors from 'cors';

import { Request, Response, NextFunction } from 'express';
import routes from './routes/index';
import AppError from '../errors/AppError';

dotenv.config();

const app = Express();

app.use(cors());
app.use(Express.json());
app.use(Express.urlencoded());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }
    console.log(error);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}!`);
});
