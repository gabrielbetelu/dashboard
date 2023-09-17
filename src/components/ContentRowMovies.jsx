import React from 'react';
import { Cards } from './index'

export default function ContentRowMovies({lastPageUserInfo , lastPageProductInfo}) {
//  console.log("**************** ContentRowMovies **********************************")
//      console.log(lastPageUserInfo)
//      console.log(lastPageProductInfo)
//      console.log(lastPageProductInfo.countByCategory)
      let categories = Object.keys(lastPageProductInfo.countByCategory)
//      console.log(categories.length)
  
  return (
    <div className='row'>
            <Cards 
              title = "Users in Data Base"
              quantity = {lastPageUserInfo.count+(lastPageUserInfo.totalPages - 1 )* 10}
              color = "primary"
              icon = "fa-users" />
            <Cards 
              title = "Products in Data Base"
              quantity = {lastPageProductInfo.count+(lastPageProductInfo.totalPages - 1 )* 10}
              color = "success"
              icon = "fa-tshirt" />
            <Cards 
              title = "Categories quantity"
              quantity = {categories.length}
              color = "warning"
              icon = "fa-list" />
    </div>

    )
  
}


