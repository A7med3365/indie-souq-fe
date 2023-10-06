import React from 'react';
// import Rewards from '../components/Rewards';
// import { Button, useDisclosure } from '@nextui-org/react';

export default function Test() {
  // const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      {/* <Button onPress={onOpen}>Open Modal</Button>
      <Rewards isOpen={isOpen} onOpenChange={onOpenChange} /> */}
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
      <div className="m-auto mt-10 w-[90%] h-[200px] rounded-[5rem] overflow-hidden flex gap-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="m-auto grow h-[90%] bg-[#FF0000] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#725CFF] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#5CCFFF] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#FFD45C] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#F0FF5C] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#5CFF88] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
      </div>
      <div className="mt-10 w-[90%] h-[200px] rounded-[5rem] overflow-hidden flex gap-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="m-auto grow h-[90%] bg-[#F0FF5C] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#FFD45C] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#5CFF88] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#725CFF] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#FF0000] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#5CCFFF] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
      </div>
      <div className="m-auto mt-10 w-[90%] h-[200px] rounded-[5rem] overflow-hidden flex gap-5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
        <div className="m-auto grow h-[90%] bg-[#5CCFFF] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#FF0000] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#5CFF88] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#F0FF5C] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#725CFF] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
        <div className="m-auto grow h-[90%] bg-[#FFD45C] rounded-[5rem] overflow-hidden flex transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-[1.15] duration-300"></div>
      </div>
    </div>
  );
}
