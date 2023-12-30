import React from 'react';
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  useDisclosure,
} from '@nextui-org/react';
import NavbarAvatar from './NavbarAvatar';
import MyModal from './MyModal';
import CreateProject from './common/CreateProject';

export default function Navbar({ userId, isAuth, logout }) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  // const userId = useRecoilValue(currentUser);
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
              className=" text-neutral-700 text-base font-bold p-2.5 hover:text-gray1"
              href="/films"
            >
              Films
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-neutral-700 text-base font-bold p-2.5 hover:text-gray1"
              href="/creators"
            >
              Creators
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              className="text-neutral-700 text-base font-bold p-2.5 hover:text-gray1"
              href="/"
            >
              About us
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end" className="flex gap-8">
          <NavbarItem>
            {isAuth ? (
              <Button
                className="border border-orange bg-[rgb(0,0,0,0)] w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
                variant="flat"
                onClick={onOpen}
              >
                <p className="text-orange text-base font-semibold px-2">
                  New project
                </p>
              </Button>
            ) : (
              <Button
                // as={Link}
                className="bg-orange w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
                // href="/"
                variant="flat"
              >
                <p className="text-white text-base font-semibold px-2">
                  Get Started
                </p>
              </Button>
            )}
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
        <CreateProject userId={userId} onClose={onClose} />
      </MyModal>
    </>
  );
}


