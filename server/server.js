const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");

console.log('process.env.MAP_API_KEY: ', process.env.MAP_API_KEY);

app.use(compression());
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "..", "client", "index.html")));

app.listen(process.env.PORT || 3001, () => console.log("Server Listening"));
