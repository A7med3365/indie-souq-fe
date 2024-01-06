import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function Carousel({ slides }) {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };
  let nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  useEffect(() => {
    console.log(current);
  }, [current]);

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex w-full transition ease-out duration-1000"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, i) => {
          return <img src={s} alt={`banner ${i}`} />;
        })}
      </div>
      <div className="absolute top-0 w-full h-full flex items-center justify-between px-10">
        <button onClick={previousSlide}>
          <div className="hidden w-10 h-10 rounded-full bg-gray1"></div>
        </button>
        <button onClick={nextSlide}>
          <div className="hidden w-10 h-10 rounded-full bg-gray1"></div>
        </button>
      </div>

      <div className="absolute bottom-0 py-5 flex items-center justify-center gap-5 w-full">
        {slides.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={'selecter' + i}
              className={`h-3 rounded-full ${
                i === current ? 'bg-orange w-[5.5rem]' : 'bg-gray1 w-9'
              }`}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
