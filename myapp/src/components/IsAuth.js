import React, { useEffect } from 'react'
import {useNavigate}  from "react-router-dom"
 
function IsAuth({children}) {
     const navigate = useNavigate()
     
      let loginStatus = JSON.parse( localStorage.getItem("register") );
      
         useEffect(()=>{
          if(!loginStatus?.login){
            return navigate("/login")
            }
         },[])
        
  return  children
}

export default IsAuth