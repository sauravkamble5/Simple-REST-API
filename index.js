const express = require('express');

//set up our express app
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

var data = [
    {name: 'Saurav', age:25},
    {name: 'Khushi', age:22},
    {name: 'Nik', age:24},
];

app.get('/', (req, res) => {
res.json(data);
})

app.post('/', (req,res) => {
    data.push(req.body);
    res.json(data);
})

app.patch('/:index', (req, res) => {
    data[req.params.index] = req.body;
    res.json(data);
})

app.delete('/:index', (req, res) => {
    data.splice(req.params.index, 1);
    res.json(data);
})

app.listen(3000, () => {
    console.log("Server is running on PORT 3000")
})