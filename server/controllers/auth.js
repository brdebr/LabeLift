const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = (req, res, next) => {
    console.log(req.body);
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;
    bcrypt
        .hash(password, 12)
        .then(hashedPw => {
            console.log(hashedPw);
            const user = new User({
                name: name,
                email: email,
                password: hashedPw,
            });
            return user.save();
        })
        .then(result => {
            res.status(201).json({
                message: 'User created! :D',
                data: result.id,
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.login = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if (bcrypt.compare(password, user.password)) {
            let token = jwt.sign({
                    email: user.email,
                    name: user.name
                },
                'mynotsecretkey', {
                    expiresIn: '1h'
                });
            res.json({
                message: 'Login Successfully! :D',
                data: {
                    userId: user.id,
                    userName: user.name,
                    userEmail: user.email
                },
                token: token
            });
        }
    })
};