import React from 'react';
import { Genre } from './index'

export default function GenresInDb ({categories , countByCategory}) {
  console.log("******** GenresInDb *****************************")
  console.log(categories)
  console.log(countByCategory)
  
    return (
        <div className="col-lg-6 mb-4">						
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Categories in Data Base</h5>
                  </div>
                  <div className="card-body fondoCaja">
                    <div className="row ">
                      {categories.map( (categ, i) => (
                          <Genre key = {categ + i} name = {categ} cantidad = {countByCategory[categ]}/>
                      ))}
                    </div>
                  </div>
            </div>
        </div>
    )
  }

