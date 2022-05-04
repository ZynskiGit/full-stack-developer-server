//const tuitsModel = require('./tuits-model');

import tuitsModel from "../../tuits/tuits-model.js";

const findAllTuits = async () => {
    return await tuitsModel.find()
}
const findTuitById = async (id) => {
    return await tuitsModel.findById(id)
}
const createTuit = async (tuit) => {
    return await tuitsModel.create(tuit)
}
const deleteTuit = async (id) => {
    return await tuitsModel.deleteOne({_id: id})
}
const updateTuit = async (id, updatedTuit) => {
    return await tuitsModel.updateOne(
        {_id: id},
        {$set: updatedTuit})
    // {$set: {
    //   tuit: updatedTuit.tuit,
    //     likes: updatedTuit.likes
    // }})
}
export default {
    findAllTuits, createTuit, updateTuit, deleteTuit, findTuitById
}
// module.exports = {
//   findAllTuits: findAllTuits,
//   createTuit: createTuit,
//   updateTuit: updateTuit,
//   deleteTuit: deleteTuit
// }