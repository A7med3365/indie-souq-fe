import React from 'react';

export default function HomeSection({ title, onClick }) {
  return (
    <div className="m-auto max-w-[1140px] h-[51px] border-b-[1.5px] border-[#D9D9D9] flex justify-between">
      <div className="text-[#4B4B4B] text-[32px] leading-[39px] font-semibold">
        {title}
      </div>
      <div
        className="text-[#13AAFF] text-[24px] leading-[29px] font-medium underline cursor-pointer"
        onClick={onClick}
      >
        View All
      </div>
    </div>
  );
}
