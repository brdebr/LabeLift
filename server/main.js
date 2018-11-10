const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



app.listen(port, () => {
    console.log(`· Express server up! :D \n`+
    ` - Start time: ${new Date(Date.now()).toLocaleString()}\n`+
    ` - Port: ${port}`);
});