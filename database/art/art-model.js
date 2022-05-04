import mongoose from "mongoose";
import moviesSchema from "./art-schema.js";
import artSchema from "./art-schema.js";

const artModel = mongoose.model(
    'ArtModel', artSchema
)
export default artModel