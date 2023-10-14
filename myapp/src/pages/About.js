import React, { useEffect, useState } from 'react'
import PrimarySearchAppBar from '../components/Navbar'
import MultipleSelectCheckmarks from '../components/MultipleSelect'
import BasicSelect from '../components/SingleSelect'
import MediaCard from '../components/Card'
import PaginationRounded from '../components/Pagination'
import Footer from '../components/Footer'
import  axios   from "axios"

function About() {
       const [data, setData] = useState([]);
       const [searchText, setSearchText] = useState("");
       const [categary, setCategary] = useState("");
       const [sortBy, setSortBy] = useState("ratting");
       const [sortOrder, setSortOrder] = useState("asc")
       const [page, setPage] = useState(1);

       useEffect(()=>{
           getdataFun();
       },[searchText, categary, sortBy, sortOrder, page])

       let sortByData =  ["ratting", "price"];
       let sortOrderData = ["asc", "desc"] ;
       
   function getdataFun(){
   // http://localhost:5004/products?q=&categary=action&categary=love&_sort=price&_order=asc&_page=2&_limit=2
        return  axios.get(`http://localhost:5004/products?q=${searchText}${ categary.length >0 ? "&categary=" + categary?.join("&categary=") : ""}&_sort=${sortBy}&_order=${sortOrder}&_page=${page}&_limit=${2} `).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
           console.log("err", err)
         })
   }

   console.log("rrrr", data)
  return (
    <div>
        <PrimarySearchAppBar setSearchText={setSearchText} />

        <div style={{display : "flex", justifyContent : "space-evenly", marginTop :"10px", marginBottom : "10px"}}>
             <MultipleSelectCheckmarks setCategary={setCategary} />
             <BasicSelect setSortBy={setSortBy} data={sortByData} />
             <BasicSelect  setSortBy={setSortOrder} data={sortOrderData} />
        </div>
         
         <div style={{display : "flex", justifyContent : "space-evenly", flexWrap :"wrap"}}>
            {
              data?.length > 0 && data?.map((e,i)=>{
                  return  <div key={i} style={{margin : "10px"}}> 
                  <MediaCard data={e} />
                  </div> 
              })
               
            }          
         </div>
        
        <div style={{marginTop : "10px", float : "left", marginLeft : "30px", marginBottom :"20px"}}>
              <PaginationRounded totalpage={10} setPage={setPage} />
        </div>
         
         <Footer/>

    </div>
  )
}

export default About