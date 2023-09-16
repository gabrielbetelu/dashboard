import React from 'react'
import './moviesTable.css'
import { MoviesTableRows, MoviesTableGridHeaderFooter } from '../index'
import { Link, Route, Routes } from 'react-router-dom';

export default function MoviesTable({data , header}) {
  console.log("******************** MoviesTable  *******************************")
  let nextExists
  let nextPrevious
  {if (data.next != undefined) {
    nextExists = 1
    console.log(data.next)
  }}

  {if (data.previous != undefined) {
    nextPrevious = 1
    console.log(data.previous)
  }}
  
  
  return (
          <div className='containerMoviesTable'>
            <div className='moviesTableContainer'>
              <MoviesTableGridHeaderFooter header = {header}/>

              <MoviesTableRows data = {data.data} header = {header}/>
    
              <MoviesTableGridHeaderFooter header = {header}/>
            </div>
            <div>
              {nextExists ? <Link className="nav-link collapsed" to={data.next}>
                <i className="fas fa-fw fa-folder"></i>
                <span>Página siguiente</span></Link> : ""}
              {nextPrevious ? <Link className="nav-link collapsed" to={data.previous}>
                  <i className="fas fa-fw fa-folder"></i>
                  <span>Página anterior</span></Link> : ""}
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
