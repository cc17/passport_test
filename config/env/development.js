
/**
 * Expose
 */

module.exports = {
  db: 'mongodb://localhost/your_project_development',
  facebook: {
    clientID: 'APP_ID',
    clientSecret: 'SECRET',
    callbackURL: 'http://127.0.0.1:3000/auth/facebook/callback',
    scope: [
      'email',
      'user_about_me',
      'user_friends'
    ]
  },
  github: {
    clientID: '7c0c9828789f61c0b546',
    clientSecret: '698df0868e7ea2cd4951c14cbc15c9b3c0d04d53',
    callbackURL: 'http://127.0.0.1:3000/auth/github/callback'
  },
  google: {
    clientID: 'APP_ID',
    clientSecret: 'SECRET',
    callbackURL: 'http://localhost:3000/auth/google/callback',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
      'https://www.google.com/m8/feeds',
    ]
  }
};
