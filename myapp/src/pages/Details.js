import React from 'react'


 import {useParams} from "react-router-dom";



function Details() {
 
   const {id} = useParams();
   console.log("iiii", id)

  return (
    <div>Details</div>
  )
}

export default Details