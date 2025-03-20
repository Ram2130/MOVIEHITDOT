import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import SearchInput from "../Form/SearchInput";
import WelcomePageBanner from "../../pages/images/WelcomePageBanner.jpg"
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
const Layout = ({ children }) => {
  var bg ={
    backgroundImage: `url(../)`
  }
  return (
   <> 
      {/* <Header  /> */}
       
      <NavBar/>
      <div style={{width:"100%",backgroundColor:"black"}}>
    <SearchInput  />
</div>
      <main style={{ minHeight: "70vh" ,backgroundColor:"black", marginTop:"-25px" }}>{children}</main>
      
      <Footer />
       </>
    
  );
};

export default Layout;
