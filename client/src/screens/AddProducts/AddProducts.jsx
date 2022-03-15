import { useState } from "react";
import "./AddProducts.css";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../services/products";
import Layout from "../../components/Layout/Layout";

function AddProducts(props) {
  let nav = useNavigate();

  const [product, setProduct] = useState({
    imgURL: "",
    name: "",
    condition: "",
    location: "",
    price: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createProduct(product);
    nav("/products");
    props.setToggle((prevToggle) => !prevToggle);
  };

  return (
    <Layout user={props.user}>
      <div>
        <div className="main-create">
          <div className="sub-create">
            <div className="helper-text">
              <h3>
                Add your product here, all fields are required and must be
                detailed.
              </h3>
            </div>
            <div className="create-form">
              <h1>ADD NEW PRODUCT</h1>
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
                  placeholder="Product Name"
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
                <button type="submit" disabled>ADD</button>
                <h6>Button disabled, for viewing only</h6>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default AddProducts;
