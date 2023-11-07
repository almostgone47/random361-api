const express = require('express');
const app = express();
const PORT = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET');
  res.setHeader('Access-Control-Allow-Headers:', '*');
  next();
});

const locations = [
  'Boston',
  'New York',
  'Los Angeles',
  'San Francisco',
  'Seattle',
  'Austin',
];
const nouns = ['Cat', 'Dog', 'Bird', 'Elephant', 'Lion', 'Fish'];
const verbs = ['Running', 'Dancing', 'Playing', 'Partying', 'Sleeping'];
let apiHits = 0;

// Let Vinnie know he needs to send headers with the following:
// Authorization: Bearer randgen361

function authenticate(req, res, next) {
  const authHeader = req.headers.authorization;

  console.log('API Hit: ', (apiHits += 1), 'by: ', req.headers);
  if (authHeader && authHeader === 'Bearer randgen361') {
    next();
  } else {
    res.status(401).send('Unauthorized');
  }
}

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.get('/', (req, res) => {
  res.status(200).json({msg: 'A message from CS361'});
});

app.post('/', (req, res) => {
  console.log('Message received: ', req.body);
  res.status(200).send('Unauthorized');
});

app.get('/api/rand', (req, res) => {
  const response = {
    location: getRandomItem(locations),
    noun: getRandomItem(nouns),
    verb: getRandomItem(verbs),
  };
  res.json(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
