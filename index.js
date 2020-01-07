const express = require('express');
const path = require('path');

const router = express.Router();
const app = express();

router.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/maquetacion.html`));
});

router.get('/login', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/login.html`));
});

router.get('/register', (req, res) => {
  res.sendFile(path.join(`${__dirname}/public/register.html`));
});

app.use('/', router);
app.use(express.static(`${__dirname}/public`));

app.listen(3000, () => {
// eslint-disable-next-line no-console
  console.log('App listening on port 3000!');
});
