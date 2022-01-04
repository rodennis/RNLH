import Layout from "../../components/Layout/Layout";
import Carousel, { CarouselItem } from "../../components/Carousel/Carousel.jsx";

function Home(props) {
  return (
    <Layout user={props.user}>
      <div>
        <Carousel>
          <CarouselItem>Item 1</CarouselItem>
          <CarouselItem>Item 2</CarouselItem>
          <CarouselItem>Item 3</CarouselItem>
        </Carousel>
      </div>
    </Layout>
  );
}

export default Home;
