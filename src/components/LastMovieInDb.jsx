import React from 'react';

export default function LastMovieInDb({lastPageUserInfo}) {
      console.log("**************** userInfo **********************************")
      console.log(lastPageUserInfo)
      console.log(lastPageUserInfo.data[lastPageUserInfo.count-1].id)
      console.log(lastPageUserInfo.data[lastPageUserInfo.count-1].name)
      console.log(lastPageUserInfo.data[lastPageUserInfo.count-1].email)
      console.log(lastPageUserInfo.data[lastPageUserInfo.count-1].detail)

  return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                  <div className="card-header py-3">
                            <h5 className="m-0 font-weight-bold text-gray-800">Last movie in Data Base</h5>
                  </div>
                  <div className="card-body">
                            <div>
                              <p>id:  {lastPageUserInfo.data[lastPageUserInfo.count-1].id}</p>
                              <p>name:  {lastPageUserInfo.data[lastPageUserInfo.count-1].name}</p>
                              <p>email:  {lastPageUserInfo.data[lastPageUserInfo.count-1].email}</p>
                              <p>detail:  {lastPageUserInfo.data[lastPageUserInfo.count-1].detail}</p>
                            </div>
                              <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View User detail</a>
                  </div>
            </div>
        </div>
  );
}
