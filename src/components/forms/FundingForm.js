import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
// import 'react-day-picker/dist/style.css';

export default function FundingForm() {
  const [selected, setSelected] = useState(new Date());
  const disabledDays = [{ from: new Date(2000, 1, 1), to: new Date() }];
  const [goal, setGoal] = useState();
  const [stage, setStage] = useState();

  function formatDate(date) {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based in JavaScript
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  return (
    <div className="flex flex-col gap-14 my-24">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Funding details
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex-grow">
          <label
            htmlFor="large-input1"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Funding Goal
          </label>
          <input
            type="text"
            id="large-input1"
            placeholder="Enter the required fund"
            value={goal}
            onChange={(e) => {
              const newValue = Number(e.target.value);
              if (isNaN(newValue)) return;
              setGoal(newValue);
            }}
            className="w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex-grow">
          <label
            htmlFor="large-input2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Project Stage
          </label>
          <input
            type="text"
            id="large-input2"
            placeholder="Enter the current stage of the project e.g. 'development'"
            value={stage}
            onChange={(e) => setStage(e.target.value.replace(/[^A-Za-z]/, ''))}
            maxLength={15}
            className="w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div className="flex-grow">
          <label
            htmlFor="large-input2"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Campaign end date
          </label>
          <Popover placement="bottom" showArrow={true}>
            <PopoverTrigger>
              <input
                type="text"
                id="large-input2"
                placeholder="dd-mm-yyyy"
                value={formatDate(selected)}
                className="w-full text-left p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
              />
            </PopoverTrigger>
            <PopoverContent>
              <DayPicker
                mode="single"
                selected={selected}
                onSelect={setSelected}
                disabled={disabledDays}
                // styles={{  }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  );
}
