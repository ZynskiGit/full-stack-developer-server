import mongoose from 'mongoose';
const schema = mongoose.Schema({
    id: String,
    topic: String,
    postedBy: {
        username: String
    },
    liked: Boolean,
    verified: Boolean,
    handle: String,
    time: Number,
    title, String,
    tuit: String,
    attachments: {
        video: String
    },
    logo: String,
    avatar: String,
    stats: {
        comments: Number,
        retuits: Number,
        likes: Number
    },
}, {collection: 'tuits'});
export default schema;

