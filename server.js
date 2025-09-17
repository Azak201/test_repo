const express = require('express');
const helmet = require('helmet');
const http = require('http');
require('dotenv').config();
const session = require('express-session');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());

// Session configuration (required for persistent login sessions)
app.use(session({
  secret: process.env.SESSION_SECRET || 'dev_secret_change_me',
  resave: false,
  saveUninitialized: false,
}));

// Initialize Passport and session handling
app.use(passport.initialize());
app.use(passport.session());

// Passport serialize/deserialize
passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((obj, done) => {
  done(null, obj);
});

// Configure Google OAuth 2.0 Strategy
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID || '';
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || '';
const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL || 'http://localhost:3000/auth/google/callback';
const GOOGLE_ENABLED = Boolean(GOOGLE_CLIENT_ID && GOOGLE_CLIENT_SECRET);

if (!GOOGLE_ENABLED) {
  console.warn('Google OAuth env vars not set. Set GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET.');
} else {
  passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: GOOGLE_CALLBACK_URL,
  }, (accessToken, refreshToken, profile, done) => {
    // In a real app, find or create the user in DB here
    return done(null, {
      id: profile.id,
      displayName: profile.displayName,
      emails: profile.emails,
      photos: profile.photos,
      provider: profile.provider,
    });
  }));
}

app.use('/hello',(req, res, next) => {  // middleware 1
  console.log('Middleware for /hello route');
  next();
});
app.use('/about',(req, res, next) => {  // middleware 1
  console.log('Middleware for /about route');
  next();
});
app.use('/', (req, res, next) => {  // middleware 2
  console.log('Middleware for main route');
  next();
});

app.use((req, res, next) => {  // middleware 3
  console.log('Middleware for all routes');
  next();
});


app.get('/', (req, res) => {  // route handler
  res.send('Welcome to the main route!');
});
// Google OAuth routes
if (GOOGLE_ENABLED) {
  app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
  app.get('/auth/google/callback', passport.authenticate('google', {
    failureRedirect: '/auth/failure',
  }), (req, res) => {
    res.redirect('/profile');
  });
} else {
  app.get('/auth/google', (req, res) => {
    res.status(500).send('Google OAuth not configured. Set GOOGLE_CLIENT_ID/GOOGLE_CLIENT_SECRET.');
  });
  app.get('/auth/google/callback', (req, res) => {
    res.status(500).send('Google OAuth not configured.');
  });
}

app.get('/auth/failure', (req, res) => {
  res.status(401).send('Authentication failed');
});

app.get('/logout', (req, res, next) => {
  req.logout(err => {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

// Protected route example
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated && req.isAuthenticated()) {
    return next();
  }
  res.status(401).send('Unauthorized');
}

app.get('/profile', ensureAuthenticated, (req, res) => {
  res.json({ user: req.user });
});
app.get('/hello', (req, res) => {  // route handler
  res.send('Hello World!');
});
app.get('/about', (req, res) => {  // route handler
  res.send('About Us');
});

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
// Function to print a message to the console
function printMessage(message) {
  console.log(message);
}
});

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }
}