import React from 'react';
import { Modal, ModalContent, ModalBody } from '@nextui-org/react';

export default function MyModal({ isOpen, onOpenChange, children }) {
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
                <div className="flex justify-center my-auto mx-4">
                  {children}
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
}
