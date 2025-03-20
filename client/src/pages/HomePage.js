import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.css";
import DarkVariantExample from "./Carsoule/Carsoul";

// import Footer from "../componets/Footer/Footer";

import WelcomePageImage1 from "./images/WelcomePageImage1.png";
import WelcomePageImage2 from "./images/WelcomePageImage2.png";
import WelcomePageImage3 from "./images/WelcomePageImage3.png";
import WelcomePageImage4 from "./images/WelcomePageImage4.png";
import WelcomePageBanner from "./images/WelcomePageBanner.jpg";
 

import { Link } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
 // const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
 // const [checked, setChecked] = useState([]);
 // const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  // const handleFilter = (value, id) => {
  //   let all = [...checked];
  //   if (value) {
  //     all.push(id);
  //   } else {
  //     all = all.filter((c) => c !== id);
  //   }
  //   setChecked(all);
  // };
   useEffect(() => {
 getAllProducts();
  }, []);

  // useEffect(() => {
  //   if (checked.length || radio.length) filterProduct();
  // }, [checked, radio]);

  //get filterd product
  // const filterProduct = async () => {
  //   try {
  //     const { data } = await axios.post("/api/v1/product/product-filters", {
  //       checked,
  //       radio,
  //     });
  //     setProducts(data?.products);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (

    <> 
    <Layout title={"ALl Products - Best offers "}>
      



      <div className="container-fluid row mt-4 home-page" style={{marginTop:"-21px"}} >
        {/* <div className="col-md-3 filters">
          <h4 className="text-center">Movies Category</h4>
          <div className="d-flex flex-column">
            {categories?.map((c) => (
              <Checkbox
                key={c._id}
                onChange={(e) => handleFilter(e.target.checked, c._id)}
                style={{color:"grey"}}
              >
                {c.name}
              </Checkbox>
            ))}
          </div>
          price filter
          <h4 className="text-center mt-4">Filter By Price</h4>
          <div className="d-flex flex-column">
            <Radio.Group onChange={(e) => setRadio(e.target.value)}>
              {Prices?.map((p) => (
                <div key={p._id}>
                  <Radio value={p.array}>{p.name}</Radio>
                </div>
              ))}
            </Radio.Group>
          </div>
          <div className="d-flex flex-column">
            <button
              className="btn btn-danger"
              onClick={() => window.location.reload()}
            >
              RESET FILTERS
            </button>
          </div>
        </div> */}
        
        <div className="col-md-21 ">
          <h1 className="text-center">All Movies</h1>
          <div className="d-flex flex-wrap m-2 mt-5 ml-2" style={{margin:"auto",width:"100%",alignItems:"center"}} >
            {products?.map((p) => (
              <div className="card m-2 zoom view" key={p._id} style={{cursor:"pointer" ,hight:"230px",width:"140px"}} onClick={() => navigate(`/product/${p.slug}`)}>
                {/* <img
                //  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                  
                /> */}
                <div   className="card-img-top"     style={{backgroundImage:`url(/api/v1/product/product-photo/${p._id})` ,backgroundSize:"100% 100%"}}>
                   
                    <h5 className="card-title"  style={{fontSize:"1rem", marginTop:"200px",textAlign:"center", color:"white"}}>{p.name} </h5>
                    
                  
                  {/* <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p> */}
                  {/* <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                     DownLoad
                    </button>
                    <button
                      className="btn btn-dark ms-1"
                      onClick={() => {
                        setCart([...cart, p]);
                        localStorage.setItem(
                          "cart",
                          JSON.stringify([...cart, p])
                        );
                        toast.success("Item Added to cart");
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
          <div className="m-2 p-3">
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
                    {/* Loadmore <AiOutlineReload /> */}
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
      <div>
    {/*Hero Section*/}
    

    {/* Section 2 */}
    <section className="bg-black border-y-8 border-y-zinc-800">
       
        <div className="flex justify-center md:py-8">
          <div className="lg:flex lg:items-center lg:w-9/12">
            <div>
              <h1 className="mt-2 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                Enjoy on your TV.
              </h1>
              <h1 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
                Blu-ray players and more.
              </h1>
            </div>
            <div className="flex justify-center" >
            
              {/* <img className="" src={WelcomePageImage1} /> */}
           
               
            </div>
          </div>
        </div>
       
    </section>
    

    {/* Section 3 */}
    <section className="bg-black">
      
        <div className="flex justify-center">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:w-9/12">
            <div className="flex justify-center" style={{display:"flex", flexDirection:"row-reverse"}}>
              <img className="hidden" style={{width:"100%",height:"auto"}} src={WelcomePageImage2} />
              <div >
              <h1 className="mx-4 mt-4 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                Download your shows to watch offline.
              </h1>
              <h1 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                Save your favourites easily and always have something to
                watch.
              </h1>
              <h1 className="mt-4 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                Watch everywhere.
              </h1>
              <h1 className="m-4 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                Stream unlimited movies and TV shows on your phone, tablet,
                laptop, and TV.
              </h1>
            </div>
           
            
            </div>
          </div>
        </div>
       
    </section>
<hr/>
    {/* Section 4 */}
    <section className="bg-black border-y-8 border-y-zinc-800">
     
        <div className="flex justify-center md:py-8">
          <div className="lg:flex lg:items-center lg:w-9/12">
            <div>
            
            </div>
            <div className="flex justify-center"  style={{display:"flex"}}>
              <img className="hidden"  style={{width:"100%",height:"auto"}}  src={WelcomePageImage3} />
              <div style={{flexDirection:"column"}}>
              <h1>Frequently Asked Questions</h1>
                <div style={{color:"white"}}>
                  <h3>What is Hitmoviedot?</h3>
              <span>Hitmoviedot is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
 You can watch as much as you want, whenever you want, without a single ad or free of cost. There's always something new to discover, and new TV shows and movies are added every week!</span>
</div>
<hr style={{color:"grey"}}/>
         <div  style={{color:"white"}}>
                  <h3> How much does Hitmoviedot cost?</h3>
              <span>Watch Hitmoviedot on your smartphone, tablet, Smart TV, laptop, or streaming device without any cost.fully free available all of the movies & show.</span>
</div>   
               </div>
            </div>
          </div>
        </div>
       
    </section>
 


    <hr style={{color:"grey"}}/>
 

    {/* Section 5 */}
    <section className="bg-black" >
       
        <div className="flex justify-center">
          <div className="flex flex-col-reverse lg:flex-row lg:items-center lg:w-9/12">
            <div className="flex justify-center"   style={{display:"flex"}} >
              <img className="hidden" style={{width:"100% ", height:"auto"}} src={WelcomePageImage4}  />
              <div style={{flexDirection:"column"}}>
              
                <div style={{color:"white"}}>
                  <h3>Where can I watch?</h3>
              <span>Watch anywhere, anytime. Sign in with your Hitmoviedot account to watch instantly on the web at Hitmoviedot.com from your personal computer or on any internet-connected device that offers the Hitmoviedot app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

You can also download your favourite shows with the iOS or Android app. Use downloads to watch while you're on the go and without an internet connection. Take Hitmoviedot with you anywhere.</span>
</div>
<hr style={{color:"grey"}}/>
         <div  style={{color:"white"}}>
                  <h3>What can I watch on Hitmoviedot?</h3>
              <span>Hitmoviedot has an extensive library of feature films, documentaries, TV shows, anime, award-winning Hitmoviedot originals, and more. Watch as much as you want, anytime you want.</span>
</div>   
<hr style={{color:"grey"}}/>
<div style={{color:"white"}}>
                  <h3>Is Hitmoviedot good for kids?</h3>
              <span>The Hitmoviedot Kids experience is very good without any cost  to give parents control while kids enjoy family-friendly TV shows and films in their own space.

Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</span>
</div>
               </div>
            </div>
            <div>
              <h1 className="mt-4 mb-6 text-4xl font-semibold text-center text-white lg:mt-0 lg:text-left lg:ml-8 lg:text-5xl xl:text-6xl">
                Create profiles for children.
              </h1>
              <h1 className="mb-0 text-center text-stone-400 font-light lg:text-left lg:ml-8 lg:text-2xl lg:w-9/12">
                Send children on adventures with their favourite characters in
                a space made just for them—free with your membership.
              </h1>
            </div>
          </div>
        </div>
      
    </section>

    {/* Section 6 */}
    

    {/* Footer */}
    {/* <Footer></Footer> */}
  </div>
    </Layout>
    </>
  );
};

export default HomePage;