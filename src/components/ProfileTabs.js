import React from 'react';
import { Tabs, Tab } from '@nextui-org/react';

export default function ProfileTabs() {
  return (
    <div>
      <Tabs
        variant="underlined"
        aria-label="Project Details Tabs"
        classNames={{
          tabList: 'gap-[41px] w-full relative rounded-none p-0 ',
          cursor: 'w-full bg-orange h-[7px] rounded-full',
          tab: 'max-w-fit px-0 h-12',
          tabContent:
            'group-data-[selected=true]:text-orange text-[24px] leading-[29px] text-[#656565] mb-[21px]',
        }}
      >
        <Tab key="Projects" title="Projects">
          <div className="grid grid-cols-3 gap-x-[20px] gap-y-[36px] mt-[36px]">
            {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
              return <div className="h-[200px] bg-gray1 rounded-[54px]"></div>;
            })}
          </div>
        </Tab>
        <Tab key="Network" title="Network">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Tab>
        <Tab key="Feed" title="Feed" />
      </Tabs>
    </div>
  );
}
