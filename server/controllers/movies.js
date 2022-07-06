import MovieRecord from '../models/movieRecord.js'

export const getMovies = async (req, res) => {
    try {
        const moviesList = await MovieRecord.find();

        res.status(200).json(moviesList)
    } catch (error) {
        console.log(error)
    }
}

export const createMovie = async (req, res) => {
    const movie = req.body;

    const newMovie = new MovieRecord(movie)
    console.log(movie)
    try {
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        console.log(error)
    }
}