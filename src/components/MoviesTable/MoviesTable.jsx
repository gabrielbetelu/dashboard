import React from 'react'
import './moviesTable.css'
import { MoviesTableRows, MoviesTableGridHeaderFooter } from '../index'
import { Link, Route, Routes } from 'react-router-dom';

export default function MoviesTable({data , header}) {
  console.log("******************** MoviesTable  *******************************")
  console.log(data.next)
  console.log(data.previous)
  return (
          <div className='containerMoviesTable'>
            <div className='moviesTableContainer'>
              <MoviesTableGridHeaderFooter header = {header}/>

              <MoviesTableRows data = {data.data} header = {header}/>
    
              <MoviesTableGridHeaderFooter header = {header}/>
            </div>

            
        


            
          </div>

  );
}



{/*(data.previous != undefined)} ? 
              {<Link className="nav-link collapsed" to={data.previous}>
              <i className="fas fa-fw fa-folder"></i>
              <span>Página Anterior</span></Link>}

             : {}

            {(data.next != undefined)} ? 
              {<Link className="nav-link collapsed" to={data.next}>
              <i className="fas fa-fw fa-folder"></i>
              <span>Página Siguiente</span></Link>}

             : {}
          
*/}
