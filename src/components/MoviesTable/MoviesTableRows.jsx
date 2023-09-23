import React from 'react';
import './moviesTable.css'
import { MoviesInDb } from '../index'
// import { moviesInDb } from '../../constants';

export default function MoviesTableRows ({data , header}) {
  if (!data || !header) {
    return <h3>Cargando</h3>
  }
    return (
      data.map((row, i) => {
        return <MoviesInDb key={row + i} data = {{...row}} header = {header} />})
    )
}


