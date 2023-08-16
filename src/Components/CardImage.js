import React, { useState, CSSProperties, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { likeGallery, showgallery } from '../features/gallery'
import BarLoader from "react-spinners/BarLoader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import { LikePhotosBtn } from './LikePhotosBtn';



const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

export const CardImage = (prop) => {
  const galleryDetails = useSelector((state) => state.gallery.likeState)
  const likePhotos = useSelector((state) => state.likephoto.value)
  const dispatch = useDispatch()
  const [showbox, setshowbox] = useState(false)


  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
  const handleClick = ({data}) => {

    setLoading(true)
    setTimeout(() => 
    {
      setLoading(false)
    },3000)

    setshowbox(true);
    dispatch(showgallery({...data}))
  };



  return (
    <>
    {prop.GalleryData.map((data)=>(
        <div key={data.id} className='cardImage'>
            <img src= {data.url}  alt='' />  
            <button onClick={() => {
            handleClick({data})}}>Show More!</button>
        </div>
        
    ))}
     
      <div style={{color: "#FFFFFF"}} className={ showbox ? "show" : "hide"}>
      { loading ?         
          <BarLoader
            color={color}
            loading={loading}
            cssOverride={override}
            size={12}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          :
          <>
          <div className='gallery-side-container-header'>
            <button onClick={(event)=> setshowbox(false)}><FontAwesomeIcon icon={faWindowMinimize} size="lg" /></button>
          </div>
            <div className='gallery-side-container-image'>
                <img src={galleryDetails.url} />
            </div>
            <LikePhotosBtn />
            <div className='gallery-side-container-description'>
                <p>{galleryDetails.description}</p>
            </div>
            {likePhotos.map((data)=>(
                <div key={data.id} className='cardImage'>
                    <p>{data.id}</p>
                </div>
                
            ))}
          </>
          
        }
        
      </div>
     
    
    </>
  )
}
