import React from 'react';
// import PropTypes from 'prop-types'

export default function LineData({name , dataDB}) {
    console.log("***** LineData  *****************")
    console.log(name + ": ",  dataDB)
  return (
    <>  
        {console.log("*******  dataDB  *************************")}
        {console.log(dataDB)}
        <div > 
            <p>{name ? name + ":      " : " - "}       {dataDB ? " "+dataDB : " - "}</p>
        </div>
    </>
  );
}
