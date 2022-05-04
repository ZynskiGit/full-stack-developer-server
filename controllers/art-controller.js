import artDao from "../database/art/art-dao.js";

const likeArt = async (req, res) => {
    let art = req.body
    art = await artDao.likeArt(art)
    res.json(art)
}

const findArtByObjectNumber = async (req, res) => {
    const objectnumber = req.params.objectnumber
    const art = await artDao.findArtByObjectNumber(objectnumber)
    res.json(art)
}

export default (app) => {
    app.post('/api/likes', likeArt)
    app.get('/api/objects/:objectnumber', findArtByObjectNumber)
}