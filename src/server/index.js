var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require("dotenv");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");

const app = express()

app.use(express.static('dist'))

console.log(__dirname);

dotenv.config();

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

const PORT = 8081
const apiKey= process.env.API_KEY
const apiURL = "https://api.meaningcloud.com/sentiment-2.1"

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/add-url', async (req, res)=> {
    try{
        const url = req.body.url
        const MainUrl= `${apiURL}?key=${apiKey}&url=${url}&lang=en`
        const response = await axios(MainUrl)
        res.send(
            ({
              score_tag,
              agreement,
              subjectivity,
              confidence,
              irony,
            } = response.data)
          );
    } catch(error){
        console.log(error.message)
    }
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

export { app }
