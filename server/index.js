var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const cors = require('cors');
const app = express()
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());
app.use(express.static('dist'))
console.log(__dirname)


const dotenv = require('dotenv');
const { request } = require('http');
const { response } = require('express');
const { text } = require('body-parser');
dotenv.config();






app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


const url ="https://api.meaningcloud.com/sentiment-2.1?key="
const key = process.env.API_KEY


app.post('/api', async function (request, response){
        console.log(request.body)
        const result = await fetch(`${url}${key}&txt=${request}`)
        try {
            const monkey = await result.json();
            res.send(monkey)
            console.log(response)
        } catch (error) {
            console.log("error", error);
        }
})


