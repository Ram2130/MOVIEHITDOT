import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/CategoryProductStyles.css";
import axios from "axios";
const CategoryProduct = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    if (params?.slug) getPrductsByCat();
  }, [params?.slug]);
  const getPrductsByCat = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/product-category/${params.slug}`
      );
      setProducts(data?.products);
      setCategory(data?.category);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      
<div className="container-fluid row mt-4 home-page" style={{marginTop:"-21px"}} >
      
      <div className="col-md-21 ">
        <h1 className="text-center">{params.slug}</h1>
        <div className="d-flex flex-wrap m-2 mt-5 ml-2" style={{margin:"auto",width:"100%",alignItems:"center"}} >
          {products.map((p) => (
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
        {/* <div className="m-2 p-3">
          {products && products.length < total && (
            <button
              className="btn loadmore"
              onClick={(e) => {
                e.preventDefault();
                setPage(page + 1);
              }}
            >
              {loading ? (
               <h1  style={{color:"grey"}}>Loading ...</h1>
              ) : (
                <>
                  {" "}
                 <h1 style={{color:"grey"}}>Next Page</h1>  
                   Loadmore <AiOutlineReload />   
                </>
              )}
            </button>
          )}
        </div> */}
      </div>
    </div>
      {/* <div className="container mt-3 category ">
        <h4 className="text-center">Category - {category?.name}</h4>
        <h6 className="text-center">{products?.length} result found </h6>
        <div className="row">
          <div className="col-md-9 offset-1">
            <div className="d-flex flex-wrap">
              {products?.map((p) => (
                <div className="card m-2" key={p._id}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <div className="card-name-price">
                      <h5 className="card-title">{p.name}</h5>
                      <h5 className="card-title card-price">
                        {p.price.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </h5>
                    </div>
                    <p className="card-text ">
                      {p.description.substring(0, 60)}...
                    </p>
                    <div className="card-name-price">
                      <button
                        className="btn btn-info ms-1"
                        onClick={() => navigate(`/product/${p.slug}`)}
                      >
                        More Details
                      </button>
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
           
          </div>
        </div>
      </div> */}
    </Layout>
  );
};

export default CategoryProduct;