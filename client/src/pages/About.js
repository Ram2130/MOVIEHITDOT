import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus " style={{marginTop:"25px",width:"100%",height:"100%",display:"flex",flexDirection:"col"}}>
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" ,marginTop:"25px"}}
          />
        </div>
        <div className="col-md-10">
          <div className="text-justify mt-2 text-white" >
            
            <li>
          HITMOVIEDOT Is Best Website/Platform For Download Bollywood And Hollywood 720p HD Movies.
          </li>
          <li>
          We Sharing Here Direct Download Links Without Any Irritating Ads Or Pop-Ups.
          </li>
          <li>
          Here We Share Various Filesharing Sites Links For One Movie In Many Quality Like Bluray, HDRip, BRRip, Web-DL etc.
          Vegamovies – Download Hindi Movies, 300mb Movies, 480p Movies, 720p Movies, 1080p Movies.
          </li>
          <li>
          Download Dual/Multi Audio High-Quality Movies And Tv/Web Series Directly Without Any Popup Ads. We Are Providing English Movies, Hollywood Dual Audio Movies, Bollywood Movies, Tv/Web Series, Tv Shows, Anime, And Many More.
          </li>
          </div>
        </div>
        <hr/>
        <h2 className="text" style={{color:"#dc3545"}}>Our Official Domains Are:  <a href="/" style={{color:"#dc3545",}}>HITMOVIEDOT</a></h2>
        <div className="col-md-10">
        <div className="text-justify mt-2 text-white" >

        
          <li>
          Disclaimer: All My Post Are Free Available On Internet Posted By Somebody Else
          I’m Not VIOLATING Any COPYRIGHTED LAW. If Anything Is Against LAW, Please Notify Me At (voiseries@protonmail.com)
          </li>
          <li>
          If You think We Shared Your Content Or Product Without Your Permission, Then You Can Claim Using Our DMCA Contact Form Page. We Never Host Any File On Our Server All Point To Content Hosted On Third Party Websites.
          </li>
        </div>
      

              
                 </div>
                 <h3 style={{color:"white"}}>   <a href="/" style={{color:"#dc3545",}}>Note: HITMOVIEDOT </a>is Complete Independent Entity.
                
                </h3>
      </div>
    </Layout>
  );
};

export default About;
