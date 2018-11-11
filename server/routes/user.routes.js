const express = require('express');
const passport = require('passport');
const moment = require('moment');
const usersController = require('../controllers/users.js');

const router = express.Router();



router.get('/users', passport.authenticate('jwt', {session:false}), usersController.getUsers);
router.get('/current',
    passport.authenticate('jwt', {
        session: false
    }),
    (req, res) => {
        res.json({
            message: 'Here is your current user !',
            user: {
                id: req.user.id,
                name: req.user.name,
                email: req.user.email,
                tokenExpHuman: 'Expires '+req.user.expHuman,
                tokenExp: req.user.exp,
            }
        });
    });


module.exports = router;