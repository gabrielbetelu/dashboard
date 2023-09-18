import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useState , useEffect} from 'react';

export default function LastMovieInDb({lastPageUserInfo}) {

      const [userDetail, setUserDetail] = useState({
            id: 0,
            name: "",
            email: "",
            imagenPerfil: ""
      })

      console.log("**************** userInfo **********************************")
      console.log(lastPageUserInfo)
      console.log(lastPageUserInfo.data[lastPageUserInfo.count-1].id)
      console.log(lastPageUserInfo.data[lastPageUserInfo.count-1].name)
      console.log(lastPageUserInfo.data[lastPageUserInfo.count-1].email)
      console.log(lastPageUserInfo.data[lastPageUserInfo.count-1].detail)
      console.log("***** Ultimo Usr  *****************************")
      console.log(lastPageUserInfo.data[lastPageUserInfo.count-1].detail)

      async function fetchInfo(endpoint , setState) {
            try {
                  const apiFetchInfo = await fetch(endpoint)
                  const data = await apiFetchInfo.json()
                  setState(data)

            } catch (error) {
                  console.log(error)
            }

      }

      useEffect(() => {
            async function lastUsrData() {
                  await fetchInfo(lastPageUserInfo.data[lastPageUserInfo.count-1].detail, setUserDetail);
            }
      lastUsrData();
      }, [lastPageUserInfo.data , lastPageUserInfo.count]);

      console.log(userDetail.imagenPerfil)
      let image = userDetail.imagenPerfil

  return(
      <> 
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last User in Data Base</h5>
                  </div>
                  <div className="card-body">
                        <div>
                              <p>id:  {lastPageUserInfo.data[lastPageUserInfo.count-1].id}</p>
                              <p>name:  {lastPageUserInfo.data[lastPageUserInfo.count-1].name}</p>
                              <p>email:  {lastPageUserInfo.data[lastPageUserInfo.count-1].email}</p>
                              <p>detail:  {lastPageUserInfo.data[lastPageUserInfo.count-1].detail}</p>
                        </div>
                        <div >
                              <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: '10rem' }} src={image} alt=" Avatar "/>
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
