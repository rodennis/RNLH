import { useState, useEffect } from "react";
import { postResp } from "../services";
import { useNavigate, useParams } from "react-router-dom";

function ProductDetails(props) {
  const [imgURL, setImgURL] = useState("");
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [condition, setCondition] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";

export default function ProductDetails(props) {
  const [ProductDetails, setProductDetails] = useState({});

  const params = useParams();

  useEffect(() => {
    const foundProductDetails = props.products.find((ProductDetails) => {
      return ProductDetails.id === params.id;
    });
    setProductDetails(foundProductDetails);
  }, [params.id, props.products]);

  return (
    <div className="productDetails">
      <p className="bigName">{ProductDetails.name}</p>
      <br />
      <p className="imgURL">{ProductDetails.imgURL}</p>
      <br />

      <button>Submit :D</button>
    </form>
  );
}

export default ProductDetails



      <br />
      <p className="locationTag">Location:</p>
      <p className="location">{ProductDetails.location}</p>
      <br />
      <p className="conditionTag">Condition:</p>
      <p className="condition">{ProductDetails.condition}</p>
      <br />
      <p className="nameTag">Item Name:</p>
      <p className="smallName">{ProductDetails.name}</p>
      <br />
      <p className="priceTag">Price:</p>
      <p className="price">{ProductDetails.price}</p>
      <br />
      <p className="descriptionTag">Description:</p>
      <p className="description">{ProductDetails.description}</p>
      <br />
      <div>
        <b className="commentsTag">Comments</b>
        <br />
        <div className="comments">
          <p>What kind of graphics card does it have?</p>
          <p>I'm Interested!</p>
          <p>Hey is this available?</p>
        </div>
      </div>
    </div>
  );
}
