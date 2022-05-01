// express = require('express')
import express from 'express'; // after configuring package.json, we can import the normal way
import cors from 'cors';
import helloController
    from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import mongoose from "mongoose";

const DB_CONNECTION_STRING = "mongodb+srv://korczynski:Al117943@cluster0.nyxzu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/fsd';
mongoose.connect(CONNECTION_STRING);

app.use(cors());
const app = express();
helloController(app);
userController(app);
app.use(express.json());

app.listen(process.env.PORT || 4000);