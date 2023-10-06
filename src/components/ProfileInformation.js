import React from 'react';

export default function ProfileInformation() {
  return (
    <div>
      <div className="flex justify-between gap-[94px] h-[200px] mb-[23px]">
        <div className="h-full grow border-4 border-gray1">name and bio</div>
        <div className="h-full w-[438px] border-4 border-gray1">
          stats and follow, message buttons
        </div>
      </div>
      <div className="flex gap-[8px]">
        {[1, 2, 3, 4].map((n) => {
          return (
            <div className="px-[26px] py-[13px] border-[2px] border-orange rounded-[32px] text-orange text-[16px] leading-[19px] font-medium">{`Tag ${n}`}</div>
          );
        })}
      </div>
    </div>
  );
}
