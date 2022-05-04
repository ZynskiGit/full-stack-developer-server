//const mongoose = require('mongoose')
//const moviesSchema = require('./movies-schema')
import mongoose from "mongoose";
import moviesSchema from "./movies-schema.js";

const moviesModel = mongoose.model(
    'MoviesModel', moviesSchema
)
export default moviesModel