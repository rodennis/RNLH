import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./ProductDetails.css";

export default function ProductDetails(props) {
  const [ProductDetails, setProductDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    const foundProductDetails = props.products.find((ProductDetails) => {
      return ProductDetails._id === params.id;
    });
    setProductDetails(foundProductDetails);
  }, [params.id, props.products]);

  return (
    <Layout user={props.user}>
      <div className="productDetails">
        {ProductDetails && (
          <div>
            <p className="bigName">{ProductDetails.name}</p>
            <br />
            <p className="imgURL">{ProductDetails.imgURL}</p>
            <br />
            <h3 className="locationTag">Location:</h3>
            <p className="location">{ProductDetails.location}</p>
            <br />
            <div className="conditionTag">
              <h2>Condition:</h2>
              <ul>{ProductDetails.condition}</ul>
            </div>
            <br />
            <h2>Item Name:</h2>
            <ul>{ProductDetails.name}</ul>
            <br />
            <h2>Price:</h2>
            <ul>{ProductDetails.price}</ul>
            <br />
            <h2>Description:</h2>
            <ul>{ProductDetails.description}</ul>
            <br />
            {/* <div>
              <b className="commentsTag">Comments</b>
              <br />
              <div className="comments">
                <p>What kind of graphics card does it have?</p>
                <p>I'm Interested!</p>
                <p>Hey is this available?</p>
              </div>
            </div> */}
          </div>
        )}
      </div>
    </Layout>
  );
}
