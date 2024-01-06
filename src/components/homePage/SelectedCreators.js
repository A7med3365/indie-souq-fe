import React from 'react';

export default function SelectedCreators({ creators }) {
  return (
    <div className="flex gap-5 justify-center">
      {creators.map((creator, i) => {
        return (
          <div className="flex flex-col gap-4 cursor-pointer" key={i}>
            <img
              className="rounded-[59px] w-[270px] h-[304px] object-cover transition ease-in-out delay-150 hover:scale-110 hover:shadow-2xl duration-300"
              src={creator.image}
              alt={creator.name}
            />
            <div className="text-center">
              <p className="font-bold text-2xl text-gray2">{creator.name}</p>
              <p className="font-normal text-base text-gray3">{creator.role}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
