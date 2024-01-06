import React from 'react';

export default function GenericLabel1({ label, value }) {
  return (
    <div>
      <div className="text-[#A5A5A5] text-[18px] leading-[22px] font-medium mb-[3px]">
        {label}
      </div>
      <div className="text-[#656565] text-[20px] leading-[29px] font-semibold">
        {value}
      </div>
    </div>
  );
}
