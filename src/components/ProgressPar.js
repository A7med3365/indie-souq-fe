import React from 'react';

export default function ProgressPar({ p }) {
  return (
    <div className="w-[329px] relative">
      <div className="absolute h-[32px] w-[329px] bg-[#EFEFEF] rounded-[4px]"></div>
      <div
        className="absolute top-0 h-[32px] bg-orange rounded-[4px]"
        style={{
          width: Math.round(p * 0.01 * 329),
        }}
      ></div>
      <div className="text-[18px] leading-[22px] text-white font-medium flex justify-center py-1 justify-items-center absolute w-full h-full">
        {p + '%'}
      </div>
    </div>
  );
}
