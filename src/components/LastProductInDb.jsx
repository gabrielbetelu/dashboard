import React from 'react';
//import { Link, Route, Routes } from 'react-router-dom';
import { useState , useEffect} from 'react';

export default function LastProductInDb({lastProductInfo}) {
/*      console.log(productInfo)
   
      const lastproductData = productInfo.data[productInfo.count-1];

*/      
      console.log("**************** productInfo **********************************")
      console.log(lastProductInfo)
      

/*      console.log(lastproductData.id)
      console.log(lastproductData.name)
      console.log(lastproductData.descripcion)
      console.log(lastproductData.detail)
      console.log("***** Ultimo Usr  *****************************")
      console.log(lastproductData.urlImagenes)

      let image = lastproductData.urlImagenes
*/
  return(
      <>       
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last Product in Data Base</h5>
                  </div>
                  <div className="card-body">
                        <div>

                              <p>id:  {lastProductInfo.id}</p>
                              <p>name:  {lastProductInfo.name}</p>
                              <p>descripción:  {lastProductInfo.descripcion}</p>
                              <p>detail:  {lastProductInfo.detail}</p>
                        
                        {/*       <p>id:  {lastproductData.id}</p>
                              <p>name:  {lastproductData.name}</p>
                              <p>descripción:  {lastproductData.descripcion}</p>
                              <p>detail:  {lastproductData.detail}</p>
                        */}






                        </div>
                         <div >
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '18rem' }} src={lastProductInfo.urlImagenes} alt=" Avatar "/>
                        
                        </div>
      
                        {/*       <Link exact className="btn btn-danger"   to="/detailUser">View User detail</Link>
                        */}
                  </div>
            </div>
        </div>
      {/* 
        <Routes>
            <Route path ='/detailUser' exact  element={<DetailUser lastPageUserInfo = {lastPageUserInfo}/>} />

            <Route Component={NotFound} />
        </Routes>
      */}
      </>
  );
}
