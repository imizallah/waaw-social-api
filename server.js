const http = require('http');
const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

const server = http.createServer(app);

const port = process.env.PORT || 7000;

mongoose.connect("mongodb+srv://imizallah:imizallahlalala@waawsocial-app.kb65t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
  .then(() => console.log('Database up and doing:::'))
  .catch(err => console.log(`Database no gree start, this na why: ${err.message}`));

server.listen(port, () => console.log(`Server listenig on::: ${port}`));