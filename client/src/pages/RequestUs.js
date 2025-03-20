import React from "react";
import Layout from "./../components/Layout/Layout";
import RequestForm  from './RequestForm'
const Policy = () => {
  return (
    <Layout>
      <div className="row contactus "  style={{marginTop:"25px"}} >
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 text-white">
        <p>Any Type of Request movie name our team will be upload movie as soon as possible. Your email address will not be published.Requiredfields are marked(*)</p>
      
      <RequestForm/>
      
         
        </div>
      </div>
    </Layout>
  );
};

export default Policy;
