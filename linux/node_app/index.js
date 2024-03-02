// index.js

const express = require('express');
const app = express();

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});

app.get('/', (req, res) => {
	res.send('Hello World!!');
});

const hobbies = ['Reading', 'Coding', 'Travelling', 'Cooking', 'Gardening'];
app.get('/hobbies', (req, res) => {
	res.send(hobbies);
});

app.get('/status', (req, res) => {
	res.send('Server is running');
});

app.get('/test', (req, res) => {
	res.send('Test route');
});

app.get('/test2', (req, res) => {
	res.send('Test2 route');
});