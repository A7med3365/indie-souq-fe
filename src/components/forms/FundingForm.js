import { Input } from '@nextui-org/react';
import React from 'react';

export default function FundingForm() {
  
  return (
    <div className="flex flex-col gap-14 my-24">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Funding details
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
      <div className="flex flex-col gap-5">
        <Input
          type="number"
          label="Funding Goal"
          size="lg"
          placeholder="Enter the required fund"
        />
        <Input
          type="text"
          label="Project Stage"
          size="lg"
          placeholder="Enter the current stage of the project e.g. 'development'"
        />
      </div>
    </div>
  );
}
