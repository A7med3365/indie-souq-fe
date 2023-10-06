import React from 'react';

export default function DetailsPreview({ images }) {
  return (
    <div className="w-full relative flex flex-col gap-[42px]">
      <img
        className="rounded-[54px] w-[1000px]"
        alt="previewed"
        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
      />
      <div class="flex flex-col bg-white w-full relative">
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap gap-[20px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((s) => {
              return (
                <div key={s} class="inline-block">
                  <div class="w-[158px] h-[118px] max-w-xs overflow-hidden rounded-[25px] shadow-md bg-gray1 hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-full w-[158px] absolute right-0 bg-gradient-to-l from-white"></div>
      </div>
    </div>
  );
}
