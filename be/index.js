require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cors = require("cors");

let user = {};

const FacebookStrategy = require("passport-facebook").Strategy;
passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_APP_SECRET,
      //Endpoint to rediect to Once we have a successful login
      callbackURL: "http://localhost:5000/auth/facebook/callback"
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

const port = 3000;

app.get("/auth/facebook", passport.authenticate("facebook"));

app.get( "/auth/facebook/callback", passport.authenticate("facebook", { successRedirect: "/profile", failureRedirect: "/login" }));

app.get("/profile", function(req, res){

    res.json(user)
})

app.get("/", (req, res) => res.send("Welcome"));

app.listen(port, () =>
  console.log(`App listening to http://localhost:${port}`)
);
