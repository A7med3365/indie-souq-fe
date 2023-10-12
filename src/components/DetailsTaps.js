import React from "react";
import { Tabs, Tab } from "@nextui-org/react";

import DetailsStoryExample from "./DetailsStoryExample";

export default function DetailsTaps() {
  return (
    <div>
      <Tabs
        variant="underlined"
        aria-label="Project Details Tabs"
        classNames={{
          tabList: "gap-[41px] w-full relative rounded-none p-0 ",
          cursor: "w-full bg-orange h-[7px] rounded-full",
          tab: "max-w-fit px-0 h-12",
          tabContent:
            "group-data-[selected=true]:text-orange text-[24px] leading-[29px] text-[#656565] mb-[21px]",
        }}
      >
        <Tab key="Story" title="Story">
          <DetailsStoryExample />
        </Tab>
        <Tab key="Cast" title="Cast">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </Tab>
        <Tab key="Script" title="Script" />
        <Tab key="Budget" title="Budget" />
        <Tab key="Updates" title="Updates"></Tab>
        <Tab key="Discussion" title="Discussion"></Tab>
      </Tabs>
    </div>
  );
}
