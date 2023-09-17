import React from 'react';
import { ContentRowMovies, LastMovieInDb, GenresInDb} from './index'

export default function ContentRowTop({categories , lastPageUserInfo ,lastPageProductInfo}) {
  return (
    <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
          </div>
                <ContentRowMovies lastPageUserInfo = {lastPageUserInfo} lastPageProductInfo = {lastPageProductInfo}/>
                
          <div className="row">
                <LastMovieInDb lastPageUserInfo = {lastPageUserInfo}/>
                <GenresInDb categories = {categories} />
          </div>
    </div>

  );
}


