const { Strategy, ExtractJwt } = require('passport-jwt');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'mysecretkey'
};

module.exports = (passport) => {
    passport.use(
        new Strategy(opts, (jwt_payload, done) => {
            if (jwt_payload.id) {
                return done(null, jwt_payload);
            } else {
                return done(null, false);
            }
        })
    );
};
