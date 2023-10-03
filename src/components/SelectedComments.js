import React from 'react';

export default function SelectedComments() {
  let comments = [
    {
      text: "I never thought investing in films could be this easy and rewarding! This platform made it simple to support exciting movie projects, and I've already seen impressive returns on my investments.",
      userName: 'Sarah Johnson',
    },
    {
      text: "As a film enthusiast, I was thrilled to discover this crowdfunding platform. It's not just about investing; it's about being part of the film-making journey. I've backed several projects and can't wait to see them on the big screen!",
      userName: 'David Smith',
    },
    {
      text: "I've been searching for a way to get involved in the film industry for years. This platform gave me the opportunity to support projects I believe in and connect with filmmakers. It's a game-changer for aspiring investors like me.",
      userName: 'Emily Carter',
    },
  ];
  return (
    <div className="flex gap-[34.6px]">
      <div className="bg-[#EFEFEF] rounded-[17px] w-[47px] h-[47px] self-center flex justify-center">
        <svg
          className="m-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="11.5"
          height="23"
          viewBox="0 0 18 28"
          fill="none"
        >
          <path
            d="M14.9978 25.5L3.4978 14L14.9978 2.5"
            stroke="#D2D2D2"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      {comments.map((com, i) => {
        return (
          <div
            className="bg-[#EFEFEF] rounded-[5rem] w-[290px] h-[438px] flex flex-col justify-between px-8 pt-[70px] pb-12"
            key={i}
          >
            <div>
              <img src="./quotes.png" alt="quotes" />
              <div
                className="text-gray1 font-normal text-[18px] leading-[22px] pt-[19px]"
                // style={{ lineHeight: '22px' }}
              >
                {'"' + com.text + '"'}
              </div>
            </div>
            <div>
              <div className="text-gray1 font-bold text-[24px] leading-[29px]">
                {com.userName}
              </div>
              <div className="text-gray1 font-normal text-[16px] leading-[19px]">
                Movie Fan
              </div>
            </div>
          </div>
        );
      })}
      <div className="bg-[#EFEFEF] rounded-[17px] w-[47px] h-[47px] self-center flex justify-center">
        <svg
          className="m-auto"
          xmlns="http://www.w3.org/2000/svg"
          width="11.5"
          height="23"
          viewBox="0 0 18 28"
          fill="none"
        >
          <path
            d="M3.00232 25.5L14.5023 14L3.00232 2.5"
            stroke="#D2D2D2"
            stroke-width="5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
