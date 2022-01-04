import Layout from "../../components/Layout/Layout";
import Carousel, { CarouselItem } from "../../components/Carousel/Carousel.jsx";
import "./Home.css";
import { Link } from "react-router-dom"


function Home(props) {
  return (
    <Layout user={props.user}>
      <div className="main-home">
        <div className="welcome-div">
          <h1 className="welcome-msg">Welcome to RNLH!</h1>
          <h3 className="sub-header">
            We are a luxurious second hand store! Feel free to browse the store or post a product!</h3>
          <Link to="/products">Shop Our Products</Link>
        </div>
        <div className="main-img-div">
          <img src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641316329/apparel-ga341b623f_1920_bomxmz.jpg" alt="main-img" className="main-img" />
        </div>
      </div>
      <div>
        <h1 className="car-header">Featured Products</h1>
        <Carousel>
          <CarouselItem>
            <div className="main-container-items">
              <img src="https://di2ponv0v5otw.cloudfront.net/posts/2021/12/11/61b4fb04efd0e41a9cccd520/m_wp_61b4fb0b3a0db9c12a41c8de.webp" alt="Amiri Jeans" className="car-items" />
              <h4 className="item-names">Amiri Jeans</h4>
            </div>
            <div className="main-container-items">
              <img src="https://di2ponv0v5otw.cloudfront.net/posts/2021/12/11/61b4fb04efd0e41a9cccd520/m_wp_61b4fb0b3a0db9c12a41c8de.webp" alt="Amiri Jeans" className="car-items" />
              <h4 className="item-names">Amiri Jeans</h4>
            </div>
            <div className="main-container-items">
              <img src="https://di2ponv0v5otw.cloudfront.net/posts/2021/12/11/61b4fb04efd0e41a9cccd520/m_wp_61b4fb0b3a0db9c12a41c8de.webp" alt="Amiri Jeans" className="car-items" />
              <h4 className="item-names">Amiri Jeans</h4>
            </div>
            <div className="main-container-items">
              <img src="https://di2ponv0v5otw.cloudfront.net/posts/2021/12/11/61b4fb04efd0e41a9cccd520/m_wp_61b4fb0b3a0db9c12a41c8de.webp" alt="Amiri Jeans" className="car-items" />
              <h4 className="item-names">Amiri Jeans</h4>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="main-container-items">
              <img src="https://di2ponv0v5otw.cloudfront.net/posts/2021/12/11/61b4fb04efd0e41a9cccd520/m_wp_61b4fb0b3a0db9c12a41c8de.webp" alt="Amiri Jeans" className="car-items" />
              <h4 className="item-names">Amiri Jeans</h4>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="main-container-items">
              <img src="https://di2ponv0v5otw.cloudfront.net/posts/2021/12/11/61b4fb04efd0e41a9cccd520/m_wp_61b4fb0b3a0db9c12a41c8de.webp" alt="Amiri Jeans" className="car-items" />
              <h4 className="item-names">Amiri Jeans</h4>
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </Layout>
  );
}

export default Home;
