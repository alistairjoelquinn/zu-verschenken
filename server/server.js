const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");

const { getInitialLocations } = require('./database/queries');

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.post('/new-location-click', (req, res) => {
    userInputLocations.push(req.body);
    res.json({ userInputLocations });
});

app.get('/initial-user-locations', async (req, res) => {
    const { rows } = await getInitialLocations();
    res.json(rows);
});

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "..", "client", "index.html")));

app.listen(process.env.PORT || 3001, () => console.log("Server Listening"));
