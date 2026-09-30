const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;  
app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/lokasi', async (req, res) => {
    const kota = "Jakarta";

    