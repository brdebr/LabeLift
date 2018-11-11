const dotenv = require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const sequelize = require('./database/sequelize');
const initModels = require('./database/models');

console.log();

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())


const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

app.use('/api', userRoutes);
app.use('/api', authRoutes);


console.log("Synching database ...\n");
sequelize.sync()
    .then(result => {
        console.log("\n... synching database DONE!\n");
        console.log(
            `-> Connected to Database! :D\n` +
            `  - DB Name: '${result.config.database}'\n` +
            `  - Port: ${result.config.port}\n` +
            `  - Dialect: ${result.options.dialect}\n`
        );

        app.listen(port, () => {
            console.log(
                `-> Express server up! :D\n` +
                `  - Start time: ${new Date(Date.now()).toLocaleString()}\n` +
                `  - Port: ${port}`);
        });

    }).catch(err => {
        console.log(err);
    })