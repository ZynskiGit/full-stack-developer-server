import mongoose from "mongoose";
import artSchema from "./art-schema.js";

const artModel = mongoose.model(
    'ArtModel', artSchema
)
export default artModel