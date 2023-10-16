import { Button } from '@nextui-org/react';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function HeroSection({ slides }) {
  let [current, setCurrent] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (current === slides.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
      console.log(current);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [current]);
  return (
    <div class="flex overflow-hidden pb-10 hide-scroll-bar w-[1440px] h-[622px] relative">
      <div
        class="flex flex-nowrap transition ease-out duration-1000"
        style={{
          transform: `translateX(-${(current / slides.length) * 100}%)`,
        }}
      >
        {slides.map((slide) => {
          return (
            <div className="w-[1440px] h-[622px] relative">
              <img
                className="w-[1440px] h-[622px] left-0 top-0 absolute"
                alt="hero banner"
                src={slide.image}
              />
              <div className="w-[1440px] h-[622px] left-0 top-0 absolute bg-gradient-to-r from-black" />
              <div className="left-[108px] top-[137px] absolute flex flex-col gap-[16px]">
                <div className="w-[694px] text-white text-[56px] font-bold leading-">
                  {slide.content.title}
                </div>
                <div className="text-orange text-2xl font-medium">
                  {slide.content.subtitle}
                </div>
                <div className="w-[570px] text-white text-xl font-normal">
                  {slide.content.description}
                </div>
                <div className="flex gap-2">
                  {slide.content.tags.map((tag) => {
                    return (
                      <div className="my-[16px] px-[26px] py-2 rounded-[78px] border border-white text-center text-white text-base font-light">
                        {tag}
                      </div>
                    );
                  })}
                </div>
                <Button className="w-[183px] h-[49px] rounded-[11px] border border-orange bg-[rgb(0,0,0,0)] text-white text-xl font-bold">
                  Invest Now
                </Button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="left-[603px] top-[564px] absolute justify-start items-start gap-2.5 inline-flex">
        {slides.map((_, i) => {
          return (
            <div
              className={`h-2.5 rounded-[5px] cursor-pointer ${
                i === current ? 'bg-orange w-[69px]' : 'bg-white w-[31px]'
              }`}
              onClick={() => {
                setCurrent(i);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
