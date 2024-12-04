const express = require("express");
const app = express();
const morgan = require('morgan')
const axios = require('axios')
const dotenv = require("dotenv");
const methodOverride = require("method-override");

dotenv.config();
const port = process.env.PORT

app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method")); // new
app.use(morgan('dev'))

route.get('/weather', async (req, res) => {
  axios.get()
  await car.create(req.body)
  res.redirect('/cars/new')
})

app.listen(port, () => {
  console.log("Listening on port 3000");
});


