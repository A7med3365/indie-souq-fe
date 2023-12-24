import React, { useEffect, useState } from 'react';
import MyDatePicker from '../common/MyDatePicker';
import { createDateFromString, formatDate } from '../../util/dates';
import useRequest from '../../hooks/use-request';
import { toast } from 'react-toastify';
import { Button } from '@nextui-org/react';

export default function FundingForm({setComplete, id, project}) {
  const [selected, setSelected] = useState(createDateFromString(project.details.endOfCampaign) || new Date());
  const [goal, setGoal] = useState(project.details.goal || 0);
  const [stage, setStage] = useState(project.details.stage || '');
  const { doRequest } = useRequest({
    url: `/api/projects/${id}`,
    method: 'put',
  });

  useEffect(() => {
    if (goal > 0 && stage.length > 0) {
      setComplete((prev) => {
        let temp = [...prev];
        temp[2] = true;
        return temp;
      });
    } else {
      setComplete((prev) => {
        let temp = [...prev];
        temp[2] = false;
        return temp;
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [goal, stage]);

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
      {/* action buttons */}
      <div className="flex gap-5 mx-auto mb-11">
        <Button
          className="border border-orange bg-[rgb(0,0,0,0)] w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
          variant="flat"
          onClick={async (e) => {
            const p = doRequest({
              details: {
                ...project.details,
                goal: goal,
                stage: stage,
                endOfCampaign: formatDate(selected),
              },
            });
            toast.promise(p, {
              pending: 'Saving...',
              success: 'Saved successfully',
              error: 'Error while saving',
            });
          }}
        >
          <p className="text-orange text-base font-semibold px-2">Save</p>
        </Button>
        <Button
          className="bg-orange w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
          variant="flat"
        >
          <p className="text-white text-base font-semibold px-2">Next</p>
        </Button>
      </div>
    </div>
  );
}
