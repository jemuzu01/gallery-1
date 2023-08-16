import { Gallery } from '../Components/Gallery'
import React, { useState, CSSProperties, useEffect } from 'react'
import { Loaders } from '../Loaders/Loaders';



export const Home = () => {
let [loading, setLoading] = useState(false);
let [showGallery, setshowGallery] = useState("hide");
let [color, setColor] = useState("#ffffff");

useEffect(() =>{
  setLoading(true)
  setColor("#ffffff")
  setshowGallery("")
  setTimeout(() => 
  {
    setLoading(false)
  },3000)

},[])



  return (
    <>
    { loading ? 
    <Loaders isLoading = {loading} Color = {color}  />
    :
    <Gallery showGallery={showGallery} />
    }
    </>
  )
}
