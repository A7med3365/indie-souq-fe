import React from 'react';

export default function TrendCard({ BgImg }) {
  return (
    <div className="rounded-[5rem] overflow-hidden transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
      <img src={BgImg} alt="trending now" />
    </div>
  );
}
