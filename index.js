require("dotenv").config();
const express = require("express");
const passport = require("passport");
const FacebookStrategy = require("passport-facebook").Strategy;
const cors = require("cors");
const helmet = require('helmet')

let user = {};



passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      //Endpoint to rediect to Once we have a successful login
      callbackURL: "https://deploy-facebook.herokuapp.com/auth/facebook/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      user = {
        ...profile
      };
      done(null, profile);
    }
  )
);
const app = express();
app.use(cors());
app.use(helmet())
app.use(passport.initialize());
app.use(express())
const port = process.env.PORT || 5000;

app.get("/auth/facebook", passport.authenticate("facebook"));

app.get( "/auth/facebook/callback", passport.authenticate("facebook", { successRedirect: "https://deploy-facebook.herokuapp.com/profile", failureRedirect: "/login" }));

app.get("/profile", function(req, res){

    res.json(user)
})

app.get("/", (req, res) => res.send("Welcome"));

app.listen(port, () =>
  console.log(`App listening to http://localhost:${port}`)
);
