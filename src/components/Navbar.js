import React from 'react';
import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Spinner,
} from '@nextui-org/react';
import useRequest from '../hooks/use-request';

export default function Navbar({ currentUser, isAuth, isLoading }) {
  const [user, setUser] = React.useState(null);
  const { doRequest, errors } = useRequest({
    method: 'get',
  });
  React.useEffect(async () => {
    console.log('nav');
    console.log(currentUser);
    if (isAuth) {
      await doRequest({
        url: `/api/users/${currentUser.id}`,
        onSuccess: (res) => {
          setUser(res.data);
          console.log(res.data);
        },
      });
    }
  }, [isAuth]);
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
        className="hidden sm:flex gap-3 lg:gap-10"
        justify="center"
      >
        <NavbarItem isSelected={true}>
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
            as={Link}
            className="border border-orange bg-[rgb(0,0,0,0)] w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
            href="/"
            variant="flat"
          >
            <p className="text-orange text-base font-semibold px-2">
              Submit project
            </p>
          </Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link
            className="text-gray1 text-base font-semibold p-[10px]"
            href="/signin"
          >
            {isLoading ? <Spinner label="" size="sm" /> : isAuth}
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Nav>
  );
}
