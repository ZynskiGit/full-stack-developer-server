// express = require('express')
import express from 'express'; // after configuring package.json, we can import the normal way
import helloController
    from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
const app = express();
helloController(app);
userController(app);
app.use(express.json());

app.listen(4000);