// DEPENDENCIES

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');

const sequelize = require('./database/sequelize');
const initModels = require('./database/models');

const serverConf = require('./config/server');

console.log();

// EXPRESS JS

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

// Allow CORS

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
      'Access-Control-Allow-Methods',
      'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });

// PASSPORT
app.use(passport.initialize());
require('./config/passport')(passport);


// ROUTES 

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

app.use('/api', userRoutes);
app.use('/api', authRoutes);


// DATABASE AND START SERVER

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

        app.listen(PORT, () => {
            console.log(
                `-> Express server up! :D\n` +
                `  - Start time: ${new Date(Date.now()).toLocaleString()}\n` +
                `  - Port: ${PORT}`);
        });

    }).catch(err => {
        console.log(err);
    });