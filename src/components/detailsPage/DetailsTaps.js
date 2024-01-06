import React from 'react';
import { Tabs, Tab } from '@nextui-org/react';
import { PieChart } from 'react-minimal-pie-chart';

// import DetailsStoryExample from "./DetailsStoryExample";

export default function DetailsTaps({ story, budget }) {
  return (
    <div>
      <Tabs
        variant="underlined"
        aria-label="Project Details Tabs"
        disabledKeys={['Cast', 'Script', 'Updates', 'Discussion']}
        classNames={{
          tabList: 'gap-[41px] w-full relative rounded-none p-0 ',
          cursor: 'w-full bg-orange h-[7px] rounded-full',
          tab: 'max-w-fit px-0 h-12',
          tabContent:
            'group-data-[selected=true]:text-orange text-[24px] leading-[29px] text-[#656565] mb-[21px]',
        }}
      >
        <Tab key="Story" title="Story">
          {/* <DetailsStoryExample /> */}
          <div className="text-[24px] leading-[29px] text-[#656565] font-normal mt-5">
            {story ? story : 'No Story'}
          </div>
        </Tab>
        <Tab key="Cast" title="Cast"></Tab>
        <Tab key="Script" title="Script" />
        <Tab key="Budget" title="Budget">
          {budget ? (
            <>
              <div className="flex gap-2">
                {budget.map(({ name, color }) => {
                  const style = `inline-flex items-center rounded-xl bg-[${color}] px-4 py-2 text-lg font-medium text-[${color}] ring-4 ring-inset ring-[${color}]/10`;
                  return <span className={style}>{name}</span>;
                })}
              </div>
              <PieChart
                style={{
                  fontFamily:
                    '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
                  fontSize: '8px',
                }}
                labelPosition={112}
                labelStyle={(index) => ({
                  fill: budget[index].color,
                  fontSize: '5px',
                  fontFamily: 'sans-serif',
                })}
                // segmentsShift={(index) => (index === selected ? 5 : 1)}
                animate
                radius={30}
                // lineWidth={90}
                data={budget.map(
                  ({ name: title, percentage: value, color }) => ({
                    title,
                    value,
                    color,
                  })
                )}
                totalValue={100}
                label={({ dataEntry }) =>
                  Math.round(dataEntry.percentage) + '%'
                }
                segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
                // onClick={(_, index) => {
                //   setSelected(index === selected ? 0 : index);
                // }}
                // onMouseOver={(_, index) => {
                //   // @ts-ignore
                //   setHovered(index);
                // }}
                // onMouseOut={() => {
                //   setHovered(undefined);
                // }}
              />
            </>
          ) : (
            'budget not finished yet'
          )}
        </Tab>
        <Tab key="Updates" title="Updates"></Tab>
        <Tab key="Discussion" title="Discussion"></Tab>
      </Tabs>
    </div>
  );
}
