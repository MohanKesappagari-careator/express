/* eslint-disable no-console */
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes');

const PORT = 5001;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', userRouter);
const NAMES = ['rev', 'sudha', 'shake', 'mohan'];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/name', (req, res) => {
  res.send(NAMES);
});

app.post('/name', async (req, res) => {
  const { name } = req.body;
  NAMES.push(name);
  res.send(NAMES);
});

app.put('/name/:na', (req, res) => {
  const { name } = req.body;
  const { na } = req.params;

  const INDEX = NAMES.indexOf(na);
  NAMES[INDEX] = name;
  res.send(NAMES);
});

app.delete('/name/:na', (req, res) => {
  const { na } = req.params;
  const INDEX = NAMES.indexOf(na);

  NAMES.splice(INDEX, 1);
  res.send(NAMES);
});
app.listen(PORT, () => console.log(PORT));
