import React, { useState } from "react";

import "./Carousel.css";

export const CarouselItem = ({ children, width }) => {
  return (
    <div className="carousel-item" style={{ width: width }}>
      {children}
    </div>
  );
};

const Carousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = React.Children.count(children) - 1;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = 0;
    }

    setActiveIndex(newIndex);
  };

  return (
    <div>
      <div className="carousel">
        <div
          className="inner"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {React.Children.map(children, (child, index) => {
            return React.cloneElement(child, { width: "100%" });
          })}
        </div>
      </div>
      <div className="indicators">
        <button
          className="prev"
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          <img
            src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641308555/play_1_dsgtwy.png"
            alt="arrow"
            width="20px"
          />
        </button>
        <button
          className="next"
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          <img
            src="https://res.cloudinary.com/dojhf40bp/image/upload/v1641308550/play_f6d2ih.png"
            alt="arrow"
            width="20px"
          />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
