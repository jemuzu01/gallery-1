import React from 'react'
import { CardImage } from './CardImage'
const GalleryData = [
    {
        id:1,
        url: process.env.PUBLIC_URL + "/images/test.jpg",
        description: "Lorem ipsum dolor sit amet. Vel eveniet alias non labore odit et quae cumque aut pariatur accusamus sed laborum laudantium est amet consequatur. Eum harum consequatur in officiis aspernatur est porro tempore cum eaque ipsum in quis consequuntur.",
      },
      {
        id:2,
        url:process.env.PUBLIC_URL + "/images/test2.jpg",
        description: "Lorem ipsum dolor sit amet. Vel eveniet alias non labore odit et quae cumque aut pariatur accusamus sed laborum laudantium est amet consequatur. Eum harum consequatur in officiis aspernatur est porro tempore cum eaque ipsum in quis consequuntur.",
      },
]


export const Gallery = (prop) => {
  return (
    <div className={`galler--container ${prop.showGallery}`}>
        <CardImage GalleryData = { GalleryData }/>
    </div>
  )
}
