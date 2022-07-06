import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { createMovie } from '../../actions/movies'
import './addFrom.css'

const AddFrom = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [movieData, setMovieData] = useState({ title : null, year: null, rating: 'G'})
  const [checkTitle, setCheckTitle] = useState(false);
  const [checkYear, setCheckYear] = useState(false);
  const [alert, setAlert] = useState(false);

  const alertInputStyle = {
    outline: '1px solid red',
    boxShadow: '0px 0px 5px red'
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkTitle && checkYear ? setAlert(false) : setAlert(true)

    if(checkTitle && checkYear){
      console.log('Sucessfully created', movieData.title)
      dispatch(createMovie(movieData));
      navigate('/');
    } else {
      console.log('You Cannot!')
    }
  }

  useEffect(() => {
    movieData.title ? setCheckTitle(true) : setCheckTitle(false)
    movieData.year ? setCheckYear(true) : setCheckYear(false)
    
  }, [movieData])

  return (
    <div className='container'>
        <div className='form'>
            <h1>Movie Form</h1>
            <form action='/' method="post" onSubmit={handleSubmit}>
                <p>Title</p>
                <input
                  type="text"
                  name="title" 
                  style={!checkTitle && alert ? alertInputStyle : {}}
                  onChange={(e) => setMovieData({...movieData, title: e.target.value})}
                />
                <p>Year</p>
                <input 
                  type="number"
                  name="year"
                  placeholder='number'
                  style={!checkYear && alert ? alertInputStyle : {}}
                  onChange={(e) => setMovieData({...movieData, year: e.target.value})}
                />
                <p>Rating</p>
                <select
                  name="rating"
                  defaultValue={movieData.rating}
                  onChange={(e) => setMovieData({...movieData, rating: e.target.value})}
                >
                  <option value="G">G</option>
                  <option value="PG">PG</option>
                  <option value="M">M</option>
                  <option value="MA">MA</option>
                  <option value="R">R</option>
                </select><br />
                {alert && <div className='text-alert'>Please fill out the information completely</div>}
                <div className='form__btn-container'>
                  <Link to='/'>
                    <span className='btn btn-cancel'>Cancel</span>
                  </Link>
                  <button className='btn btn-action' type='submit'>Add</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AddFrom