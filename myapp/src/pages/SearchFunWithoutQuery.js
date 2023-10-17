import React, { useEffect, useState } from 'react'
import axios from "axios"
import MediaCard from '../components/Card';

function SearchFunWithoutQuery() {

    const [data, setData] = useState([]);
   const [searchText, setSearchText] = useState("");
     
    useEffect(()=>{
       getDatafun();
    },[])

    function getDatafun (){
       return axios.get("http://localhost:5000/products?limit=10").then((res)=>{
           setData(res.data);
          console.log("ress", res.data)
       }).catch((err)=>{
         console.log("errr", err);
       })
    }
     

  return (
    <div>
          <div style={{margin: "20px"}}>
            <input  onChange={(e)=>setSearchText(e.target.value)} style={{width :"200px", height: "30px"}}   type='text'  placeholder='search' />
            </div>

          <div style={{display : "flex", justifyContent : "space-evenly", flexWrap :"wrap"}}>
            {
              data?.data?.length > 0 && data.data.filter((e)=>{ return searchText ? e.title.includes(searchText) : true}).sort((a,b)=>a.title.localeCompare(b.title)).map((e,i)=>{
                  return  <div key={i} style={{margin : "10px"}}> 
                  <MediaCard data={e} />
                  </div> 
              })
               
            }          
         </div>
    </div>
  )
}

export default SearchFunWithoutQuery