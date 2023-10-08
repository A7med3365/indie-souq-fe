import React from 'react';
import { Modal, ModalContent, ModalBody } from '@nextui-org/react';

export default function Rewards({ isOpen, onOpenChange }) {
  return (
    <div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        size="full"
        classNames={{
          body: 'py-6',
          // backdrop: "bg-[#292f46]/50 backdrop-opacity-40",
          base: 'bg-[rgb(0,0,0,0)] shadow-none text-white w-[1440px]',
          // header: "border-b-[1px] border-[#292f46]",
          // footer: "border-t-[1px] border-[#292f46]",
          closeButton:
            'hover:bg-[#ff0000]/50 text-white text-5xl active:bg-white/10',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <div className="flex justify-between my-auto mx-4">
                  {[
                    [
                      'w-[350px] h-[650px] border-[10px] border-[#805400] rounded-[59px] absolute opacity-0 transition hover:scale-x-[1.15] hover:scale-y-[1.08] hover:opacity-100',
                      'w-[350px] h-[650px] border-[10px] border-[#CFCFCF] rounded-[59px] absolute opacity-0 transition hover:scale-x-[1.15] hover:scale-y-[1.08] hover:opacity-100',
                      'w-[350px] h-[650px] border-[10px] border-[#FfA200] rounded-[59px] absolute opacity-0 transition hover:scale-x-[1.15] hover:scale-y-[1.08] hover:opacity-100',
                    ].map((style) => {
                      return (
                        <div className="w-[350px] h-[650px] relative">
                          <div className="w-[350px] h-[650px] bg-white rounded-[59px] absolute"></div>
                          <div className={style}></div>
                        </div>
                      );
                    }),
                  ]}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
