const express = require("express");
const app = express();
const morgan = require('morgan')
const axios = require('axios')
const dotenv = require("dotenv");

dotenv.config();
const port = 3000
const apiKey = process.env.API_KEY
app.use(express.urlencoded({ extended: false }))
app.listen(port, () => {
  console.log("Listening on port 3000");
});


app.use(morgan('dev'))

app.get('/', async (req, res) => {
    res.render('../views/index.ejs')
})

app.post('/weather', async (req, res) => {
const theUrl=`http://api.openweathermap.org/data/2.5/weather?zip=${req.body.zip_code.trim()},us&units=imperial&appid=${apiKey}`
  axios({
    method:'get',
    url:theUrl
  }).then(resp=>{
    res.render('../views/weather/show.ejs',{data:resp.data})
  }).catch(err=>{
    console.log(err)
  })

})

