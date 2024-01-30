const start = require('./db/db').start;
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');
const {signInRouter, profileRouter, registerRouter, userdataRouter, signOutRouter} =  require('./routes/userRouter');
const axios = require("axios").create({baseURL: "http://localhost:3001"});
const app = express();

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(bodyParser.json(corsOptions));
app.use(
    bodyParser.urlencoded({
      extended: true,
    }),
  );
app.use(session({
  secret: 'sharks must live',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
}))

app.get('/', function(req, res) {
    // start();
    console.log('123')
})

app.use('/sign-in', signInRouter);
app.use('/register', registerRouter);
app.use('/userdata', userdataRouter);
app.use('/profile', profileRouter);
app.use('/sign-out', signOutRouter);

app.listen(3001, () => {
    console.log('yes')
});

