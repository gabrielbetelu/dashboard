import React from 'react';
import image from '../assets/images/Logo-Patagonic-sin-fondo.jpg';
import PropTypes from 'prop-types';
import { ContentWrapper, GenresInDb, LastMovieInDb, ContentRowMovies, MoviesTable , SearchMovies, NotFound } from './index';
import { Link, Route, Routes } from 'react-router-dom';

import { useState , useEffect} from 'react';

export default function SideBar(props) {

      const [userInfo , setUserInfo] = useState({
            success:true,
            endPoint: "",
            count: 0,
            currentPage: 0,
            totalPages: 0,
            next: "",
            previous: "",            
            data: []
      })
      const [productInfo , setProductInfo] = useState({
            success:true,
            endPoint: "",
            count: 0,
            currentPage: 0,
            totalPages: 0,
            next: "",
            previous: "",
            countByCategory: {},
            data: []
      })
      const [lastPageUserInfo, setLastPageUserInfo] = useState({
            success:true,
            endPoint: "",
            count: 0,
            currentPage: 0,
            totalPages: 0,
            next: "",
            previous: "",            
            data: []
      });

      const [lastPageProductInfo, setLastPageProductInfo] = useState({
            success:true,
            endPoint: "",
            count: 0,
            currentPage: 0,
            totalPages: 0,
            next: "",
            previous: "",            
            data: []
      });

/*      const [userDetail, setUserDetail] = useState({
            id: 0,
            name: "",
            email: "",
            imagenPerfil: ""
      })
*/
      const [currentUserPage, setCurrentUserPage] = useState(1);
      const handleUserNextPage = () => {
            setCurrentUserPage((prevPage) => prevPage + 1);
        };
        
        const handleUserPrevPage = () => {
            setCurrentUserPage((prevPage) => prevPage - 1);
        };

      const [currentProductPage, setCurrentProductPage] = useState(1);
      const handleProductNextPage = () => {
            setCurrentProductPage((prevPage) => prevPage + 1);
        };
        
        const handleProductPrevPage = () => {
            setCurrentProductPage((prevPage) => prevPage - 1);
        };

      async function fetchData(endpoint , setState , page =1) {
            try {
                  const apiFetch = await fetch(`${endpoint}?page=${page}`)
                  const data = await apiFetch.json()
                  setState(data.data)

            } catch (error) {
                  console.log(error)
            }

      }

/*      async function fetchInfo(endpoint , setState) {
            try {
                  const apiFetchInfo = await fetch(endpoint)
                  const data = await apiFetchInfo.json()
                  setState(data)

            } catch (error) {
                  console.log(error)
            }

      }
*/      

      useEffect (() => {
            async function infoData() {
                  await Promise.all([fetchData('/api/user',setUserInfo,currentUserPage) , fetchData('/api/product',setProductInfo,currentProductPage)])
            };            
            infoData();                  
      }, [currentUserPage , currentProductPage])

      useEffect(() => {
            async function lastPageUsrData() {
                await fetchData(userInfo.endPoint, setLastPageUserInfo , userInfo.totalPages );
            }
            lastPageUsrData();
        }, [userInfo.endPoint , userInfo.totalPages]);

      useEffect(() => {
            async function lastPageProdData() {
                  await fetchData(productInfo.endPoint, setLastPageProductInfo , productInfo.totalPages );
            }
      lastPageProdData();
      }, [productInfo.endPoint , productInfo.totalPages]);

/*      console.log("***** Ultimo Usr  *****************************")
      console.log(lastPageUserInfo.data[lastPageUserInfo.count-1].detail)
      console.log(lastPageUserInfo)
*/      

/*      useEffect(() => {
            async function lastUsrData() {
                  await fetchInfo(lastPageUserInfo.data[lastPageUserInfo.count-1].detail, setUserDetail);
            }
      lastUsrData();
      }, [lastPageUserInfo.data , lastPageUserInfo.count]);
*/

      console.log("*********************** SideBar ***************************************")
      console.log(userInfo)
      console.log(productInfo)
      console.log(lastPageUserInfo)
      console.log(lastPageProductInfo)
//      console.log(userDetail)


  return (
    <>  
      <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">
                        <Link exact className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                              <div className="sidebar-brand-icon">
                                    <img className="w-25" src={image} alt="Patagonic" />
                              </div>
                        </Link>

            <hr className="sidebar-divider my-0" />
                  <li className="nav-item active">
                        <Link className="nav-link" to="/">
                              <i className="fas fa-fw fa-tachometer-alt"></i>
                                    <span>Dashboard - Patagonic</span>
                        </Link>
                  </li>
            <hr className="sidebar-divider" />

            <div className="sidebar-heading">Actions</div>
            { props.sideBar.map( (nav) => 
                  nav.title ? (
                        <li key={nav.id} className="nav-item">
                                    <Link className="nav-link collapsed" to={nav.route}>
                                    <i className="fas fa-fw fa-folder"></i>
                                    <span>{nav.title}</span></Link>
                        </li>
                  ): null
            )}
            <hr className="sidebar-divider d-none d-md-block" />
            <div>
                  <button onClick={handleUserPrevPage} disabled={currentUserPage === 1}>Anterior</button>
                  <spam className='buttonTextColor'>  User Page# {currentUserPage}</spam>
                  <button onClick={handleUserNextPage} disabled={currentUserPage === userInfo.totalPages}>Siguiente</button>
            </div>
            <br/>
            <br/>
            <div>
                  <button onClick={handleProductPrevPage} disabled={currentProductPage === 1}>Anterior</button>
                  <spam className='buttonTextColor'>Product Page{currentProductPage}</spam>
                  <button onClick={handleProductNextPage} disabled={currentProductPage === productInfo.totalPages}>Siguiente</button>
            </div>
      </ul>
  
   
      <Routes>
            <Route path ='/' exact element={<ContentWrapper userInfo={userInfo} productInfo= {productInfo} lastPageUserInfo = {lastPageUserInfo} lastPageProductInfo = {lastPageProductInfo}/>} />
             
            <Route path ='/genres' exact  element={<GenresInDb categories = {Object.keys(productInfo.countByCategory)} />} />
            
            <Route path ='/lastMovie' exact  element={<LastMovieInDb lastPageUserInfo = {lastPageUserInfo}/>} />
            
            <Route path ='/stats' exact  element={<ContentRowMovies lastPageUserInfo = {lastPageUserInfo} lastPageProductInfo = {lastPageProductInfo}/>} />
            
            <Route path ='/tableUsers' exact element={<MoviesTable  data = {userInfo} header = {['id' , 'name' , 'email' , 'detail']} />}/>             
            
            <Route path ='/tableProducts' exact element={<MoviesTable  data = {productInfo} header = {['id' , 'name' , 'descripcion' , 'detail' , 'urlImagenes']} />}/>                  
            
            <Route path ='/searchmovies' exact  Component={SearchMovies} />

            <Route Component={NotFound} />                          
      </Routes>

      
    </>
  );
}



// PROP TYPES

SideBar.propTypes = {
      sideBar: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
        })
      ),
};

SideBar.defaultProps = {
      sideBar: [
        {
          id: "default",
          title: "Default",
        },
      ],
    };


