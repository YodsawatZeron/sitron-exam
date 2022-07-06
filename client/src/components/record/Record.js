import React from 'react'
import './record.css'

const Record = ({title,year, rating, id}) => {
  return (
    <div className='movies__table-row'>
      <div>
        <p>{title}</p>
      </div>
      <div>
        <div className='column-line'/>
        <p>{year}</p>
      </div>
      <div>
        <div className='column-line'/>
        <p>{rating}</p>
      </div>
      <div className='container-button'>
        <button className='btn-edit'>Edit</button>
        <button className='btn-delete'>Delete</button>
      </div>
    </div>
  )
}

export default Record