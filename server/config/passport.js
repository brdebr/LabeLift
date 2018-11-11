const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const moment = require('moment');
const User = require('../models/user');


const opts = {};
opts.jwtFromRequest = ExtractJWT.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (payload, done) => {
        User.findOne({
                where: {
                    email: payload.email
                }
            })
            .then(user => {
                if (user) {
                    let safeUser = (({ id, name, email }) => ({ id, name,email }))(user);
                    let now = moment();
                    let exp = moment.unix(payload.exp);
                    safeUser.expHuman = now.to(exp);
                    safeUser.exp = exp.format("DD/MM/YYYY - hh:mm:ss");
                    return done(null, safeUser);
                }
                return done(null, false);
            })
            .catch(err => {
                console.log(err);
            });
    }));
};