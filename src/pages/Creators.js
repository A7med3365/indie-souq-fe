import React from 'react';
import Search from '../components/Search';
import Creator from '../components/Creator';
import { useNavigate } from 'react-router-dom';

export default function Creators() {
  const navigate = useNavigate();
  let creators = [
    {
      name: 'Oliver Anderson',
      role: 'Film Maker',
      image: './oliver.png',
    },
    {
      name: 'Ethan Mitchell',
      role: 'Director',
      image: './ethan.png',
    },
    {
      name: 'Benjamin Parker',
      role: 'Film Producer',
      image: './ben.png',
    },
    {
      name: 'Noah Walker',
      role: 'Screen Writer',
      image: './noah.png',
    },
    {
      name: 'Oliver Anderson',
      role: 'Film Maker',
      image: './oliver.png',
    },
    {
      name: 'Ethan Mitchell',
      role: 'Director',
      image: './ethan.png',
    },
    {
      name: 'Benjamin Parker',
      role: 'Film Producer',
      image: './ben.png',
    },
    {
      name: 'Noah Walker',
      role: 'Screen Writer',
      image: './noah.png',
    },
    {
      name: 'Oliver Anderson',
      role: 'Film Maker',
      image: './oliver.png',
    },
    {
      name: 'Ethan Mitchell',
      role: 'Director',
      image: './ethan.png',
    },
    {
      name: 'Benjamin Parker',
      role: 'Film Producer',
      image: './ben.png',
    },
    {
      name: 'Noah Walker',
      role: 'Screen Writer',
      image: './noah.png',
    },
    {
      name: 'Oliver Anderson',
      role: 'Film Maker',
      image: './oliver.png',
    },
    {
      name: 'Ethan Mitchell',
      role: 'Director',
      image: './ethan.png',
    },
    {
      name: 'Benjamin Parker',
      role: 'Film Producer',
      image: './ben.png',
    },
    {
      name: 'Noah Walker',
      role: 'Screen Writer',
      image: './noah.png',
    },
  ];
  return (
    <div>
      <div className="flex justify-center my-[88px]">
        <Search />
      </div>
      <div className="grid grid-cols-4 gap-x-[20px] gap-y-[36px] max-w-[1140px] m-auto pb-[70px]">
        {creators.map((creator) => {
          return (
            <Creator
              creator={creator}
              onClick={() => {
                navigate('/profile');
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
