import React from 'react';
// import PropTypes from 'prop-types'

export default function Genre({name , cantidad}) {
  return (
    <>  
        <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                      <div className="card-body ">
                          <p>{name ? name + ":      " : " - "}       {cantidad ? " "+cantidad : " - "}</p>
                         
                      </div>
                </div>
        </div>
    </>
  );
}

