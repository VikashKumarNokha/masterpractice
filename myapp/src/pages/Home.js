import React, { useEffect, useState } from 'react'
import PrimarySearchAppBar from '../components/Navbar'
import MultipleSelectCheckmarks from '../components/MultipleSelect'
import BasicSelect from '../components/SingleSelect'
import MediaCard from '../components/Card'
import PaginationRounded from '../components/Pagination'
import Footer from '../components/Footer'
import  axios   from "axios"
import  {useSearchParams, useLocation, Navigate, useNavigate}  from "react-router-dom"
 
function Home() {
       const [ searchParams, setSearchParams] = useSearchParams();
       const [data, setData] = useState({});
       const [searchText, setSearchText] = useState( searchParams.getAll("search")[0] || "");
       const [categary, setCategary] = useState( searchParams.getAll("categary") ||  []);
       const [sortBy, setSortBy] = useState( searchParams.getAll("sortBy")[0] || "");
       const [sortOrder, setSortOrder] = useState( searchParams.getAll("sortOrder")[0] || "");
       const [page, setPage] = useState( Number( searchParams.getAll("page")[0] ) ||  1);
       
       const navi = useNavigate();
       
       useEffect(()=>{
        let obj = {}
        if(searchText){
          obj["search"] = searchText;
        };
        if(categary.length > 0){
           obj["categary"] = categary
        }
        if(sortBy){
           obj["sortBy"] = sortBy
        }
        if(sortOrder){
          obj["sortOrder"] = sortOrder
        }
        if(page >1){
          obj["page"] = page
        }
          setSearchParams(obj);
           getdataFun();
       },[searchText, categary, sortBy, sortOrder, page])

       let sortByData =  ["ratting", "price"];
       let sortOrderData = ["asc", "desc"] ;
       
   function getdataFun(){
        return  axios.get(`http://localhost:5000/products?search=${searchText}&categary=${categary}&sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}`).then((res)=>{
            setData(res.data)
        }).catch((err)=>{
           console.log("err", err)
         })
   }

     function navfun(e){
       console.log("sss",e)
        console.log("aaa",`/${e._id}`)
         // return <Navigate to={`/${e._id}`} replace={true} />
           navi(`/${e._id}`);
     }


  return (
    <div>
        <PrimarySearchAppBar setSearchText={setSearchText} searchText={searchText}  />

        <div style={{display : "flex", justifyContent : "space-evenly", marginTop :"10px", marginBottom : "10px"}}>
             <MultipleSelectCheckmarks setCategary={setCategary} categary={categary} />
             <BasicSelect setSortBy={setSortBy} data={sortByData} sortBy={sortBy} />
             <BasicSelect  setSortBy={setSortOrder} data={sortOrderData} sortBy={sortOrder} />
        </div>
         
         <div style={{display : "flex", justifyContent : "space-evenly", flexWrap :"wrap"}}>
            {
              data?.data?.length > 0 && data.data.map((e,i)=>{
                  return  <div onClick={()=>navfun(e)} key={i} style={{margin : "10px", cursor :"pointer"}}> 
                  <MediaCard data={e} />
                  </div> 
              })
               
            }          
         </div>
        
        <div style={{marginTop : "10px", float : "left", marginLeft : "30px", marginBottom :"20px"}}>
              <PaginationRounded totalpage={data?.Totalpage} setPage={setPage} page={page} />
        </div>
         
         <Footer/>

    </div>
  )
}

export default Home