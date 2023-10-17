import React from 'react';
import { useState } from 'react';

export default function ScrollButton() {
  const [visible, setVisible] = useState(false);
  const [bounce, setBounce] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleMouseEnter = () => {
    setBounce(true);
  };

  const handleMouseLeave = () => {
    setBounce(false);
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <div
      className={`fixed bottom-14 right-20 cursor-pointer opacity-50 hover:opacity-100 duration-300 ${
        visible
          ? 'transform translate-y-0 transition-transform ease-in-out duration-300'
          : 'transform translate-y-[200%] transition-transform ease-in-out duration-300'
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-[99px] h-[119.21px]" onClick={scrollToTop}>
        <div
          className={`px-[25.54px] py-[34.05px] bg-orange rounded-full flex justify-center items-center ${
            bounce ? 'animate-bounce' : ''
          }  duration-1000`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="47"
            height="28"
            viewBox="0 0 47 28"
            fill="none"
          >
            <path
              d="M4.34412 23.2107L23.5 4.05484L42.6558 23.2107"
              stroke="white"
              stroke-width="7.90558"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="text-orange text-lg font-bold">Back to Top</div>
      </div>
    </div>
  );
}
