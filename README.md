# Dad Joke Random Generator Microservice

## Overview

This microservice provides randomized selections of locations, nouns, and verbs.
It is designed for the Dad Joke generator app, which needs random data for
demonstrating the use of the application.

## UML Sequence Diagram

![Dad Joke App UML Diagram](./umlDiagram.png 'UML Diagram of Dad Joke App')

## Requesting Data

To request data from the microservice, make an HTTP `GET` request to the
`/api/rand` endpoint.

### Example Call using cURL

```bash
curl -X GET http://localhost:3000/api/rand
```

Replace localhost:3000 with the IP address provided.

## Receiving Data

Upon a successful request, the microservice responds with a JSON object
containing randomized locations, nouns, and verbs.

### Response Format

```json
{
  "location": "Random Location",
  "noun": "Random Noun",
  "verb": "Random Verb"
}
```
