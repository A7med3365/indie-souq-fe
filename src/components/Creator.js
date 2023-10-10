import React from 'react';

export default function Creator({ creator, onClick }) {
  return (
    <div className="flex flex-col gap-4 cursor-pointer" onClick={onClick}>
      <img
        className="rounded-[59px] w-[270px] h-[304px] object-cover"
        src={creator.image}
        alt={creator.name}
      />
      <div className="text-center">
        <p className="font-bold text-[24px] leading-[29px] text-gray2">
          {creator.name}
        </p>
        <p className="font-normal text-[16px] leading-[19px] text-gray3">
          {creator.role}
        </p>
      </div>
    </div>
  );
}
