import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import VideoShow from "./VideoShow";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RequestForm from "./RequestForm"
const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

 

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Layout>
      <div style={{marginTop:"-100px",maxWidth:"100%"}} >
      <div className="row container product-details"  style={{display:"flex" ,flexDirection:"row",alignItems:"center",maxWidth:"100%"}}>
     
        
         
        <div className="col-md-6 product-details-info" style={{color:"white" ,marginLeft:"10px",width:"100%",textAlign:"center"}}>
          <h1 className="text-center" >Movie Details</h1>
          <hr />
          <h6> {product.name}</h6>
          <div className="zoom" style={{display:"flex"}}>
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            className="card-img-top"
            alt={product.name}
            style={{width:"30%",height:"5%",marginRight:"10px"}}
            
          />

          {/* <Button variant="danger" size="lg">
       Trailer
      </Button>  */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100  ml-2" style={{width:"100%",height:"auto"}}>
      <iframe
      
        width="100%"
        
        height="100%"
        src={`https://www.youtube.com/embed/${product.trailer}`}
        frameBorder="0"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
        title="YouTube Video"
      ></iframe>
      </div>
    </div>
          <div style={{display:"flex",textAlign:"start"}}>
            <div>
         
          <h6>Directore: {product.director}</h6>
          <h6>Actors: {product.actors}</h6>
          <h6>Country: Ind</h6>
          <h6> Post Updated: {product.updatedAt?.substring(0,10)}</h6>
          <h6>Category : {product?.category?.name}</h6>
          </div>
          <div style={{ marginLeft:"100px"}}>
          <h6>Duration:{product.quantity}min.</h6>
          <h6>Release:{product.price}</h6>
          <h6>IMDb:N/A/10</h6>
          <h6>Votes:N/A</h6>
          <h6>Review:N/ALl</h6>
          <h6>
            Year:
            {product?.price }
          </h6>
          </div>

<br></br>

          
         
          </div>
          <h6>{product.description}</h6>
          <hr/>
          <h6> {product.name}</h6>
          <div style={{textAlign:"center"}}>Stream Online Links:</div>
          
             {product.onlineStream=="Not Available"?
             <Button variant="danger" size="lg">   
              Not Available
              </Button>
        :  <Button variant="danger" size="lg">   
      <a target='_blank' href={`${product.onlineStream}`} style={{color:"white", textDecoration:"none"}}> {product.name} </a>
      </Button>
}
          <div style={{textAlign:"center"}}>G-Drive[GDTOT] Links:</div>

          <div className="d-grid gap-2">
      <Button variant="danger" size="lg">
        {
           
        }
      <a target='_blank' href={ product.size480p?.substring(0,product.size480p.indexOf("-")) } style={{color:"white", textDecoration:"none"}}> {product.name?.substring(0,product.name.indexOf("-"))+"480p "+product.size480p?.substring(product.size480p.indexOf("-"))+"MB"} </a>
      </Button>
      <Button variant="danger" size="lg">
      <a target='_blank'  href={ product.size720p?.substring(0,product.size720p.indexOf("-")) }  style={{color:"white", textDecoration:"none"}}> {product.name?.substring(0,product.name.indexOf("-"))+"720p " +product.size720p?.substring(product.size720p.indexOf("-"))+"GB"} </a>
      </Button>
      <Button variant="danger" size="lg">
      <a target='_blank'  href={ product.size1080p?.substring(0,product.size1080p.indexOf("-")) }  style={{color:"white", textDecoration:"none"}}> {product.name?.substring(0,product.name.indexOf("-"))+"1080p " +product.size1080p?.substring(product.size1080p.indexOf("-"))+"GB"}</a>
      </Button>
      <Button variant="danger" size="lg">
      <a target='_blank' href={ product.size1080pa?.substring(0,product.size1080pa.indexOf("-")) }  style={{color:"white", textDecoration:"none"}}> {product.name?.substring(0,product.name.indexOf("-"))+"1080p x265HEVC " +product.size1080pa?.substring(product.size1080pa.indexOf("-"))+"GB"} </a>
      </Button>
      
      
    </div>
          
        </div>
        
      

      </div>
      <div style={{color:"white"}}>
      <h1>Comments</h1>
      <p>Comments movie name our team will be upload movie as soon as possible. Your email address will not be published.Requiredfields are marked(*)</p>
      
      <RequestForm/>
      {/* <Form action="">
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email address</Form.Label>
        <Form.Control style={{width:"100%"}} type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control style={{width:"100%"}} as="textarea" rows={3} />
      </Form.Group>
    </Form> */}
      </div>
      <hr />









      {/* <div className="row container similar-products">
        <h4>Similar Products ➡️</h4>
        <div className="d-flex flex-wrap">
        {relatedProducts.length < 1 && (
          <p className="text-center">No Similar Products found</p>
        )}

        <div className="container-fluid row mt-4 home-page" style={{marginTop:"-21px"}} >
       
        <div className="col-md-21 ">
          <h1 className="text-center">All Movies</h1>
         
          <Container className="m-2" >
            
          <Row xs={3} md={4} lg={6}>
            {relatedProducts?.map((p) => (
               
                   <Col key={p._id} onClick={() => navigate(`/product/${p.slug}`)}    style={{backgroundImage:`url(/api/v1/product/product-photo/${p._id})` ,backgroundRepeat:"no-repeat" ,backgroundSize:"100% 100%",cursor:"pointer",marginRight:"5px" }}> 
             
              
                   
                    <h5 className="card-title"  style={{fontSize:"50%", marginTop:"70%" , color:"white"}}>{p.name} </h5>
                    
                 
                
            
              </Col>
    
      
   ))}
     </Row>
    </Container> 
         

           
        
        </div>
      </div>
      </div>
        
      </div> */}
      </div>
      
      <div className="container-fluid row mt-4 home-page" style={{marginTop:"-21px"}} >
      <div className="col-md-21 ">
        <h1 style={{marginTop:"25px"}}>Search Resuts</h1>
          <h6>
            {relatedProducts?.length < 1
              ? "No Products Found":""
              // : `Found ${values?.results.length}`
              }
          </h6>
    

        <div className="d-flex flex-wrap m-2 mt-5 ml-2" style={{margin:"auto",width:"100%",alignItems:"center"}} >
       { relatedProducts?.map((p) => (
            <div className="card m-2 zoom " key={p._id} style={{cursor:"pointer" ,hight:"230px",width:"156px"}} onClick={() => navigate(`/product/${p.slug}`)}>
             
              <div   className="card-img-top"     style={{backgroundImage:`url(/api/v1/product/product-photo/${p._id})` ,backgroundSize:"100% 100%"}}>
                 
                  <h5 className="card-title"  style={{fontSize:"1rem", marginTop:"200px",textAlign:"center", color:"white"}}>{p.name} </h5>
                  
                 
              </div>
            </div>
          ))}
        </div>
       
      </div>
    </div>
    
     
    
    </Layout>
  );
};

export default ProductDetails;




{/* <div className="col-md-21 ">
     
<div className="d-flex flex-wrap">


<h1 style={{marginTop:"25px"}}>Similar Products ➡️</h1>
{relatedProducts.length < 1 && (
  <p className="text-center">No Similar Products found</p>
)} */}