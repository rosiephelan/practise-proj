const express = require('express');
const bodyParser = require('body-parser')
const fs = require('fs');
const app = express();
const port = 2001;

// packages needed
app.use(express.static('public'))
app.use(express.static('views'))
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// routes
app.get('/', (req, res) => {
    res.sendfile(path.join(__dirname, '/views/index.html'))
})

// writes form data to the json file
app.post('/', (req, res) => {
    formData = req.body;
    let writeData = JSON.stringify(formData);
    fs.writeFileSync('storage.json', writeData);
})

// now wanna send json to target page...

// start server
app.listen(port, () => console.log('App listening on port 2001'));

// send form/ convert data to json file

// function handleFormSubmit(event) {
//     event.preventDefault();

//     const data = {};

//     // send to page 
//     const formDataContainer = document.getElementsByClassName('form_results')[0];

//     // make the output into readable json
//     formDataContainer.textContent = JSON.stringify(data, null, " ");



