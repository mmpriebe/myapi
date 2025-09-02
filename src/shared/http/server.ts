import Express from 'express';
import cors from 'cors';

const app = Express();

app.use(Express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.send({ message: 'ok' });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
