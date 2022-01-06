import Layout from "../../components/Layout/Layout";
import Carousel, { CarouselItem } from "../../components/Carousel/Carousel.jsx";
import "./Home.css";
import { Link } from "react-router-dom";

function Home(props) {
  return (
    <Layout user={props.user}>
      <div className="main-home">
        <div className="welcome-div">
          <h1 className="welcome-msg">Welcome to RNLH!</h1>
          <h3 className="sub-header">
            We are a luxurious second hand store! Feel free to browse the store
            or post a product!
          </h3>
          <Link
            className="products-link"
            to="/products"
            style={{ textDecoration: "none" }}
          >
            Shop Our Products
          </Link>
        </div>
        <div className="main-img-div">
          <img
            src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641316329/apparel-ga341b623f_1920_bomxmz.jpg"
            alt="main-img"
            className="main-img"
          />
        </div>
      </div>
      <div>
        <h1 className="car-header">Featured Products</h1>

        <Carousel>
          <CarouselItem>
            {" "}
            <div className="main-container-items">
              <Link
                to={`/products/${props.products[2]?._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={props.products[2]?.imgURL}
                  alt={props.products[2]?.name}
                  className="car-items"
                />
                <h4 className="item-names">{props.products[2]?.name}</h4>
              </Link>
            </div>
            <div className="main-container-items">
              <Link
                to={`/products/${props.products[0]?._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={props.products[0]?.imgURL}
                  alt={props.products[0]?.name}
                  className="car-items"
                />
                <h4 className="item-names">{props.products[0]?.name}</h4>
              </Link>
            </div>
            <div className="main-container-items">
              <Link
                to={`/products/${props.products[8]?._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={props.products[8]?.imgURL}
                  alt={props.products[8]?.name}
                  className="car-items"
                />
                <h4 className="item-names">{props.products[8]?.name}</h4>
              </Link>
            </div>
            <div className="main-container-items media">
              <Link
                to={`/products/${props.products[15]?._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={props.products[15]?.imgURL}
                  alt={props.products[15]?.name}
                  className="car-items"
                />
                <h4 className="item-names">{props.products[15]?.name}</h4>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="main-container-items">
              <Link
                to={`/products/${props.products[18]?._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={props.products[18]?.imgURL}
                  alt={props.products[18]?.name}
                  className="car-items"
                />
                <h4 className="item-names">{props.products[18]?.name}</h4>
              </Link>
            </div>
            <div className="main-container-items">
              <Link
                to={`/products/${props.products[21]?._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={props.products[21]?.imgURL}
                  alt={props.products[21]?.name}
                  className="car-items"
                />
                <h4 className="item-names">{props.products[21]?.name}</h4>
              </Link>
            </div>
            <div className="main-container-items">
              <Link
                to={`/products/${props.products[22]?._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={props.products[22]?.imgURL}
                  alt={props.products[22]?.name}
                  className="car-items"
                />
                <h4 className="item-names">{props.products[22]?.name}</h4>
              </Link>
            </div>
            <div className="main-container-items media">
              <Link
                to={`/products/${props.products[32]?._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={props.products[32]?.imgURL}
                  alt={props.products[32]?.name}
                  className="car-items"
                />
                <h4 className="item-names">{props.products[32]?.name}</h4>
              </Link>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="main-container-items">
              <Link
                to={`/products/${props.products[31]?._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={props.products[31]?.imgURL}
                  alt={props.products[31]?.name}
                  className="car-items"
                />
                <h4 className="item-names">{props.products[31]?.name}</h4>
              </Link>
            </div>
            <div className="main-container-items">
              <Link
                to={`/products/${props.products[45]?._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={props.products[45]?.imgURL}
                  alt={props.products[45]?.name}
                  className="car-items"
                />
                <h4 className="item-names">{props.products[45]?.name}</h4>
              </Link>
            </div>
            <div className="main-container-items media">
              <Link
                to={`/products/${props.products[47]?._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={props.products[47]?.imgURL}
                  alt="2018 GMC Sierra Denali Pickup"
                  className="car-items-1"
                />
                <h4 className="item-names-1">
                  2018 GMC Sierra <br />
                  Denali Pickup
                </h4>
              </Link>
            </div>
            <div className="main-container-items">
              <Link
                to={`/products/${props.products[27]?._id}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <img
                  src={props.products[27]?.imgURL}
                  alt={props.products[27]?.name}
                  className="car-items"
                />
                <h4 className="item-names">{props.products[27]?.name}</h4>
              </Link>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </Layout>
  );
}

export default Home;
