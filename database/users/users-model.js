//const mongoose = require('mongoose')
//const usersSchema = require('./users-schema')
import mongoose from "mongoose";
import usersSchema from "./users-schema.js";

const usersModel = mongoose.model(
    'UsersModel',
    usersSchema
)
export default usersModel;