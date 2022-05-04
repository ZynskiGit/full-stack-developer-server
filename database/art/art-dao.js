import artModel from "./art-model.js";

const likeArt = async (art) => {
    let existingArt = await artModel.findOne({objectnumber: art.objectnumber})
    if(existingArt) {
        // update
        await artModel.updateOne({objectnumber: art.objectnumber}, {
            $set: {likes: existingArt.likes + 1}
        })
        existingArt.likes++
    } else {
        // insert
        try {
            existingArt = await artModel.create({
                // title: art.title,
                // objectnumber: art.objectnumber,
                // poster: art.primaryimageurl,
                ...art,
                likes: 1,
                dislikes: 0
            })
        } catch(e) {
            console.log(e)
        }
    }
    return existingArt
}

const findArtByObjectNumber = async (objectnumber) => {
    const art = await artModel.findOne({objectnumber})
    return art
}

export default {
    likeArt, findArtByObjectNumber
}