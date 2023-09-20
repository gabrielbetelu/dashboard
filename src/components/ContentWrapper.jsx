import React from 'react';
import { TopBar, ContentRowTop, Footer, MoviesTable } from './index'

export default function ContentWrapper({userInfo , productInfo , countByCategory}) {
  console.log("**************** ContentWrapper **********************************")
      console.log(userInfo)
      console.log(productInfo)
      console.log(countByCategory)
 
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
              <TopBar />
              <ContentRowTop categories = {Object.keys(productInfo.countByCategory)} userInfo = {userInfo} productInfo = {productInfo}/> 
              <MoviesTable  data = {userInfo} header = {['id' , 'name' , 'email' , 'detail']} />
              <MoviesTable  data = {productInfo} header = {['id' , 'name' , 'descripcion' , 'detail' , 'urlImagenes']} />
        
        </div>
              <Footer /> 
    </div>
  );
}