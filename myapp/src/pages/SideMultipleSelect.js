import React, { useEffect, useState } from 'react'
import PrimarySearchAppBar from '../components/Navbar'
import MultipleSelectCheckmarks from '../components/MultipleSelect'
import BasicSelect from '../components/SingleSelect'
import MediaCard from '../components/Card'
import PaginationRounded from '../components/Pagination'
import Footer from '../components/Footer'
import  axios   from "axios"
import  {useSearchParams, useLocation}  from "react-router-dom"

function SideMultipleSelect() {
    const [ searchParams, setSearchParams] = useSearchParams();
    const [data, setData] = useState({});
    const [searchText, setSearchText] = useState( searchParams.getAll("search")[0] || "");
    const [categary, setCategary] = useState( searchParams.getAll("categary") ||  []);
    const [sortBy, setSortBy] = useState( searchParams.getAll("sortBy")[0] || "");
    const [sortOrder, setSortOrder] = useState( searchParams.getAll("sortOrder")[0] || "");
    const [page, setPage] = useState( Number( searchParams.getAll("page")[0] ) ||  1);
    
    
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
    const names = [   "action", "fight", "jump", "run", "gadder", "love" ];
    
function getdataFun(){
     return  axios.get(`http://localhost:5000/products?search=${searchText}&categary=${categary}&sortBy=${sortBy}&sortOrder=${sortOrder}&page=${page}`).then((res)=>{
         setData(res.data)
     }).catch((err)=>{
        console.log("err", err)
      })
}

   function multiselectfun(val){
      let data = [...categary]
       if(data.includes(val)){
           data.splice(data.indexOf(val), 1);
       }else{
         data.push(val);
       }
        setCategary(data);
   }

console.log("sss", searchParams.getAll("sort"))

    
  return (
    <div>
    <PrimarySearchAppBar setSearchText={setSearchText} searchText={searchText}  />

      <div style={{display :"flex", justifyContent : "space-between"}}>
        <div style={{width : "18vw", height : "70vh", marginLeft : "20px", marginTop : "10px",  border : "1px solid  blue"}}>
         <div style={{marginTop : "10px"}} >
        {
          names.length > 0 && names.map((e, i)=>{
              return <div key={i}>
              <label for={e}>{e}</label>
              <input type="checkbox" checked={categary.includes(e) ? true : false}  onChange={()=>multiselectfun(e)}  name={e} value={e}/> <br/>
              </div>
          })
        }
        </div>

        </div>

        <div style={{ width : "83vw"}}>
        <div style={{ height : "200px", display : "flex", justifyContent : "space-evenly", marginTop :"10px", marginBottom : "0px"}}>
         {/* <MultipleSelectCheckmarks setCategary={setCategary} categary={categary} /> */}
         <BasicSelect setSortBy={setSortBy} data={sortByData} sortBy={sortBy} />
         <BasicSelect  setSortBy={setSortOrder} data={sortOrderData} sortBy={sortOrder} />
        </div>
        <div style={{ marginTop : "-100px",  display : "flex", justifyContent : "space-evenly", flexWrap :"wrap"}}>
            {
            data?.data?.length > 0 && data.data.map((e,i)=>{
                return  <div key={i} style={{margin : "10px"}}> 
                <MediaCard data={e} />
                </div> 
            })
            }          
        </div>
        </div>

     </div>
    
    <div style={{marginTop : "10px", float : "left", marginLeft : "30px", marginBottom :"20px"}}>
          <PaginationRounded totalpage={data?.Totalpage} setPage={setPage} page={page} />
    </div>
     
     <Footer/>

</div>
  )
}

export default SideMultipleSelect