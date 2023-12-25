const start = require('./db/db').start;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const userRouter =  require('./routes/userRouter');
const axios = require("axios").create({baseURL: "http://localhost:3001"});
const app = express();

const corsOptions = {
    origin: 'http://localhost:3001/',
    optionsSuccessStatus: 200
}

app.use(cors());
app.use(bodyParser.json(corsOptions));
app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );

app.get('/', function(req, res) {
    // start();
    console.log('123')
})

app.use('/sign-in', userRouter);




app.listen(3001, () => {
    console.log('yes')
});

