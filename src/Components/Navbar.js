import { faHouse ,faAddressCard, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

export const Navbar = () => {

const likePhotos = useSelector((state) => state.likephoto.value)


const [likeCount,setLikeCount] = useState(likePhotos.length)

  return (
    <>
        <nav className='primary--nav'>
            <div className='primary--nav--container'>
                <div className='header-logo'>
                    <img src={process.env.PUBLIC_URL +"logo192.png"} alt="My Image" />   
                </div>
                <ul>
                <NavLink to="/"><FontAwesomeIcon icon={faHouse} style={{color: "#fafafa",}} /></NavLink>
                <NavLink to="/about"><FontAwesomeIcon icon={faAddressCard} style={{color: "#f5f7fa",}} /></NavLink>
                <NavLink> <FontAwesomeIcon icon={faHeart} style={{color: "#ffffff",}} />{likeCount} </NavLink>
                <Outlet />
                </ul>
            </div>
        </nav>
    </>
  )
}
