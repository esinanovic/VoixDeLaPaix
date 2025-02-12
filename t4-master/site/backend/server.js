const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

require('./routes')(app);

app.use((err, req, res, next) => {
  if (err.status === undefined) {
    return res.status(500).send(err.message)
  } else {
    return res.status(err.status).send(err.message)
  }
});

const server = app.listen(3000, () => {
  const host = server.address().address
  const port = server.address().port
  console.log('App listening at http://%s%s', host, port)
});