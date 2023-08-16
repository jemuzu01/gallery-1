import React from 'react'
import { faHouse ,faAddressCard, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize } from '@fortawesome/free-solid-svg-icons';
import { likePhotos } from '../features/likephotos'
import { useDispatch, useSelector } from 'react-redux'
import userEvent from '@testing-library/user-event';

export const LikePhotosBtn = () => {

    const galleryDetails = useSelector((state) => state.gallery.likeState)
    const dispatch = useDispatch()
    


  return (
    <div>
        <button onClick={() => {
          dispatch(likePhotos(galleryDetails))
          }}><FontAwesomeIcon icon={faHeart} style={{color: "#ffffff",}} /></button>
    </div>
  )
}
