//const mongoose = require('mongoose')
//const commentsSchema = require('./comments-schema')
import mongoose from "mongoose";
import commentsSchema from "./comments-schema.js";

const commentsModel = mongoose.model(
    'CommentsModel',
    commentsSchema
)

export default commentsModel;