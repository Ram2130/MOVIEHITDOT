import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiMailSend, BiPhoneCall, BiSupport } from "react-icons/bi";
const Contact = () => {
  return (
    <Layout>
      <div className="row contactus  " style={{marginTop:"25px"}}>
        <div className="col-md-6 ">
          <img
            src="/images/contactus.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4 text-white">
          <h1 className="bg-dark p-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2" >
            any query and info about movie feel free to call anytime we 24X7
            available.Please feel free to contact us regarding any need. We look forward to hearing from you. Also, you can post a
            request regarding new movies or TV Series. We will be more than happy to post your favorite movies and TV series.
          </p>
          <p className="mt-3">
            <BiMailSend /> : www.hitmoviedot@gmail.com
          </p>
          <p className="mt-3">
            <BiPhoneCall /> : 012-3456789
          </p>
          <p className="mt-3">
            <BiSupport /> : 1800-0000-0000 (toll free)
          </p>
        </div>
         
      </div>
    </Layout>
  );
};

export default Contact;
