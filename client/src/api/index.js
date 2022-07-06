import axios from 'axios';

const url = `http://localhost:4001`;

export const fetchMovies = () => axios.get(url);
export const createMovie = (newMovie) => axios.post(url, newMovie);