import React from 'react'
import './moviesTable.css'

export default function moviesTableGridHeaderFooter({header}) {
  return (
        <ul className='moviesTableGridHeaderFooter'>
          {header.map((column , i) => {
             return <li key = {column + i}>{column}</li> 
          })}
        </ul>
  );
}

