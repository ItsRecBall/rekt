const express = require('express');

const app = express();
const port = process.env.PORT || 8100;

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express Yeall' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));