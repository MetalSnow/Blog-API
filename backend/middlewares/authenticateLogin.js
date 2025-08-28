const passport = require('../config/passport');

module.exports = (req, res, next) => {
  passport.authenticate(
    'local',
    {
      session: false,
    },
    (err, user, info) => {
      if (err) {
        return res.status(500).json({
          success: false,
          error: 'Internal server error',
        });
      }

      if (!user) {
        return res.status(401).json({
          success: false,
          error: info.message || 'Authentication failed!',
        });
      }

      req.user = user;
      next();
    }
  )(req, res, next);
};
