//const commentModel = require('./comments-model')
import commentModel from './comments-model.js'

const postComment = async (userId, objectnumber, comment) => {
    comment.commenter = userId
    comment.objectnumber = objectnumber
    const actualComment = await commentModel.create(comment)
    return actualComment
}

const findCommentsByObjectNumber = (objectnumber) =>
    commentModel.find({objectnumber})

const findCommentsByUserId = (userId) =>
    commentModel.find({commenter: userId})

export default {
    postComment, findCommentsByObjectNumber, findCommentsByUserId
}