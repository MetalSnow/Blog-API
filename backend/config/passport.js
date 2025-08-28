const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const prisma = new PrismaClient();

passport.use(
  new LocalStrategy(
    { usernameField: 'email' },
    async (email, password, done) => {
      try {
        const user = await prisma.user.findFirst({
          where: {
            email: email,
          },
        });

        if (!user) {
          return done(null, false, { message: 'Incorrect Email' });
        }

        const isMatched = await bcrypt.compare(password, user.password);

        if (!isMatched) {
          return done(null, false, { message: 'Incorrect Password' });
        }

        done(null, user);
      } catch (err) {
        done(err);
      }
    }
  )
);

// Verify JWT token
let opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET;

passport.use(
  new JwtStrategy(opts, async (data, done) => {
    try {
      const user = prisma.user.findFirst({
        where: {
          id: data.id,
        },
      });

      if (!user) {
        return done(null, false, {
          message: 'You are not authorized to view this resource.',
        });
      }

      done(null, user);
    } catch (err) {
      done(err);
    }
  })
);

module.exports = passport;
