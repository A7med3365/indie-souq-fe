import React from 'react';
import GenericLabel1 from '../components/GenericLabel1';
import { Button, useDisclosure } from '@nextui-org/react';
import ProgressPar from '../components/ProgressPar';
import Rewards from './Rewards';
import { capitalize } from '../util/str';

export default function DetailsCards({
  name,
  role,
  location,
  filmType,
  genre,
  fundGoal,
  fundRaised,
  Deadline,
  avatar,
  stage
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <div className="flex flex-col w-[405px] gap-[19px]">
        <div className="rounded-[27px] w-full h-[164px] border-[1px] border-[#D9D9D9]">
          <div className="px-[38px] py-[25px] flex justify-between">
            <div className="rounded-full w-[116.5px] h-[116.5px] overflow-hidden">
              <img
                alt="profile pic"
                src={avatar}
                className="w-[116.5px] h-[116.5px] object-cover"
              />
            </div>
            <div className="my-auto flex flex-col gap-[10px]">
              <div>
                <div className="text-[#656565] text-[24px] font-bold">
                  {name}
                </div>
                <div className="text-[#A5A5A5] text-[16px] font-medium">
                  {role + ' | ' + location}
                </div>
              </div>
              <div className="flex justify-between">
                <Button className="w-[88.2px] h-[39px] bg-orange text-white text-[14px] font-medium">
                  Follow
                </Button>
                <Button className="w-[88.2px] h-[39px] bg-white border-[1px] border-orange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_769_1933)">
                      <path
                        d="M7.69971 15.9727H10.041"
                        stroke="#F15A2B"
                        stroke-width="1.17067"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.553 7.19196C13.553 5.95003 13.0597 4.75898 12.1815 3.8808C11.3033 3.00263 10.1123 2.50928 8.87032 2.50928C7.6284 2.50928 6.43734 3.00263 5.55917 3.8808C4.681 4.75898 4.18765 5.95003 4.18765 7.19196V11.2893C4.18765 11.755 4.00263 12.2017 3.67332 12.531C3.34401 12.8603 2.89736 13.0453 2.43164 13.0453H15.309C14.8433 13.0453 14.3966 12.8603 14.0673 12.531C13.738 12.2017 13.553 11.755 13.553 11.2893V7.19196Z"
                        stroke="#F15A2B"
                        stroke-width="1.17067"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.26123 7.04003C1.26186 5.92572 1.5276 4.82755 2.03649 3.83622C2.54539 2.8449 3.28283 1.98888 4.1879 1.33887"
                        stroke="#F15A2B"
                        stroke-width="1.17067"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.4797 7.04003C16.4791 5.92572 16.2133 4.82755 15.7044 3.83622C15.1955 2.8449 14.458 1.98888 13.553 1.33887"
                        stroke="#F15A2B"
                        stroke-width="1.17067"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_769_1933">
                        <rect
                          width="16.3894"
                          height="16.3894"
                          fill="white"
                          transform="translate(0.676758 0.461914)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[27px] w-full h-[432px] border-[1px] border-[#D9D9D9]">
          <div className="px-[38px] py-[57px]">
            <div className="grid grid-cols-2 gap-x-[37px] gap-y-[46px] mb-[46px]">
              <GenericLabel1 label={'Film Type'} value={filmType} />
              <GenericLabel1 label={'Genre'} value={genre} />
              <GenericLabel1 label={'Project stage'} value={capitalize(stage)} />
              <GenericLabel1 label={'End of campaign'} value={Deadline} />
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
                  {'BD ' + fundRaised}
                </p>
              </div>
              <div>
                <p className="text-end text-[#656565] text-[18px] leading-[22px] font-light">
                  Goal
                </p>
                <p className="text-[#656565] text-[16px] leading-[19px] font-bold">
                  {'BD ' + fundGoal}
                </p>
              </div>
            </div>
            <div className="w-full">
              <ProgressPar p={(fundRaised / fundGoal) * 100} />
            </div>
          </div>
        </div>

        <div className="rounded-[27px] w-full h-[362px] border-[1px] border-[#D9D9D9]">
          <div className="px-[50px] py-[38px]">
            <div className="text-stone-500 text-2xl font-bold mb-[39px]">
              Rewards tiers
            </div>
            <div className="mb-[27px]">
              <div className="text-[18px] text-[#656565] leading-[22px] font-medium flex justify-between">
                <div>Movie buff</div>
                <div className="font-semibold">20 BD</div>
              </div>
              <div className="w-full border-[1px] border-orange my-[19px]"></div>
              <div className="text-[18px] text-[#656565] leading-[22px] font-medium flex justify-between">
                <div>Film fanatic</div>
                <div className="font-semibold">100 BD</div>
              </div>
              <div className="w-full border-[1px] border-orange my-[19px]"></div>
              <div className="text-[18px] text-[#656565] leading-[22px] font-medium flex justify-between">
                <div>A-lister</div>
                <div className="font-semibold">1000 BD</div>
              </div>
            </div>
            <div className="text-center">
              <Button className="bg-orange" onPress={onOpen} variant="flat">
                <p className="text-white text-xl px-2">View Rewards</p>
              </Button>
              <Rewards isOpen={isOpen} onOpenChange={onOpenChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
