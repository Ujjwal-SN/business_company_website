import React, { useState, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const TestimonialCarousel = ({ testimonials }) => {
  const nodeRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(testimonials) || testimonials.length === 0) {
    return null;
  }

  return (
    <div className="relative w-full max-w-2xl mx-auto mb-12">
      <div style={{ minHeight: 320 }} className="flex items-center justify-center overflow-hidden">
        <TransitionGroup component={null}>
          <CSSTransition
            key={current}
            nodeRef={nodeRef}
            timeout={600}
            classNames="testimonial-fade"
          >
            <div
              ref={nodeRef}
              style={{ minHeight: 320 }}
              className="w-full flex items-center justify-center"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg max-w-xl mx-auto text-center">
                <div className="flex justify-center mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic">{testimonials[current].text}</p>
                <div className="flex items-center justify-center">
                  <div className={`w-12 h-12 ${testimonials[current].avatarBg} rounded-full flex items-center justify-center mr-4`}>
                    <span className="text-white font-bold">{testimonials[current].initials}</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-900">{testimonials[current].name}</p>
                    <p className="text-gray-600 text-sm">{testimonials[current].role}</p>
                  </div>
                </div>
              </div>
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
<div className="flex flex-col items-center mt-8">
        <div className="flex gap-2 mb-4">
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`block w-3 h-3 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-300'}`}
            ></span>
          ))}
        </div>
        <div className="flex gap-6">
          <button
            className="bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow"
            onClick={prevSlide}
            aria-label="Previous Slide"
          >
            &#8592;
          </button>
          <button
            className="bg-white/70 hover:bg-white text-gray-800 rounded-full p-2 shadow"
            onClick={nextSlide}
            aria-label="Next Slide"
          >
            &#8594;
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
