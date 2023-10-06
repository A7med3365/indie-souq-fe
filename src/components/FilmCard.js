import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FilmCard({ film }) {
  const nav = useNavigate();
  return (
    <div
      onClick={() => {
        nav('/details');
      }}
      className="cursor-pointer"
    >
      <div class="relative w-[638px] h-[405px] overflow-hidden rounded-[59px] shadow-md bg-gray3 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-[100px] text-white text-center object-cover">
        <img
          alt="film cover"
          src={film.img}
          className="object-cover w-[638px] h-[405px]"
        />
        <div class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black opacity-0 transition duration-300 ease-in-out hover:opacity-100">
          <div className="flex flex-col gap-[24px] m-auto mt-[37px] [relative">
            <p className="text-[55.635px] leading-[67px] font-bold text-white text-center w-full">
              {film.name}
            </p>
            <div className="text-center text-[27.817px] leading-[34px]">
              <p className="text-white font-normal">Directed By:</p>
              <p className="text-orange font-bold">{film.by}</p>
            </div>
            <div className="text-center text-[27.817px] leading-[34px] flex flex-col text-center gap-[13.9px]">
              <p className="text-white font-normal">{film.type}</p>
              <div className="flex gap-[13.9px] justify-center">
                {film.genre.map((g) => {
                  return (
                    <div className="px-[45.2px] py-[22.6px] border-[3.48px] border-orange rounded-[55.6px] text-orange">
                      {g}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
