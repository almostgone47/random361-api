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

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

app.get('/rand-stuff', (req, res) => {
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
