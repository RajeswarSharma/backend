"use strict";
const passport = require("passport");
const sanitize = require("mongo-sanitize");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const GitHubStrategy = require("passport-github2").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/users");

//-------------------------------------------------END OF
//IMPORTS---------------------------------------------//

//----------------------------------------------GOOGLE OAUTH
//STRATEGY-----------------------------------------//
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "https://cucoders.herokuapp.com/auth/google/redirect",
    },
    (accessToken, refreshToken, profile, done) => {
      const email = sanitize(profile.emails[0].value);
      User.findOne({ email }).then((oldUser) => {
        if (oldUser) {
          done(null, oldUser._id);
        } else {
          const firstname = sanitize(profile.name.givenName);
          const lastname = sanitize(profile.name.familyName);
          const third_partyID = sanitize(profile.id);
          new User({
            firstname,
            lastname,
            email,
            third_partyID,
            auth_type: "google",
            password: null,
            mailtoken: null,
            isactive: true,
          })
            .save()
            .then((newUser) => {
              done(null, newUser._id);
            });
        }
      });
    }
  )
);
//-------------------------------------END OF GOOGLE OAUTH
//STRATEGY-----------------------------------//

//----------------------------------------- GITHUB
//STRATEGY------------------------------------------//

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "https://cucoders.herokuapp.com/auth/github/redirect",
      scope: ["user:email"],
    },
    (accessToken, refreshToken, profile, done) => {
      //console.log(profile);
      const email = sanitize(profile.emails[0].value);
      User.findOne({ email }).then((oldUser) => {
        if (oldUser) {
          // User with the same email already exists
          done(null, oldUser._id);
        } else {
          const firstname = sanitize(profile.displayName);
          const third_partyID = sanitize(profile.id);
          new User({
            firstname,
            lastname: null,
            email,
            third_partyID,
            auth_type: "github",
            password: null,
            mailtoken: null,
            isactive: true,
          })
            .save()
            .then((newUser) => {
              done(null, newUser._id);
            });
        }
      });
    }
  )
);

//--------------------------------------END OF GITHUB
//STRATEGY----------------------------------------//

//-------------------------------------------LOCAL
//STRATEGY-------------------------------------------//
passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "password", session: true },
    (email, password, done) => {
      const sEmail = sanitize(email);
      User.findOne({ email: sEmail }, (err, user) => {
        if (err) {
          return done(err);
        }
        // If the user is invalid
        if (!user) {
          return done(null, false, {
            success: false,
            message: "unregistered email",
          });
        }
        // Password is null i.e registered using google or github
        if (!user.password) {
          return done(null, false, {
            message: "Invalid login mode",
            success: false,
          });
        }
        const sPassword = sanitize(password);
        bcrypt.compare(sPassword, user.password).then((isValid) => {
          if (isValid) {
            // Checking if email is verified by the user
            if (user.isactive) {
              return done(null, user._id);
            }
            return done(null, false, {
              message: "Please verify your email first",
            });
          }
          // incorrect password
          return done(null, false, {
            message: "Invalid Credentials",
            success: false,
          });
        });
      });
    }
  )
);
//--------------------------------------------------END  OF LOCAL
//STRATEGY----------------------------------------//
//------------------------------------------------SERIALIZERS AND
//DESERIALIZERS-----------------------------------//
passport.serializeUser((id, done) => {
  done(null, id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    if (user) {
      done(null, user);
    }
  });
});
//------------------------------------------END OF SERIALIZERS AND
//DESERIALIZERS----------------------------------//
