require('dotenv').config();

const app = require('express')();
const axios = require('axios');
const NASA_API_KEY = 'T21VjYpn5fNmI3VgdF2C60OCejltRcnmawetwyFh';

app.get('/', (req, res) => {
    res.status(200).send("Hello World!");
});

app.get('/meteoros', async (req, res) => {
    const startDate = req.query.start_date || '2025-07-15';
    const endDate = req.query.end_date || '2025-07-15';
    
    const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${NASA_API_KEY}`;

    const response = await axios.get(url);
    res.json(response.data);
});


module.exports = app;