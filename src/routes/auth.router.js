const express = require('express');
const passport = require('passport');

const authRouter = express.Router();

authRouter.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

authRouter.get('/auth/google/callback', passport.authenticate('google'));

authRouter.get('/auth/github', passport.authenticate('github'));

authRouter.get('/auth/github/callback', passport.authenticate('github'));

authRouter.get('/api/logout', (req, res) => {
  req.logout();
  res.send(req.user);
});

authRouter.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = authRouter;
