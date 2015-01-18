
/**
 * Module dependencies.
 */

var mongoose = require('mongoose');
var GitHubStrategy = require('passport-github').Strategy;
var config = require('../config');
var User = mongoose.model('User');

/**
 * Expose
 */

module.exports = new GitHubStrategy({
    clientID: config.github.clientID,
    clientSecret: config.github.clientSecret,
    callbackURL: "http://127.0.0.1:3000/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      
      // To keep the example simple, the user's GitHub profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the GitHub account with a user record in your database,
      // and return that user instead.
      return done(null, profile);
    });
  }
);
