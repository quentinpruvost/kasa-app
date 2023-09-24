import React, { useState } from 'react';
import './slideshow.css';

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
        <button className="arrows left-arrows" onClick={prevSlide}>
          <img src="https://zupimages.net/up/23/32/tmfv.png" alt="Left arrows" />
        </button>
        <button className="arrows right-arrows" onClick={nextSlide}>
          <img src="https://zupimages.net/up/23/32/a1ft.png" alt="Right arrows" />
        </button>
      </div>
      <div className="controls">
        <p>{`${currentSlide + 1} / ${images.length}`}</p>
      </div>
    </div>
  );
}

export default Slideshow;
