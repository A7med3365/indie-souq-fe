import React from 'react';
import Rewards from '../components/Rewards';
import { Button, useDisclosure } from '@nextui-org/react';

export default function () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <Button onPress={onOpen}>Open Modal</Button>
      <Rewards isOpen={isOpen} onOpenChange={onOpenChange} />
      {/* <div class="flex flex-col bg-white m-auto p-auto w-[750px] relative">
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap gap-[20px] lg:ml-40 md:ml-20 ml-10 ">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((s) => {
              return (
                <div key={s} class="inline-block">
                  <div class="w-[158px] h-[118px] max-w-xs overflow-hidden rounded-[25px] shadow-md bg-gray1 hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="h-full w-[158px] absolute right-0 bg-gradient-to-l from-white"></div>
      </div> */}
    </div>
  );
}
