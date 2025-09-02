import dotenv from 'dotenv';
import Express from 'express';
import cors from 'cors';

dotenv.config();

const app = Express();

app.use(Express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.send({ message: 'ok' });
});

app.listen(process.env.PORT, () => {
  console.log(`Server started on port 3000!`);
});
