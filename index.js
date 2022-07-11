const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.get("/", (req, res) => res.send(`<h1>Hi Docker Fellows!!!</h1>`))

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on PORT ${port}`));