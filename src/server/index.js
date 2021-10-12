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
    // res.sendFile('dist/index.html')
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
// a route that handling post request for new URL that coming from the frontend
/* TODO:
    1. GET the url from the request body
    2. Build the URL it should be something like `${BASE_API_URL}?key=${MEAN_CLOUD_API_KEY}&url=${req.body.url}&lang=en`
    3. Fetch Data from API
    4. Send it to the client
    5. REMOVE THIS TODO AFTER DOING IT 😎😎
    server sends only specified data to the client with below codes
     const sample = {
       text: sentence_list[0].text,
       score_tag : score_tag,
       agreement : agreement,
       subjectivity : subjectivity,
       confidence : confidence,
       irony : irony
     }
*/

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.listen(PORT, (error) => {
    if (error) throw new Error(error)
    console.log(`Server listening on port ${PORT}!`)
})

export { app }
