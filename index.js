require('dotenv').config();
const express = require('express'),
      ctrl = require('./controller'),
      {SERVER_PORT} = process.env,
      port = SERVER_PORT,
      app = express();

app.use(express.json());

app.post('/api/email', ctrl.email)

app.listen(port, () => console.log(`Server listening on ${port}`));