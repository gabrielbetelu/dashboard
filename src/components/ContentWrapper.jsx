import React from 'react';
import { TopBar, ContentRowTop, Footer, MoviesTable } from './index'

export default function ContentWrapper({userInfo , productInfo}) {
 
  return (
    <div id="content-wrapper" className="d-flex flex-column">
        <div id='content'>
              <TopBar />
              <ContentRowTop categories = {Object.keys(productInfo.countByCategory)}/>
              <MoviesTable  data = {userInfo} header = {['id' , 'name' , 'email' , 'detail']} />
              <MoviesTable  data = {productInfo} header = {['id' , 'name' , 'descripcion' , 'detail' , 'urlImagenes']} />
        </div>
              <Footer /> 
    </div>
  );
}