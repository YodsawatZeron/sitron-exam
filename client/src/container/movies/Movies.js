import React from 'react'
import Record from '../../components/record/Record'
import {AiOutlineSearch} from 'react-icons/ai'
import { useSelector } from 'react-redux'

import './movies.css'
import { Link } from 'react-router-dom'

const Movies = () => {
  const movies = useSelector((state) => state.movies)

  return (
    <div className='movies'>
      <div className='movies__header'>
        <h1>Movies Record</h1>
        <div className='movies__header-row'>
          <div className='movies__header-row__searchBar'>
            <AiOutlineSearch className='icon-search'/>
            <input type="text" placeholder='Search'/>
          </div>
          <Link to='/addForm'>
            <button>Add</button>
          </Link>
        </div>
      </div>

      <div className='movies__table'>
        <div className='movies__table-row table-header'>
          <div>
            <p>Title</p>
          </div>
          <div>
            <div className='column-line'/>
            <p>Year</p>
          </div>
          <div>
            <div className='column-line'/>
            <p>Rating</p>
          </div>
        </div>
        {movies.map((movie, index)=> (
          <Record title={movie.title} year={movie.year} rating={movie.rating} id={movie._id} key={movie._id}/>
        ))}
      </div>
    </div>
  )
}

export default Movies