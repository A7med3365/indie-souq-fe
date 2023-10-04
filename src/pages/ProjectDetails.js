import React from 'react';
import GenericLabel1 from '../components/GenericLabel1';
import { Button } from '@nextui-org/react';
import ProgressPar from '../components/ProgressPar';

export default function ProjectDetails() {
  let exampleData = {
    name: 'Mohamed Jassim',
    role: 'Film Producer',
    location: 'Bahrain',
    filmType: 'Short Film',
    genre: 'Drama',
    fundGoal: 5000,
    fundRaised: 4400,
    fundPurpose: 'Cast Cost',
    Deadline: '11 Nov 2023',
    type: 'Fixed Fund',
    rewards: 'Available',
  };
  return (
    <div className="max-w-[1440px] m-auto gap-[55px] mt-5 flex justify-end">
      <div className="flex flex-col w-[405px] gap-[19px]">
        <div className="rounded-[27px] w-full h-[114px] border-[1px] border-[#D9D9D9]">
          <div className="px-[38px] py-[10px] flex justify-between">
            <div className="rounded-full w-[91px] h-[91px] overflow-hidden">
              <img src="./details-profile-pic-example.png" />
            </div>
            <div className="my-auto">
              <div className="text-[#656565] text-[23.718px] font-bold">
                {exampleData.name}
              </div>
              <div className="text-[#A5A5A5] text-[16px] font-medium">
                {exampleData.role + ' | ' + exampleData.location}
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[27px] w-full h-[241px] border-[1px] border-[#D9D9D9]">
          <div className="px-[38px] py-[24px]">
            <div className="flex gap-[75px] mb-[20px]">
              <GenericLabel1 label={'Film Type'} value={exampleData.filmType} />
              <GenericLabel1 label={'Genre'} value={exampleData.genre} />
            </div>
            <div className="text-[#A5A5A5] text-[18px] leading-[22px] font-medium mb-[10px]">
              Donation Progress
            </div>
            <div className="flex justify-between mb-[13px]">
              <div>
                <p className="text-[#656565] text-[18px] leading-[22px] font-light">
                  Raised
                </p>
                <p className="text-[#656565] text-[16px] leading-[19px] font-bold">
                  {'BD ' + exampleData.fundRaised}
                </p>
              </div>
              <div>
                <p className="text-end text-[#656565] text-[18px] leading-[22px] font-light">
                  Goal
                </p>
                <p className="text-[#656565] text-[16px] leading-[19px] font-bold">
                  {'BD ' + exampleData.fundGoal}
                </p>
              </div>
            </div>
            <div className="w-full">
              <ProgressPar
                p={(exampleData.fundRaised / exampleData.fundGoal) * 100}
              />
            </div>
          </div>
        </div>

        <div className="rounded-[27px] w-full h-[433px] border-[1px] border-[#D9D9D9]">
          <div className="px-[38px] py-[24px]">
            <div className="grid grid-cols-2 gap-x-[40px] gap-y-[40px] mb-[39px]">
              <GenericLabel1
                label={'Fund Purpose'}
                value={exampleData.fundPurpose}
              />
              <GenericLabel1 label={'Deadline'} value={exampleData.Deadline} />
              <GenericLabel1 label={'Fund Type'} value={exampleData.type} />
              <GenericLabel1 label={'Rewards'} value={exampleData.rewards} />
            </div>
            <div className="mb-[27px]">
              <div className="text-[18px] text-[#656565] leading-[22px] font-medium flex justify-between">
                <div>Bronze Tier</div>
                <div className="font-semibold">20 BD</div>
              </div>
              <div className="w-full border-[1px] border-orange my-[13px]"></div>
              <div className="text-[18px] text-[#656565] leading-[22px] font-medium flex justify-between">
                <div>Silver Tier</div>
                <div className="font-semibold">100 BD</div>
              </div>
              <div className="w-full border-[1px] border-orange my-[13px]"></div>
              <div className="text-[18px] text-[#656565] leading-[22px] font-medium flex justify-between">
                <div>Golden Tier</div>
                <div className="font-semibold">1000 BD</div>
              </div>
            </div>
            <div className="text-center">
              <Button className="bg-orange" variant="flat">
                <p className="text-white text-xl px-2">View Rewards</p>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
