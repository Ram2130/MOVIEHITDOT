import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();
  return (
    <Layout title={"Search results"}>

<div className="container-fluid row mt-4 home-page" style={{marginTop:"-21px"}} >
      
        <div className="col-md-21 ">
        <h1 style={{marginTop:"25px"}}>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found":""
              // : `Found ${values?.results.length}`
              }
          </h6>

          <div className="d-flex flex-wrap m-2 mt-5 ml-2" style={{margin:"auto",width:"100%",alignItems:"center"}} >
            {values?.results?.map((p) => (
              <div className="card m-2 " key={p._id} style={{cursor:"pointer" ,hight:"230px",width:"156px"}} onClick={() => navigate(`/product/${p.slug}`)}>
                {/* <img
                //  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  
                /> */}
                <div   className="card-img-top"     style={{backgroundImage:`url(/api/v1/product/product-photo/${p._id})` ,backgroundSize:"100% 100%"}}>
                   
                    <h5 className="card-title"  style={{fontSize:"1rem", marginTop:"200px",textAlign:"center", color:"white"}}>{p.name} </h5>
                    
                   
                </div>
              </div>
            ))}
          </div>
         
        </div>
      </div>








      {/* <div className="container mt-1">
        <div className="text-center ">
          <h1 style={{marginTop:"25px"}}>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found":""
              // : `Found ${values?.results.length}`
              }
          </h6>

          <div className="container-fluid row mt-4 home-page" style={{marginTop:"-21px"}} >
       
       <div className="col-md-21 ">
        
         <div className="d-flex flex-wrap m-2 mt-5" >
           {values?.results?.map((p) => (
             <div className="card m-2" key={p._id} style={{cursor:"pointer" ,hight:"230px",width:"145px"}} onClick={() => navigate(`/product/${p.slug}`)}>
              
               <div   className="card-img-top"     style={{backgroundImage:`url(/api/v1/product/product-photo/${p._id})` ,backgroundSize:"100% 100%"}}>
                  
                   <h5 className="card-title"  style={{fontSize:"1rem", marginTop:"200px",textAlign:"center", color:"white"}}>{p.name} </h5>
                   
             
               </div>
             </div>
           ))}
         </div>
         <div className="m-2 p-3">
           
 
         </div>
       </div>
     </div>

 
        </div>
      </div> */}
    </Layout>
  );
};

export default Search;