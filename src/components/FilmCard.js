import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function FilmCard({ film, size }) {
  const nav = useNavigate();
  const styles = {
    lg: {
      container:
        'relative w-[638px] h-[405px] overflow-hidden rounded-[59px] shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out text-[100px] text-white text-center object-cover',
      image: 'object-cover w-[638px] h-[405px]',
      overlay: {
        container:
          'absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black opacity-0 transition duration-300 ease-in-out hover:opacity-100',
        content: 'flex flex-col gap-[24px] m-auto mt-[37px]',
        name: 'text-[55.635px] leading-[67px] font-bold text-white text-center w-full',
        director: 'text-center text-[27.817px] leading-[34px]',
        type: 'text-center text-[27.817px] leading-[34px] flex flex-col text-center gap-[13.9px]',
        genre: {
          container: 'flex gap-[13.9px] justify-center',
          content:
            'px-[45.2px] py-[22.6px] border-[3.48px] border-orange rounded-[55.6px] text-orange',
        },
      },
    },
    md: {
      container:
        'relative w-[380px] h-[241px] overflow-hidden rounded-[59px] shadow-md hover:shadow-2xl transition-shadow duration-300 ease-in-out text-[100px] text-white text-center object-cover',
      image: 'object-cover w-[380px] h-[241px]',
      overlay: {
        container:
          'absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black opacity-0 transition duration-300 ease-in-out hover:opacity-100',
        content: 'flex flex-col gap-[20px] m-auto mt-[26px]',
        name: 'text-[32px] leading-[39px] font-bold text-white text-center w-full',
        director: 'text-center text-[16px] leading-[19px]',
        type: 'text-center text-[16px] leading-[19px] flex flex-col text-center gap-[8px]',
        genre: {
          container: 'flex gap-[8px] justify-center',
          content:
            'px-[26px] py-[13px] border-[2px] border-orange rounded-[32px] text-orange',
        },
      },
    },
  };
  return (
    <div
      onClick={() => {
        nav('/details');
      }}
      className="cursor-pointer"
    >
      <div class={styles[size].container}>
        <img alt="film cover" src={film.img} className={styles[size].image} />
        <div class={styles[size].overlay.container}>
          <div className={styles[size].overlay.content}>
            <p className={styles[size].overlay.name}>{film.name}</p>
            <div className={styles[size].overlay.director}>
              <p className="text-white font-normal">Directed By:</p>
              <p className="text-orange font-bold">{film.by}</p>
            </div>
            <div className={styles[size].overlay.type}>
              <p className="text-white font-normal">{film.type}</p>
              <div className={styles[size].overlay.genre.container}>
                {film.genre.map((g) => {
                  return (
                    <div className={styles[size].overlay.genre.content}>
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
