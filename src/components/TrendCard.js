import React from 'react';

export default function TrendCard({ BgImg }) {
  return (
    <div className="rounded-[5rem] overflow-hidden">
      <img src={BgImg} alt="trending now" />
    </div>
  );
}
