const express = require("express");
const app = express();
const compression = require("compression");
const path = require("path");

app.use(compression());
app.use(express.static(path.join(__dirname, "..", "client", "public")));

app.get("*", (req, res) => res.sendFile(path.join(__dirname, "..", "client", "index.html")));

app.listen(process.env.PORT || 3001, () => console.log("Server Listening"));
