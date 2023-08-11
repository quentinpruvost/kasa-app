import React, { useState } from 'react';

function Slideshow({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="slideshow">
      <div className="slide-container">
        <img src={images[currentSlide]} alt={`Slide ${currentSlide + 1}`} />
      </div>
      <div className="controls">
        <button onClick={prevSlide}>
          <span>&#9664;</span>
        </button>
        <p>{`${currentSlide + 1} / ${images.length}`}</p>
        <button onClick={nextSlide}>
          <span>&#9654;</span>
        </button>
      </div>
    </div>
  );
}

export default Slideshow;
