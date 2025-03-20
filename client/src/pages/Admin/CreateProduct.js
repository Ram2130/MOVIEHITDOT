import React, { useState, useEffect } from "react";
import Layout from "./../../components/Layout/Layout";
import AdminMenu from "./../../components/Layout/AdminMenu";
import {toast,Toaster} from "react-hot-toast";
import axios from "axios";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
const { Option } = Select;

const CreateProduct = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [shipping, setShipping] = useState("");
  const [photo, setPhoto] = useState("");

  const [gener, setGener] = useState("");
  const [director, setDirector] = useState("");
  const [actors, setActors] = useState("");

  const [size1080p, setSize1080p] = useState("");
  const [size1080pa, setSize1080pa] = useState("");
  const [size720p, setSize720p] = useState("");
  const [size480p, setSize480p] = useState("");
  const [trailer, setTrailer] = useState("");
  const [onlineStream, setOnlineStream] = useState("");

  //get all category
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong in getting catgeory");
    }
  };

  useEffect(() => {
    getAllCategory();
  }, []);

  //create product function
  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const productData = new FormData();
      productData.append("name", name);
      productData.append("description", description);
      productData.append("price", price);
      productData.append("quantity", quantity);
      productData.append("gener", gener);
      productData.append("actors", actors);
      productData.append("director", director);
      productData.append("category", category);
      productData.append("photo", photo);
      productData.append("size720p", size720p);
      productData.append("size480p", size480p);
      productData.append("size1080p", size1080p);
      productData.append("size1080pa", size1080pa);

      productData.append("trailer", trailer);
      productData.append("onlineStream", onlineStream);
       
      const { data } = axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data?.success) {
        toast.error(data?.message);
      } else {
        toast.success("Product Created Successfully");
        navigate("/dashboard/admin/products");
       
      }
    } catch (error) {
       
      toast.error("something went wrong");
    }
  };

  return (
    <> 
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h1>Create Product</h1>
            <div className="m-1 w-75">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <label className="btn btn-outline-secondary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    onChange={(e) => setPhoto(e.target.files[0])}
                    hidden
                  />
                </label>
              </div>
              <div className="mb-3">
                {photo && (
                  <div className="text-center">
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="product_photo"
                      height={"200px"}
                      className="img img-responsive"
                    />
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  placeholder="write a movie name"
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  placeholder="write a movie description"
                  className="form-control"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="number"
                  value={price}
                  placeholder="write a Release year"
                  className="form-control"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  value={quantity}
                  placeholder="write a Duration"
                  className="form-control"
                  onChange={(e) => setQuantity(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={gener}
                  placeholder="write a Gener of movie"
                  className="form-control"
                  onChange={(e) => setGener(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={actors}
                  placeholder="write a Actors"
                  className="form-control"
                  onChange={(e) => setActors(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={director}
                  placeholder="write a Director"
                  className="form-control"
                  onChange={(e) => setDirector(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={size480p}
                  placeholder="Link of 480p & size"
                  className="form-control"
                  onChange={(e) => setSize480p(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={size720p}
                  placeholder="Link of 720p & size"
                  className="form-control"
                  onChange={(e) => setSize720p(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={size1080p}
                  placeholder="Link of 1080p & size"
                  className="form-control"
                  onChange={(e) => setSize1080p(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={size1080pa}
                  placeholder="Link of 1080 Advance & size"
                  className="form-control"
                  onChange={(e) => setSize1080pa(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={trailer}
                  placeholder="Link of Youtube Trailer"
                  className="form-control"
                  onChange={(e) => setTrailer(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={onlineStream}
                  placeholder="Link of online stream"
                  className="form-control"
                  onChange={(e) => setOnlineStream(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <Select
                  bordered={false}
                  placeholder="Select Shipping "
                  size="large"
                  showSearch
                  className="form-select mb-3"
                  onChange={(value) => {
                    setShipping(value);
                  }}
                >
                  <Option value="HDRip">HDRip</Option>
                  <Option value="WebRip">WebRip</Option>
                  <Option value="PRE HDRip">PRE HDRip</Option>
                </Select>
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" onClick={handleCreate}>
                  CREATE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    <Toaster />
    </>
  );
};

export default CreateProduct;