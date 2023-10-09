import React from 'react';
import { Modal, ModalContent, ModalBody } from '@nextui-org/react';
import { Button } from '@nextui-org/react';

export default function Rewards({ isOpen, onOpenChange }) {
  let rewards = [
    {
      style:
        'w-[350px] h-[650px] border-[10px] border-[#805400] rounded-[59px] absolute opacity-0 transition hover:scale-x-[1.15] hover:scale-y-[1.08] hover:opacity-100 flex flex-col',
      content: {
        title: 'Film Enthusiast',
        subtitle: 'Bronze Funder',
        bulletin: [
          "Early access to the film's digital screening before its official release.",
          'Exclusive behind-the-scenes content, including bloopers and interviews with the cast and crew.',
          "A digital copy of the film's official poster and a thank-you credit in the film's end credits.",
        ],
        fund: 20,
      },
    },
    {
      style:
        'w-[350px] h-[650px] border-[10px] border-[#CFCFCF] rounded-[59px] absolute opacity-0 transition hover:scale-x-[1.15] hover:scale-y-[1.08] hover:opacity-100 flex flex-col',
      content: {
        title: "Producer's Circle",
        subtitle: 'Silver Funder',
        bulletin: [
          'All rewards from the "Film Enthusiast" tier.',
          "A personalized thank-you video message from the film's director or a lead actor.",
          "Invitation to a virtual Q&A session with the filmmakers, where you can ask questions about the film's production.",
          "A limited-edition physical copy of the film's script, signed by the director and select cast members.",
        ],
        fund: 100,
      },
    },
    {
      style:
        'w-[350px] h-[650px] border-[10px] border-[#FfA200] rounded-[59px] absolute opacity-0 transition hover:scale-x-[1.15] hover:scale-y-[1.08] hover:opacity-100 flex flex-col',
      content: {
        title: 'Executive Producer',
        subtitle: 'Golden Funder',
        bulletin: [
          'All rewards from the "Film Enthusiast" and "Producer\'s Circle" tiers.',
          "Exclusive access to a private screening event (virtual or in-person, depending on location and availability) with the film's team, followed by a personalized discussion.",
          'Your name prominently displayed in the film\'s opening credits as an "Executive Producer".',
          'A personalized, framed film poster with your name and title as an "Executive Producer".',
        ],
        fund: 1000,
      },
    },
  ];
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
                    rewards.map((reward) => {
                      return (
                        <div className="w-[350px] h-[650px] relative">
                          <div className="w-[350px] h-[650px] bg-white rounded-[59px] absolute flex flex-col justify-between">
                            <div>
                              <h1 className="text-[30px] leading-[36px] text-[#25282E] font-bold text-center mt-14">
                                {reward.content.title}
                              </h1>
                              <h2 className="text-[17px] leading-[20px] text-[#B7B7B7] font-normal text-center mb-[30px]">
                                {reward.content.subtitle}
                              </h2>
                              <ul className="px-[63px] list-disc list-outside">
                                {reward.content.bulletin.map((point) => {
                                  return (
                                    <li className="text-[14px] leading-[17px] text-[#25282E] font-medium mb-[18px]">
                                      {point}
                                    </li>
                                  );
                                })}
                              </ul>
                            </div>
                            <div className="mb-[26px] m-auto">
                              <h3 className="text-[16px] leading-[19px] text-[#B7B7B7] font-semibold text-center mb-[6px]">
                                Investment Amount
                              </h3>
                              <h1 className="text-[48px] leading-[58px] text-[#25282E] font-bold text-center mb-[16px]">
                                {'BHD ' + reward.content.fund}
                              </h1>
                              <div className="text-center">
                                <Button className="text-orange text-[24px] leading-[29px] bg-[rgb(0,0,0,0)] font-bold border-[1px] border-orange rounded-[11px] w-[155px] h-[55px]">
                                  Fund Now
                                </Button>
                              </div>
                            </div>
                          </div>
                          <div className={reward.style}></div>
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
