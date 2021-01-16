const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");

const { s3Url } = require('../awsconfig');
const { uploader } = require('./aws/upload');
const s3 = require('./aws/s3');

const { getInitialLocations, insertNewLocation } = require('./database/queries');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.post('/new-location-click', uploader.single('image'), s3.upload, async (req, res) => {
    const imageUrl = `${s3Url}${req.file.filename}`;
    const { rows } = await insertNewLocation(
        req.body.lat,
        req.body.lng,
        req.body.date,
        imageUrl,
        req.body.userTextInput
    );
    res.json(rows[0]);
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
