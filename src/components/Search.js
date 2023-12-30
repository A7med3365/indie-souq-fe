import React from 'react';
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from '@nextui-org/react';

export default function Search({setSearch}) {
  return (
    <div className="w-[793px] h-[172px] flex flex-col justify-between">
      <input
        type="search"
        label="Search"
        placeholder="Search"
        onChange={(e) => setSearch(e.target.value)}
        className="border-[1px] border-[#8B8B8B] rounded-[12px] h-[89px] text-center text-[#4B4B4B] font-medium text-[32px] leading-[39px] placeholder:italic placeholder:text-[#C0C0C0] focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 transition ease-in-out delay-150 shadow-lg focus:shadow-2xl duration-300"
      />
      <div className="flex justify-between">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="border-[1px] border-[#8B8B8B] rounded-[12px] h-[59px] flex gap-[44px] p-[10px] w-[207px]"
            >
              <p className="text-[#8B8B8B] text-[32px] leading-[39px] font-medium">
                Genre
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
              >
                <path
                  d="M8.75665 10.0067L0.707107 1.95711C0.077142 1.32714 0.523309 0.25 1.41421 0.25H16.7467C17.6137 0.25 18.0699 1.27799 17.4882 1.92091L10.2053 9.97046C9.8216 10.3945 9.16105 10.411 8.75665 10.0067Z"
                  fill="#8B8B8B"
                />
              </svg>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions">
            <DropdownItem key="new">Option 1</DropdownItem>
            <DropdownItem key="copy">Option 2</DropdownItem>
            <DropdownItem key="edit">Option 3</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="border-[1px] border-[#8B8B8B] rounded-[12px] h-[59px] flex gap-[44px] p-[10px] w-[265px]"
            >
              <p className="text-[#8B8B8B] text-[32px] leading-[39px] font-medium">
                Film Type
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
              >
                <path
                  d="M8.75665 10.0067L0.707107 1.95711C0.077142 1.32714 0.523309 0.25 1.41421 0.25H16.7467C17.6137 0.25 18.0699 1.27799 17.4882 1.92091L10.2053 9.97046C9.8216 10.3945 9.16105 10.411 8.75665 10.0067Z"
                  fill="#8B8B8B"
                />
              </svg>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" className="w-[250px]">
            <DropdownItem key="new">Option 1</DropdownItem>
            <DropdownItem key="copy">Option 2</DropdownItem>
            <DropdownItem key="edit">Option 3</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="border-[1px] border-[#8B8B8B] rounded-[12px] h-[59px] flex gap-[44px] p-[10px] w-[275px]"
            >
              <p className="text-[#8B8B8B] text-[32px] leading-[39px] font-medium">
                Language
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
              >
                <path
                  d="M8.75665 10.0067L0.707107 1.95711C0.077142 1.32714 0.523309 0.25 1.41421 0.25H16.7467C17.6137 0.25 18.0699 1.27799 17.4882 1.92091L10.2053 9.97046C9.8216 10.3945 9.16105 10.411 8.75665 10.0067Z"
                  fill="#8B8B8B"
                />
              </svg>
            </Button>
          </DropdownTrigger>
          <DropdownMenu aria-label="Static Actions" className="w-[260px]">
            <DropdownItem key="new">Option 1</DropdownItem>
            <DropdownItem key="copy">Option 2</DropdownItem>
            <DropdownItem key="edit">Option 3</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
}
