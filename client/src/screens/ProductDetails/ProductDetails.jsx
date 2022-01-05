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
        {ProductDetails && (
          <div>
          <div className="product-details-name">
          <p>{ProductDetails.name}</p>
          </div>
      <div className="product-details">

          <div className="details-img">
            <img src={ProductDetails.imgURL} alt="" /> 
            </div>

            <div className="details-info">

            <div className="edit-delete"> 
            <h3 className="details-subheader">Location:</h3>
            <p className="details-location">{ProductDetails.location}</p>
            <button>Edit</button>
            <button>Delete</button>
            </div>

            <br />

              <h2 className="details-subheader">Condition:</h2>
              <span className="details-cond">{ProductDetails.condition}</span>

            <br />

            <h2 className="details-subheader">Item Name:</h2>
            <span className="details-name">{ProductDetails.name}</span>

            <br />

            <h2 className="details-subheader">Price:</h2>
            <span className="details-price">{ProductDetails.price}</span>

            <br />

            <h2 className="details-subheader">Description:</h2>
            <span className="details-desc">{ProductDetails.description}</span>

            <br />
            </div>
      </div>
      </div>
        )}
    </Layout>
  );
}
