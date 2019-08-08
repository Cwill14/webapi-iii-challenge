const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const userRouter = require('./users/userRouter.js');

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(logger)

server.use('/users', userRouter);
server.get('/', (req, res) => {
    res.status(200).json({
      quoteOfTheDay: process.env.QOTD
    })
});

//custom middleware

function logger(req, res, next) {
  const method = req.method;
  const url = req.url;
  const timestamp = Date.now();
  console.log(`${method} request to '${url}' at ${timestamp}`);
  next()
};

module.exports = server;
