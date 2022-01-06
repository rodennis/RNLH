import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import "./ProductDetails.css";
import { deleteProduct } from "../../services/products";

export default function ProductDetails(props) {
  const navigate = useNavigate();
  const [ProductDetails, setProductDetails] = useState({});
  const params = useParams();

  useEffect(() => {
    const foundProductDetails = props.products.find((ProductDetails) => {
      return ProductDetails._id === params.id;
    });
    setProductDetails(foundProductDetails);
  }, [params.id, props.products]);

  const handleDelete = () => {
    deleteProduct(ProductDetails._id);
    navigate("/products");
    props.setToggle((prevToggle) => !prevToggle);
  };

  return (
    <Layout user={props.user}>
      {ProductDetails && (
        <div className="products-detail-main">
          <div className="product-details-name">
            <p>{ProductDetails.name}</p>
          </div>
          <div className="product-details">
            <div className="details-img">
              <img
                className="details-image"
                src={ProductDetails.imgURL}
                alt=""
              />
            </div>

            <div className="details-info">
              <div className="top-head-deets">
                <div className="edit-delete">
                  <h3 className="details-subheader-loc">Location:</h3>
                  <p className="details-location">{ProductDetails.location}</p>
                </div>
                <div className="buttons-ed">
                  <Link
                    className="edit-link"
                    to={`/products/${ProductDetails._id}/edit`}
                  >
                    <button className="buttons-e" style={{ color: "white" }}>
                      Edit
                    </button>
                  </Link>
                  <button
                    onClick={handleDelete}
                    className="buttons-d"
                    style={{ color: "white" }}
                  >
                    Delete
                  </button>
                </div>
              </div>

              <div className="all-deets">
                <div></div>
                <div></div>
                <div></div>
                <br />

                <h4 className="details-subheader">
                  Condition:{" "}
                  <span className="details-cond">
                    {ProductDetails.condition}
                  </span>
                </h4>

                <br />

                <div className="item-name-subhead">
                  <h4 className="details-subheader">Item Name: </h4>
                  <span className="details-name">{ProductDetails.name}</span>
                </div>

                <br />
                <h4 className="details-subheader">
                  Price:{" "}
                  <span className="details-price">{ProductDetails.price}</span>
                </h4>

                <br />

                <h4 className="details-subheader">Description:</h4>
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
