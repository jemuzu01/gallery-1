import React from 'react'
import BounceLoader from "react-spinners/BounceLoader";


export const Loaders = (prop) => {

    
    const override = {
        display: "block",
        margin: "0 auto",
        borderColor: "red",
        color:"blue",
      }; 

  return (
    <div className='loader-bg'>
        <BounceLoader
        color="#36d7b7"
        loading={prop.isLoading}
        cssOverride={override}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
         />
    </div>    
  )
}
