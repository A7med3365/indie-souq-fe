import React from 'react';
import { Button } from '@nextui-org/react';

export default function ProfileInformation() {
  return (
    <div>
      <div className="flex justify-between gap-[94px] mb-[23px]">
        <div className="grow">
          <p className="text-[32px] leading[39px] font-bold text-black mb-[16px]">
            FirstName LastName
          </p>
          <p className="text-[24px] leading[29px] font-medium text-[#BFBFBF] mb-[23px]">
            Film Maker | Bahrain
          </p>
          <p className="text-[24px] leading-[29px] font-normal text-black ">
            Lorem ipsum dolor sit amet consectetur. Nisi fringilla scelerisque
            sem etiam fusce sed lectus scelerisque consectetur Dictum sagittis
            interdum onsectetur.
          </p>
        </div>
        <div className="w-[438px]">
          <div className="mb-[69px] justify-center flex gap-[38px]">
            <div>
              <p className="text-center font-bold text-[32px] leading-[39px] ">
                00
              </p>
              <p className="text-center font-normal text-[16px] leading-[19px]">
                Projects
              </p>
            </div>
            <div>
              <p className="text-center font-bold text-[32px] leading-[39px] ">
                00
              </p>
              <p className="text-center font-normal text-[16px] leading-[19px]">
                Supporters
              </p>
            </div>
            <div>
              <p className="text-center font-bold text-[32px] leading-[39px] ">
                00
              </p>
              <p className="text-center font-normal text-[16px] leading-[19px]">
                Profile Views
              </p>
            </div>
          </div>
          <div className="flex gap-[32px] justify-center">
            <Button className="w-[203px] py-[13px] px-[30px] rounded-[23px] bg-orange text-white font-bold text-[24px] leading-[29px] cursor-pointer">
              Follow
            </Button>
            <Button className="w-[203px] py-[13px] px-[30px] rounded-[23px] bg-white text-orange font-bold text-[24px] leading-[29px] cursor-pointer border-[2px] border-orange">
              Message
            </Button>
          </div>
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
