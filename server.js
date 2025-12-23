const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/geo-keywords', async (req, res) => {
    const { query, location } = req.query;

    if (!query || !location) {
        return res.status(400).json({ error: 'Query এবং Location উভয়ই প্রয়োজন।' });
    }

    try {
        const response = await axios.get('https://maps.googleapis.com/maps/api/place/textsearch/json', {
            params: {
                query: `${query} in ${location}`,
                key: process.env.GOOGLE_API_KEY
            }
        });

        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'কিছু ভুল হয়েছে।' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
