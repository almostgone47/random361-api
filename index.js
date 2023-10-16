const express = require('express');
const app = express();
const PORT = 3000;

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
  res.json({msg: 'YOU HIT THE TEST API'});
});

app.get('/api/rand', authenticate, (req, res) => {
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
