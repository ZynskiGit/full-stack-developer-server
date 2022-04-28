// express = require('express')
import express from 'express'; // after configuring package.json, we can import the normal way
import cors from 'cors';

//import tuitsController from "./tuits/tuits-controller.js";
// import helloController
//     from "./controllers/hello-controller.js";
import userController from "./controllers/user-controller.js";
import tuitsController from "./controllers/tuits-controller.js";

// mongoose.connect('mongodb://localhost:27017/webdev');
const app = express();
app.use(cors());
app.use(express.json());
userController(app);
tuitsController(app);
app.listen(process.env.PORT ||4000);