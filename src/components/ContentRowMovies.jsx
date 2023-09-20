import React from 'react';
import { Cards } from './index'

export default function ContentRowMovies({userInfo , productInfo}) {
  console.log("**************** ContentRowMovies **********************************")
//      console.log(lastPageUserInfo)
//      console.log(lastPageProductInfo)
//      console.log(lastPageProductInfo.countByCategory)
      let categories = Object.keys(productInfo.countByCategory)
      console.log(categories)
  
  return (
    <div className='row'>
            <Cards 
              title = "Users in Data Base"
              quantity = {userInfo.count}
              color = "primary"
              icon = "fa-users" />
            <Cards 
              title = "Products in Data Base"
              quantity = {productInfo.count}
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


