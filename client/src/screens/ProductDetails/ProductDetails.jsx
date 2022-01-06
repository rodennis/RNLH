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
              <div className="top-head-deets">
                <div className="edit-delete">
                  <h3 className="details-subheader">Location:</h3>
                  <p className="details-location">{ProductDetails.location}</p>
                </div>
                <div className="buttons-ed">
                  <button className="buttons-e">Edit</button>
                  <button className="buttons-d">Delete</button>
                </div>
              </div>

              <div className="all-deets">
                <br />

                <h2 className="details-subhead">Condition:</h2>
                <span className="details-cond">{ProductDetails.condition}</span>

                <br />

                <h2 className="details-subheader1">Item Name:</h2>
                <span className="details-name">{ProductDetails.name}</span>

                <br />

                <h2 className="details-subheader2">Price:</h2>
                <span className="details-price">{ProductDetails.price}</span>

                <br />

                <h2 className="details-subheader3">Description:</h2>
                <span className="details-desc">
                  {ProductDetails.description}
                </span>

                <br />
              </div>
            </div>
          </div>
        </div>
      )}

    </Layout>
  );
}
