import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
const Categories = () => {
  const categories = useCategory();
  return (
    <Layout title={"All Categories"}>
      <div className="container">
        <div className="row container" style={{backgroundColor:"black"}}>
          {categories.map((c) => (
             
              <div className="card" key={c._id} style={{backgroundColor:"black",marginTop:"24px" ,display:"flex",width:"50%"}}>
                <Link to={`/category/${c.slug}`}   className="btn btn-outline-danger">
                  {c.name}
                </Link>
              
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;