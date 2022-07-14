const express = require('express');
const mongoose = require('mongoose');
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = require('./config/config');

const postRouter = require("./routes/postRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

const connectWithRetry = () => {
    mongoose.connect(mongoURL)
    .then(() => console.log("Succesfully connected to DB"))
    .catch((e) => {
        console.log(e);
        setTimeout(connectWithRetry, 5000);
    })
}

connectWithRetry();

app.use(express.json());
// app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => res.send(`<h1>Hi Docker Fellows!!!</h1>`));

app.use('/api/v1/posts', postRouter);
app.use('/api/v1/users', userRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on PORT ${port}`));