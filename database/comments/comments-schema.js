//const mongoose = require('mongoose')
import mongoose from "mongoose";

const commentsSchema = mongoose.Schema({
    comment: String,
    objectnumber: String,
    commenterEmail: String,
    commenter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'}
}, {collection: 'comments'})

export default commentsSchema