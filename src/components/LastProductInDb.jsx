import React from 'react';
//import { Link, Route, Routes } from 'react-router-dom';
//import { useState , useEffect} from 'react';
//import LineData from "./lineData";


export default function LastProductInDb({productInfo , lastProductInfo}) {
/*      console.log(productInfo)
   
      const lastproductData = productInfo.data[productInfo.count-1];  
*/   
      console.log("**************** productInfo **********************************")
      console.log(lastProductInfo)
//      console.log(Object.keys(productInfo.data[productInfo.count-1])[0])
      

      if (!lastProductInfo || !productInfo || !Object.keys(productInfo.data[productInfo.count-1])) {
            return <h4>Cargando</h4>
      }
  return(
      <>       
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                        {console.log(lastProductInfo)}
                        {console.log(productInfo.nameDB)}                        
                            <h5 className="m-0 font-weight-bold text-gray-800">Last {productInfo.nameDB} in Data Base</h5>
                  </div>
                  <div className="card-body">
                        <div>
                  {/*            {Object.keys(productInfo.data[productInfo.count-1]).map( (categ, i) => (
                                    
                                    ((categ != "urlImagenes")? <LineData key = {categ + i} name = {categ} dataDb = {lastProductInfo[categ]}/> : "")
                                    
                              ))}

                              {imagen = lastProductInfo[urlImagenes]}
                              {console.log("Imagen en lastPageUserInfo" , imagen)}
                   */}
                              <p>{Object.keys(productInfo.data[productInfo.count-1])[0]}:  {lastProductInfo[Object.keys(productInfo.data[productInfo.count-1])[0]]}</p> 
                              <p>{Object.keys(productInfo.data[productInfo.count-1])[1]}:  {lastProductInfo[Object.keys(productInfo.data[productInfo.count-1])[1]]}</p> 
                              <p>{Object.keys(productInfo.data[productInfo.count-1])[2]}:  {lastProductInfo[Object.keys(productInfo.data[productInfo.count-1])[2]]}</p> 
                              <p>{Object.keys(productInfo.data[productInfo.count-1])[3]}:  {lastProductInfo[Object.keys(productInfo.data[productInfo.count-1])[3]]}</p> 

                        {/*      <p>id:  {lastProductInfo.id}</p>
                              <p>name:  {lastProductInfo.name}</p>
                              <p>descripción:  {lastProductInfo.descripcion || lastProductInfo.email}</p>
                              <p>detail:  {lastProductInfo.detail}</p>
                         */}
                        </div>
                         <div >
                        {/*       <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '18rem' }} src={`${lastProductInfo.urlImagenes}`} alt=" Avatar "/>
                        */}
                                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '18rem' }} src={lastProductInfo[Object.keys(productInfo.data[productInfo.count-1])[4]]} alt=" Avatar "/>
                        {/*        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '18rem' }} src={lastProductInfo.urlImagenes} alt=" Avatar "/>
                         */}
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
