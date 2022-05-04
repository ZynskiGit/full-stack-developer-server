//const dao = require('./comments-dao')

import dao from "./comments-dao.js";

const postComment = async (req, res) => {
    const comment = req.body
    const objectnumber = req.params.objectNumber
    const userId = req.params.userId
    const insertedComment = await dao.postComment(userId, objectnumber, comment)
    res.json(insertedComment)
}

const findCommentsByObjectNumber = async (req, res) => {
    const objectnumber = req.params.objectnumber
    const comments = await dao.findCommentsByObjectNumber(objectnumber)
    res.json(comments)
}

const findCommentsByUserId = async (req, res) => {
    const userId = req.params.userId
    const comments = await dao.findCommentsByUserId(userId)
    res.json(comments)
}

export default (app) => {
    app.post('/art/:objectnumber/comments/:userId', postComment)
    app.get('/art/:objectnumber/comments', findCommentsByObjectNumber)
    app.get('/art/:userId/comments', findCommentsByUserId)
}