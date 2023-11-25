import React from 'react';
import ProjectCreateSteps from '../components/ProjectCreateSteps';
import { Button } from '@nextui-org/react';

export default function Test() {
  const [selected, setSelected] = React.useState(0);
  const [complete, setComplete] = React.useState([
    true,
    true,
    false,
    false,
    false,
  ]);

  const forms = [
    <DetailsForm />,
    <CrewForm />,
    <FundingForm />,
    <BudgetForm />,
    <RewardForm />,
  ];

  return (
    <div className="flex gap-5">
      <div className="w-unit-9xl h-[900px] shadow-[0_0px_23px_0px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-12">
        <ProjectCreateSteps
          selected={selected}
          setSelected={setSelected}
          complete={complete}
        />
        <div className="flex gap-5 mx-auto">
          <Button
            className="bg-orange w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
            variant="flat"
          >
            <p className="text-white text-base font-semibold px-2">
              Save draft
            </p>
          </Button>
          <Button
            className="border border-orange bg-[rgb(0,0,0,0)] w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
            variant="flat"
          >
            <p className="text-orange text-base font-semibold px-2">
              Submit project
            </p>
          </Button>
        </div>
      </div>
      <div className="ml-24 mt-16">{forms[selected]}</div>
    </div>
  );
}

function DetailsForm() {
  return (
    <div className="flex flex-col gap-14">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Project details
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
    </div>
  );
}

function CrewForm() {
  return (
    <div className="flex flex-col gap-14">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Cast & crew
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
    </div>
  );
}

function FundingForm() {
  return (
    <div className="flex flex-col gap-14">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Funding details
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
    </div>
  );
}

function BudgetForm() {
  return (
    <div className="flex flex-col gap-14">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Budget distribution
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
    </div>
  );
}

function RewardForm() {
  return (
    <div className="flex flex-col gap-14">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Reward system
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
    </div>
  );
}
