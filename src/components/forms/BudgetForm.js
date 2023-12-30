// @ts-check
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import { CloseCircle } from '../ButtonIcons';
import { toast } from 'react-toastify';
import { TwitterPicker } from 'react-color';
import useRequest from '../../hooks/use-request';

export default function BudgetForm({ setComplete, id, project, refresh }) {
  const [selected, setSelected] = useState(0);
  // const [hovered, setHovered] = useState(undefined);
  const [sections, setSections] = useState(
    project.budget.map(({ name: title, percentage: value, color }) => ({
      title,
      value,
      color,
    })) || [
      { title: 'One', value: 10, color: '#E38627' },
      { title: 'Two', value: 15, color: '#C13C37' },
      { title: 'Three', value: 20, color: '#6A2135' },
      // { title: 'Four', value: 25, color: '#1D4E89' },
      // { title: 'Five', value: 30, color: '#8FB339' },
      // { title: 'Six', value: 35, color: '#D12B5C' },
      // { title: 'Seven', value: 40, color: '#FF9800' },
      // { title: 'Eight', value: 45, color: '#9C27B0' },
      // { title: 'Nine', value: 50, color: '#03A9F4' },
      // { title: 'Ten', value: 55, color: '#8BC34A' },
    ]
  );
  // @ts-ignore
  const { doRequest } = useRequest({
    url: `/api/projects/${id}`,
    method: 'put',
    onSuccess: (res) => {
      refresh();
    },
  });

  // color pool
  const colors = [
    '#E38627',
    '#C13C37',
    '#6A2135',
    '#3498db', // Blue
    '#9b59b6', // Purple
    '#1abc9c', // Teal
    '#e74c3c', // Red
    '#34495e', // Dark Blue
    '#d35400', // Pumpkin
    '#27ae60', // Dark Green
  ];

  const [colorIndex, setColorIndex] = useState(0);

  function getNextColor() {
    const color = colors[colorIndex];
    setColorIndex((colorIndex + 1) % colors.length); // Cycle through colors
    return color;
  }
  const addSection = () => {
    let temp = [...sections];
    temp.push({ title: '', value: 10, color: getNextColor() });
    setSections(temp);
  };

  const removeSection = (index) => {
    let temp = [...sections];
    temp.splice(index, 1);
    setSections(temp);
  };

  // check if the sum of values is exactly 100 or more
  useEffect(() => {
    const sum = sections.reduce((acc, curr) => acc + curr.value, 0);
    console.log({ sum });
    if (sum === 100) {
      toast.success('100% of Budget Complete');
      setComplete((prevComplete) => {
        let temp = [...prevComplete];
        temp[3] = true;
        return temp;
      });
      return;
    } else if (sum > 100) {
      toast.error('went over 100%');
    }
    setComplete((prevComplete) => {
      let temp = [...prevComplete];
      temp[3] = false;
      return temp;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  return (
    <div className="flex flex-col my-24">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Budget distribution
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
      <div className="flex flex-col gap-5">
        <PieChart
          style={{
            fontFamily:
              '"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
            fontSize: '8px',
          }}
          labelPosition={112}
          labelStyle={(index) => ({
            fill: sections[index].color,
            fontSize: '5px',
            fontFamily: 'sans-serif',
          })}
          segmentsShift={(index) => (index === selected ? 5 : 1)}
          animate
          radius={30}
          // lineWidth={90}
          data={sections}
          totalValue={100}
          label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
          segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
          onClick={(_, index) => {
            setSelected(index === selected ? 0 : index);
          }}
          // onMouseOver={(_, index) => {
          //   // @ts-ignore
          //   setHovered(index);
          // }}
          // onMouseOut={() => {
          //   setHovered(undefined);
          // }}
        />

        {sections.map((v, i) => {
          return (
            <div className="flex gap-4 mr-8" key={i}>
              <div
                className="h-full flex flex-col justify-center"
                onClick={(e) => removeSection(i)}
              >
                <CloseCircle />
              </div>
              <div className="flex-grow">
                <label
                  htmlFor="large-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="large-input"
                  value={sections[i].title}
                  onChange={(e) => {
                    setSelected(i);
                    let temp = [...sections];
                    temp[i].title = e.target.value.replace(/[^A-Za-z ]/, '');
                    setSections(temp);
                  }}
                  className="w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="w-[4dvw]">
                <label
                  htmlFor="large-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Percentage
                </label>
                <input
                  type="number"
                  id="large-input"
                  value={sections[i].value}
                  onChange={(e) => {
                    setSelected(i);
                    let temp = [...sections];
                    temp[i].value = Number(e.target.value);
                    setSections(temp);
                  }}
                  className="w-full text-center p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <div className="h-full">
                <Popover
                  placement="bottom-end"
                  classNames={{ base: ['py-0 px-0'] }}
                >
                  <PopoverTrigger>
                    <div
                      className="border shadow-md rounded-full h-10 w-10 mt-8 cursor-pointer"
                      style={{ background: sections[i].color }}
                    ></div>
                  </PopoverTrigger>
                  <PopoverContent>
                    <TwitterPicker
                      triangle="top-right"
                      colors={colors}
                      color={sections[i].color}
                      onChange={(color) => {
                        setSections((prev) => {
                          let temp = [...prev];
                          temp[i].color = color.hex;
                          return temp;
                        });
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
          );
        })}
        <Button
          className="border border-orange bg-[rgb(0,0,0,0)] w-full h-[60px] p-[12.56px] rounded-xl"
          variant="flat"
          onClick={(e) => addSection()}
        >
          <p className="text-orange text-base font-semibold px-2">
            + Add allocation
          </p>
        </Button>
      </div>
      {/* action buttons */}
      <div className="flex gap-5 mx-auto my-11">
        <Button
          className="border border-orange bg-[rgb(0,0,0,0)] w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
          variant="flat"
          onClick={async (e) => {
            const p = doRequest({
              budget: sections.map(
                ({ title: name, value: percentage, color }) => ({
                  name,
                  percentage,
                  color,
                })
              ),
            });
            toast.promise(p, {
              pending: 'Saving...',
              success: 'Saved successfully',
              error: 'Error while saving',
            });
          }}
        >
          <p className="text-orange text-base font-semibold px-2">Save</p>
        </Button>
        <Button
          className="bg-orange w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
          variant="flat"
        >
          <p className="text-white text-base font-semibold px-2">Next</p>
        </Button>
      </div>
    </div>
  );
}
