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
      const [lastPageUserInfo , setLastPageUserInfo] = useState({
            success:true,
            endPoint: "",
            count: 0,
            currentPage: 0,
            totalPages: 0,
            next: "",
            previous: "",            
            data: []
      })
      

      async function fetchData(endpoint , setState) {
            try {
                  const apiFetch = await fetch(endpoint)
                  const data = await apiFetch.json()
                  setState(data.data)

            } catch (error) {
                  console.log(error)
            }

      }

      useEffect (() => {
            async function infoData() {
                  await Promise.all([fetchData('/api/user',setUserInfo) , fetchData('/api/product',setProductInfo)])
            };            
            infoData();                  
      }, [])

      let lastPageUser = userInfo.endPoint+"?page="+userInfo.totalPages
//      console.log(lastPageUser)

      useEffect (() => {
            async function infoData() {
                  await fetchData(lastPageUser,setLastPageUserInfo)
            };            
            infoData();                  
      }, [])

      console.log(lastPageUserInfo.data)
      console.log(lastPageUserInfo.count)

     let lastUser = lastPageUserInfo.data[lastPageUserInfo.count-1]



      console.log("*********************** SideBar ***************************************")
      console.log(userInfo , productInfo , lastPageUserInfo)
      console.log(lastUser)

      




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
      </ul>
     

      <Routes>
            <Route path ='/' exact element={<ContentWrapper userInfo={userInfo} productInfo= {productInfo}/>} />
             
            <Route path ='/genres' exact  element={<GenresInDb categories = {Object.keys(productInfo.countByCategory)} />} />
            <Route path ='/lastMovie' exact  Component={LastMovieInDb} />
            <Route path ='/stats' exact  Component={ContentRowMovies} />
            
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


