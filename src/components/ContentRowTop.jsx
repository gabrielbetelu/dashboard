import React from 'react';
import { ContentRowMovies, LastMovieInDb, LastProductInDb , GenresInDb} from './index'

export default function ContentRowTop({categories , userInfo , productInfo} ) {
      console.log("*****  ContentRowTop  ************************")
      console.log(categories , userInfo , productInfo)  
      console.log(productInfo.data[productInfo.count-1])    
  return (
    <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>
                 <ContentRowMovies userInfo = {userInfo} productInfo = {productInfo}/>
               
          <div className="row">
                  {/*<LastMovieInDb userInfo = {userInfo}/>   */}
                  {/*  <LastProductInDb lastProductInfo = {productInfo.data[productInfo.count-1]}/>  */} 
                  <GenresInDb categories = {categories} countByCategory = {productInfo.countByCategory}/> 
          </div>
          
    </div>

  );
}


