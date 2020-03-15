require('dotenv').config()
const express = require('express')
const passport = require('passport')
const cors = require('cors');

const FacebookStrategy = require('passport-facebook').Strategy;

const app = express()
app.use(cors())

const port = 3000


app.get('/', (req, res) => res.send('Welcome'))

app.listen(port, () => console.log(`App listening to http://localhost:${port}`))