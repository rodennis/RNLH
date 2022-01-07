import React from "react";
import "./ProductCards.css";
import { Link } from "react-router-dom";

function ProductCards({ products }) {
  return (
    <div className="all-products">
      {products.map((product) => (
        <div key={product._id} className="product-card-div">
          <Link className="link" to={`/products/${product._id}`}>
            <h2>
              {product.name.length < 15
                ? product.name
                : `${product.name.slice(0, 15)}...`}
            </h2>
            <h4>{product.location}</h4>
            <p>{product.price.includes('$') ? product.price : `$${product.price}`}</p>
            </div>

            <img src={product.imgURL} alt="" />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
