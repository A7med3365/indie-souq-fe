import React from 'react';
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react';

export default function Navbar() {
  return (
    <Nav maxWidth="2xl" className="px-5 2xl:px-0" isBlurred>
      <NavbarContent justify="start">
        <Link href="/">
          <NavbarBrand>
            <img src="./logo.png" alt="logo" />
          </NavbarBrand>
        </Link>
      </NavbarContent>
      <NavbarContent
        className="hidden sm:flex gap-5 lg:gap-10"
        justify="center"
      >
        <NavbarItem isSelected={true}>
          <Link className="text-gray1 text-xl">Films</Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray1 text-xl" href="/creators">
            Creators
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-gray1 text-xl">About Us</Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} className="bg-orange" href="/films" variant="flat">
            <p className="text-white text-xl px-2">Discover Films</p>
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link className="text-gray1 text-xl" href="#">
            Login
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Nav>
  );
}
