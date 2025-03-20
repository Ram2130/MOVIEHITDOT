import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.css";
const Footer = () => {

  return (
    <div className="p"   >
      <h1 className="text-center">All Right Reserved &copy; 2025 <a href="/" style={{color:"#dc3545",}}>HITMOVIEDOT </a></h1>
      <p className="text-center mt-3 color">
        <Link to="/about"  style={{textDecoration:"none",color:"white"}}>About Us </Link>| <Link   style={{textDecoration:"none",color:"white"}}to="/contact">Contact </Link>|
         <Link to="/policy"  style={{textDecoration:"none",color:"white"}}> Privacy Policy</Link> | <Link to="/requestUs"  style={{textDecoration:"none",color:"white"}}> Request Us</Link>
      </p>
    </div>
  );
};

export default Footer;
