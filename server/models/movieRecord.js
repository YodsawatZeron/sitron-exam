import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    title: String,
    year: Number,
    rating: String
});

const MovieSchema = mongoose.model('MovieSchema', movieSchema)

export default MovieSchema;