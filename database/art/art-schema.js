import mongoose from "mongoose";

const artSchema = mongoose.Schema({
    title: String,
    objectnumber: {type: String},
    primaryimageurl: String,
    likes: {type: Number, default: 0},
    dislikes: {type: Number, default: 0},
}, {collection: "art"})
export default artSchema;