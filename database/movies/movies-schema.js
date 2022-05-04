//const mongoose = require('mongoose')
import mongoose from "mongoose";

const moviesSchema = mongoose.Schema({
    title: String,
    imdbID: {type: String},
    poster: String,
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
}, {collection: "movies"})
export default moviesSchema