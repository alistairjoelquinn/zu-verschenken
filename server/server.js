const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");

const { getInitialLocations, insertNewLocation } = require('./database/queries');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.post('/new-location-click', async (req, res) => {
    const { rows } = await insertNewLocation();
    console.log('rows: ', rows);
});

app.get('/initial-user-locations', async (req, res) => {
    try {
        const { rows } = await getInitialLocations();
        res.json(rows);
    } catch (err) {
        console.log('err fetching initial locations: ', err);
    }
});

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "..", "client", "index.html")));

app.listen(process.env.PORT || 3001, () => console.log("Server Listening"));
