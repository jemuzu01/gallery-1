import React from 'react'
import { useSelector } from 'react-redux' 

export const Profile = () => {
   const user = useSelector((state) => state.users.value) 
   const themeColor = useSelector((state) => state.theme.value) 
   
  return (
    <>
    <div style={{color:themeColor}}>
        <div>Profile Page</div>
        <p>Name: {user.name}</p>
        <p>Age:{user.age}</p>
        <p>Email:{user.email}</p>
    </div>   
    </>
  )
}
