import dotenv from 'dotenv';
import Express from 'express';
import cors from 'cors';

import routes from './routes';

dotenv.config();

const app = Express();

app.use(Express.json());
app.use(cors());

app.use(routes);

app.listen(process.env.PORT, () => {
  console.log(`Server started on port 3000!`);
});
