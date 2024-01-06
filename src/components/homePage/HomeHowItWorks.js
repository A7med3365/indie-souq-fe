import React from 'react';
import { Icon1, Icon2, Icon3, Icon4 } from '../assets/HomeIcons';

export default function HomeHowItWorks() {
  let HowItWorks = [
    {
      title: 'Explore the latest features',
      subtitle: 'Discover the freshest films in development, all in one place',
      figure: <Icon1 />,
    },
    {
      title: 'Learn more about the feature’s',
      subtitle: "Dive deeper into the feature's details and backstory",
      figure: <Icon2 />,
    },
    {
      title: 'Engage with Film Community',
      subtitle:
        "Connect, share, and engage in a thriving film lover's community.",
      figure: <Icon3 />,
    },
    {
      title: 'Make a dream happen!',
      subtitle: 'Support filmmakers and reap exclusive rewards!',
      figure: <Icon4 />,
    },
  ];
  return (
    <div className="grid grid-cols-2 gap-[32px] h-[530px] max-w-[1140px] m-auto">
      {HowItWorks.map((card, i) => {
        return (
          <div
            className="bg-[#F6F6F6] rounded-[27px] flex gap-[37px] justify-center items-center"
            key={i}
          >
            <div className="w-[164px]">{card.figure}</div>
            <div className="flex flex-col justify-start items-start gap-[17.49px]">
              <div className="w-[259.40px] text-[#353535] text-2xl font-semibold">
                {card.title}
              </div>
              <div className="w-[260.37px] text-[#A1A1A1] text-base font-normal">
                {card.subtitle}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
