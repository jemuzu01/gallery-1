import React from 'react'
import { useDispatch } from 'react-redux'
import { login , logout} from '../features/users'



export const Login = () => {
  const dispatch = useDispatch()

  return (
    <>
        <button type='submit' onClick={() => dispatch(login({name:"James",
        age:12,
        email:"test@gmail.com"}))}>Login</button> 

        <button type='submit' onClick={() => dispatch(logout())}>Logout</button> 
    </>    
  )
}