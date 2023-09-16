import React from 'react';
import './moviesTable.css'


export default function MoviesInDb(props) {
  
  return (
        <ul className='moviesTableGridRows'>
           {props.header.map((row , i) => {
            return <li key={row + i}>{props.data[row]}</li>
           })}
        </ul>
  );
}

