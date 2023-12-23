import React, { useState } from 'react';
import MyDatePicker from '../common/MyDatePicker';
import { formatDate } from '../../util/dates';

export default function FundingForm() {
  const [selected, setSelected] = useState(new Date());
  const [goal, setGoal] = useState();
  const [stage, setStage] = useState();

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
        <MyDatePicker
          className={'flex-grow'}
          label="Campaign end date"
          value={formatDate(selected)}
          selected={selected}
          onSelect={setSelected}
        />
      </div>
    </div>
  );
}
