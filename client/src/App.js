import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useDispatch } from 'react-redux';

import { getMovies } from './actions/movies';

import Movies from './container/movies/Movies';
import AddFrom from './container/addFrom/AddFrom';

import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies())
  }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Movies/>}/>
        <Route path='/addForm' element={<AddFrom/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App