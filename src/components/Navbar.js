import React from 'react';
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Spinner,
  useDisclosure,
  Input,
} from '@nextui-org/react';
import NavbarAvatar from './NavbarAvatar';
import MyModal from './MyModal';

export default function Navbar({ userId, isAuth, logout }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Nav maxWidth="2xl" className="px-5 2xl:px-0" isBlurred>
        <NavbarContent justify="start">
          <Link href="/">
            <NavbarBrand>
              <img src="./logo.png" alt="logo" />
            </NavbarBrand>
          </Link>
        </NavbarContent>
        <NavbarContent
          className="hidden sm:flex gap-3 lg:gap-10"
          justify="center"
        >
          <NavbarItem>
            <Link
              className="text-[#D8D8D8] text-base font-semibold p-2.5 hover:text-gray1"
              href="/films"
            >
              Explore films
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-[#D8D8D8] text-base font-semibold p-2.5 hover:text-gray1"
              href="/creators"
            >
              Connect with creators
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-[#D8D8D8] text-base font-semibold p-2.5 hover:text-gray1"
              href="/"
            >
              Learn about IndieSouq
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="flex gap-[8px]">
          <NavbarItem>
            <Button
              as={Link}
              className="bg-orange w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
              href="/"
              variant="flat"
            >
              <p className="text-white text-base font-semibold px-2">
                Support project
              </p>
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              // as={Link}
              className="border border-orange bg-[rgb(0,0,0,0)] w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
              // href="/"
              variant="flat"
              onClick={onOpen}
            >
              <p className="text-orange text-base font-semibold px-2">
                Submit project
              </p>
            </Button>
          </NavbarItem>
          <NavbarItem className="hidden lg:flex">
            {isAuth ? (
              <NavbarAvatar userId={userId} logout={logout} />
            ) : (
              <Link
                className="text-gray1 text-base font-semibold p-[10px]"
                href="/signin"
              >
                login
              </Link>
            )}
          </NavbarItem>
        </NavbarContent>
      </Nav>
      <MyModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <div className=" w-2/4 h-fit p-9 bg-white rounded-2xl flex flex-col gap-5">
          <p className=" text-orange text-lg">Your project Title:</p>
          <Input
            // isDisabled
            variant="bordered"
            size="lg"
            type="text"
            // label="Project Title"
            // labelPlacement=""
            placeholder="Enter Title"
            classNames={{
              inputWrapper: 'text-gray2',
            }}
          />
          <Button
            className="border border-orange bg-[rgb(0,0,0,0)] w-[163px] h-[44.13px] p-[12.56px] rounded-xl mx-auto mt-4"
            variant="flat"
            onClick={onOpen}
          >
            <p className="text-orange text-base font-semibold px-2">
              Create project
            </p>
          </Button>
        </div>
      </MyModal>
    </>
  );
}
