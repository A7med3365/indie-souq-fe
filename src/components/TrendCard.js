import React from 'react';

export default function TrendCard({ content }) {
  const percentage = Math.round(77.5 * content.percentage * 0.01) + '%';
  console.log(percentage);
  return (
    <div className="w-[560px] h-[334px] inline-block snap-center rounded-[5rem] overflow-hidden flex relative">
      <img
        src={content.BgImg}
        alt="trending now"
        className="w-[560px] h-[334px] object-cover"
      />
      <div className="absolute top-0 w-full h-full bg-gradient-to-t from-black"></div>
      <div className="absolute px-16 bottom-0 w-full text-white flex">
        {/* the percentage par */}
        <div className="mb-8 h-[12px] rounded w-full bg-white"></div>
        <div
          className={`absolute top-0 mb-8 h-[12px] rounded bg-orange`}
          style={{
            width: percentage,
          }}
        ></div>
      </div>
      <div className="absolute px-16 bottom-0 text-white flex">
        <div className="mb-14 text-lg font-normal self-end">Funds Raised</div>
        <div className="mb-14 px-2 text-4xl font-bold">
          {content.percentage}%
        </div>
      </div>
      <div className="mb-28 absolute w-full px-16 bottom-0 text-white flex justify-between">
        <div className="text-[34px] text-end font-bold ">{content.title}</div>
        <div className="text-lg font-normal self-end pb-2">
          {'By : ' + content.by}
        </div>
      </div>
      <div className="mb-44 absolute w-full px-16 bottom-0 text-white">
        {content.label}
      </div>
    </div>
  );
}
