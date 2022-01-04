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
            <p className="big-name">{ProductDetails.name}</p>
            <br />
            <p className="imgURL">{ProductDetails.imgURL}</p>
            <br />
            <h3 className="location-tag">Location:</h3>
            <p className="location">{ProductDetails.location}</p>
            <br />
            <div className="condition-tag">
              <h2 className="details-subheader">Condition:</h2>
              <p className="details-info">{ProductDetails.condition}</p>
            </div>
            <br />
            <h2 className="details-subheader">Item Name:</h2>
            <p className="details-info">{ProductDetails.name}</p>
            <br />
            <h2 className="details-subheader">Price:</h2>
            <p className="details-info">{ProductDetails.price}</p>
            <br />
            <h2 className="details-subheader">Description:</h2>
            <p className="details-info">{ProductDetails.description}</p>
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
