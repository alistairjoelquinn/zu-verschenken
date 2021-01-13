const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");
const userInputLocations = require('./startingLocations.json');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.post('/new-location-click', (req, res) => {
    console.log('req.body: ', req.body);
});

app.get('/initial-user-locations', (req, res) => {
    res.json({ userInputLocations });
});

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "..", "client", "index.html")));

app.listen(process.env.PORT || 3001, () => console.log("Server Listening"));
