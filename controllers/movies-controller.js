//const moviesDao = require('../database/movies/movies-dao')

import moviesDao from "../database/movies/movies-dao.js";

const likeMovie = async (req, res) => {
    let movie = req.body
    movie = await moviesDao.likeMovie(movie)
    res.json(movie)
}

const findMovieByImdbID = async (req, res) => {
    const imdbID = req.params.imdbID
    const movie = await moviesDao.findMovieByImdbID(imdbID)
    res.json(movie)
}

export default (app) => {
    app.post('/api/likes', likeMovie)
    app.get('/api/movies/:imdbID', findMovieByImdbID)
}