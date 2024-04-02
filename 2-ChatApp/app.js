const express = require('express');
const body = require("body-parser");

const loginRouter = require('./routes/login');
const chatRouter = require('./routes/chat')

const app = express();

app.use(body.urlencoded({ extended: false }));

app.use(loginRouter);
app.use(chatRouter);

app.use((req, res, next)=>{
    res.status(404).send('<h1>Page not found</h1>')
})

app.listen(4200);