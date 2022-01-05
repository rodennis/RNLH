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
              <img
                src="https://di2ponv0v5otw.cloudfront.net/posts/2021/12/11/61b4fb04efd0e41a9cccd520/m_wp_61b4fb0b3a0db9c12a41c8de.webp"
                alt="Amiri Jeans"
                className="car-items"
              />
              <h4 className="item-names">Amiri Jeans</h4>
            </div>
            <div className="main-container-items">
              <img
                src="https://i.ebayimg.com/images/g/Uy0AAOSwZK5gk38W/s-l1600.jpg"
                alt="Canada Goose Jacket"
                className="car-items"
              />
              <h4 className="item-names">Canada Goose Jacket</h4>
            </div>
            <div className="main-container-items">
              <img
                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTVUnG-JPjrBa2px-pHnmbD6CTp02N3BaVVykqTx76qZmBxOrIVL5B5f-COLJ7kXL5-bUGGM03ThEl5dpFFFfKTt0P3cPOqE8jL5C2MLzE&usqp=CAY"
                alt="Gucci Belt"
                className="car-items"
              />
              <h4 className="item-names">Gucci Belt</h4>
            </div>
            <div className="main-container-items">
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQL9xtkwO2zzQAzBsfeU8wJmZWITt_DYh1ygILtgmYA3s9Sgbh8YwcndaHuO-gnHbrtoXZm7yUYY1drgbVMARK4uPiN6gtzeT6CGg_2YYRUAwbRUolREpMsYw&usqp=CAY"
                alt="Monopoly"
                className="car-items"
              />
              <h4 className="item-names">Monopoly</h4>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="main-container-items">
              <img
                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSzHUm9rqAU_YtnUi0oVMBQnwtmW_AI5XrZnqZw0qoprT2L1-i4dTwBmLl0sK5seyF5Be1bF5hBMEN3gzvElBh7hpeYcTMw0-Sou6BqYVT56goj1aXa9HO9&usqp=CAY"
                alt="Trouble"
                className="car-items"
              />
              <h4 className="item-names">Trouble</h4>
            </div>
            <div className="main-container-items">
              <img
                src="https://cdn.cnn.com/cnnnext/dam/assets/211025072623-macbook-pro-14-display-5.jpg"
                alt="2021 Macbook Pro"
                className="car-items"
              />
              <h4 className="item-names">2021 Macbook Pro</h4>
            </div>
            <div className="main-container-items">
              <img
                src="https://assets-prd.ignimgs.com/2020/10/23/image-from-ios-1603470363376.jpg"
                alt="Playstation 5"
                className="car-items"
              />
              <h4 className="item-names">Playstation 5</h4>
            </div>
            <div className="main-container-items">
              <img
                src="https://i5.walmartimages.com/asr/8ebe9728-7f18-4fa9-a40d-9353a9104161.d5ae8243e11742647fa73fb19f541242.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
                alt="Green Velvet Couch"
                className="car-items"
              />
              <h4 className="item-names">Green Velvet Couch</h4>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="main-container-items">
              <img
                src="https://img1.homary.com/filters:format(webp)/mall/file/2021/12/04/0cd962361d574ab0b942344c51aa255e.jpg"
                alt="Dining Table"
                className="car-items"
              />
              <h4 className="item-names">Dining Table</h4>
            </div>
            <div className="main-container-items">
              <img
                src="https://i.gyazo.com/62fcc3c8c0cfbd675e4f98f74483393f.jpg"
                alt="2011 Argo Avenger 750 EFI"
                className="car-items"
              />
              <h4 className="item-names">2011 Argo Avenger 750 EFI</h4>
            </div>
            <div className="main-container-items">
              <img
                src="https://i.gyazo.com/c8952c15c80c5f4fda2118aaec9af751.jpg"
                alt="2018 GMC Sierra Denali Pickup"
                className="car-items-1"
              />
              <h4 className="item-names-1">
                2018 GMC Sierra <br />
                Denali Pickup
              </h4>
            </div>
            <div className="main-container-items">
              <img
                src="https://miro.medium.com/max/1400/1*sDpzeFIuCbWUa6f_7JAtxg.png"
                alt="iPhone 13 Pro Max"
                className="car-items"
              />
              <h4 className="item-names">iPhone 13 Pro Max</h4>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </Layout>
  );
}

export default Home;
