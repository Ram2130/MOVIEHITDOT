import React, { useState } from "react";
import axios from "axios";
import Form from 'react-bootstrap/Form'
import { message } from "antd";
import { toast, Toaster } from 'react-hot-toast';

 

function ContactForm() {
 const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
 
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try { const productData = new FormData();
        productData.append("name", name);
        productData.append("message",message );
        productData.append("email", email);
        console.log(productData);
        const { data } = await  axios.post(
            "/api/v1/product/requestForm",
            productData
          );
           
         
    

    if (!data?.success) {
      console.log(data?.message);
      toast.success("request sent successfully");
      setName("");
      setEmail("");
      setMessage("");
      } else {
        console.error("Product Created Successfully");
      //  navigate("/dashboard/admin/products");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error sending your message.");
    }
  };

  return (
<>
        <Form  onSubmit={handleSubmit} >
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Name</Form.Label>
        <Form.Control   onChange={(e) => setName(e.target.value)} value={name} style={{width:"100%"}} type="text" placeholder="Enter your name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control   onChange={(e) => setEmail(e.target.value)} value={email} style={{width:"100%"}} type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Comment Movie Name</Form.Label>
        <Form.Control  onChange={(e) => setMessage(e.target.value)} value={message}  style={{width:"100%"}} as="textarea" rows={3} />
      </Form.Group>
      <button style={{marginTop:"10px"}} className="btn btn-outline-danger" type="submit">
         Send
        </button>
    </Form> 

    <Toaster />


    {/* <form onSubmit={handleSubmit}> */}
      {/* <label>
        Name:
        <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a movie name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
      </label> */}
      {/* <label>
        Email:
        <input
          type="email"
         
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label>
        Message:
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </label> */}
      {/* <button type="submit">Submit</button>
    </form> */}
    </>
  );
}

export default ContactForm;
