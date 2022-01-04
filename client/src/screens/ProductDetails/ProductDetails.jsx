import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from '../../components/Layout/Layout'
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
        {ProductDetails &&
          <div>
            <p className="bigName">{ProductDetails.name}</p>
            <br />
            <p className="imgURL">{ProductDetails.imgURL}</p>
            <br />

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
        }
        </div>
    </Layout>
  );
}
