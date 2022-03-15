import React from "react";
import { useState, useEffect } from "react";
import "./EditProducts.css";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import { getProduct, updateProduct } from "../../services/products";

function EditProducts(props) {
  let nav = useNavigate();

  const [product, setProduct] = useState({
    imgURL: "",
    name: "",
    condition: "",
    location: "",
    price: "",
    // category: '',
    description: "",
  });

  let { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getProduct(id);
      setProduct(product);
    };
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(id, product);
    nav(`/products/${id}`);
    props.setToggle((prevToggle) => !prevToggle);
  };

  return (
    <div>
      <Layout user={props.user}>
        <div className="main-edit">
          <div className="sub-edit">
            <div className="helper-text">
              <h3>
                Edit your product here, you can edit only the field that needs
                changing.
              </h3>
            </div>
            <div className="edit-form">
              <h1>EDIT PRODUCT</h1>
              <form onSubmit={handleSubmit}>
                <label>Image URL:</label>
                <input
                  placeholder="Image URL"
                  value={product.imgURL}
                  name="imgURL"
                  required
                  onChange={handleChange}
                />
                <label>Product Name:</label>
                <input
                  placeholder="Name"
                  value={product.name}
                  name="name"
                  required
                  onChange={handleChange}
                />
                <label>Condition:</label>
                <input
                  placeholder="Condition"
                  value={product.condition}
                  name="condition"
                  required
                  onChange={handleChange}
                />
                <label>Location:</label>
                <input
                  placeholder="Location"
                  value={product.location}
                  name="location"
                  required
                  onChange={handleChange}
                />
                <label>Price:</label>
                <input
                  placeholder="Price"
                  value={product.price}
                  name="price"
                  required
                  onChange={handleChange}
                />
                <label>Description:</label>
                <textarea
                  placeholder="Description"
                  value={product.description}
                  name="description"
                  required
                  onChange={handleChange}
                />
                <button disabled>Edit</button>
                <h6>Button disabled, for viewing only.</h6>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default EditProducts;
