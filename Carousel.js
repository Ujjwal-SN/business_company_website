import React, { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80',
];

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-12">
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 z-10 shadow"
        onClick={prevSlide}
        aria-label="Previous Slide"
      >
        &#8592;
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 z-10 shadow"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        &#8594;
      </button>
      {images.map((img, idx) => (
        <div
          className={`transition-opacity duration-700 ease-in-out ${idx === current ? 'opacity-100' : 'opacity-0'} absolute inset-0 flex items-center justify-center`}
          key={idx}
          style={{ height: 320 }}
        >
          {idx === current && (
            <img
              src={img}
              alt={`slide ${idx}`}
              className="rounded-xl shadow-lg object-cover w-full h-80"
            />
          )}
        </div>
      ))}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-3 h-3 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-300'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
