import React, { useEffect, useState } from 'react'
import { Loaders } from '../Loaders/Loaders';


export const About = () => {

  let [loading, setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");

  const [users, setUsers] = useState(""); 

  
  const fetchData = async () => {
    const response = await fetch("https://reqres.in/api/users?page=2");
    const data = await response.text();
    
    setUsers(data);
  };

useEffect(() =>{
  fetchData();  
  console.log(users)
  setLoading(true)
  setTimeout(() =>  
  {
    setLoading(false)
  },3000) 

},[])

  return (
    <>   { loading ? 
      <Loaders />
    :
    <div>
          <ul>
          </ul>
      </div>
    }
  </>
  )
}


