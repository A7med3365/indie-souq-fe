import React from 'react';
import useRequest from '../hooks/use-request';
import {
  Avatar,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  DropdownSection,
} from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

export default function NavbarAvatar({ userId, logout }) {
  //   const userId = currentUser.id;
  const nav = useNavigate();
  const [user, setUser] = React.useState(null);
  const { doRequest, isLoading } = useRequest({
    url: `/api/users/${userId}`,
    method: 'get',
    onSuccess: (res) => {
      setUser(res.data);
      // console.log(res.data);
    },
  });

  React.useEffect(() => {
    const fetchUserData = async () => {
      await doRequest();
    };
    if (userId) fetchUserData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            showFallback
            src={user.avatar}
            as="button"
            className="transition-transform"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownSection showDivider>
            <DropdownItem
              textValue="profile"
              key="profile"
              onClick={(e) => nav(`/dashboard?s=0`)}
              className="h-14 gap-2"
            >
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">
                {user.firstName} {user.lastName}
              </p>
            </DropdownItem>
          </DropdownSection>
          <DropdownSection showDivider>
            {/* <DropdownItem key="profile">Your Profile</DropdownItem> */}
            <DropdownItem
              textValue="settings"
              key="settings"
              onClick={(e) => nav(`/dashboard?s=3`)}
            >
              Settings
            </DropdownItem>
            <DropdownItem
              textValue="Projects"
              key="Projects"
              onClick={(e) => nav(`/dashboard?s=1`)}
            >
              Projects
            </DropdownItem>
            <DropdownItem
              textValue="analytics"
              key="analytics"
              onClick={(e) => nav(`/dashboard?s=2`)}
            >
              Analytics
            </DropdownItem>
            <DropdownItem textValue="history" key="history">
              Fund History
            </DropdownItem>
            <DropdownItem textValue="help_and_feedback" key="help_and_feedback">
              Help & Feedback
            </DropdownItem>
          </DropdownSection>
          <DropdownSection>
            <DropdownItem
              textValue="logout"
              key="logout"
              color="danger"
              onClick={() => logout()}
            >
              Log Out
            </DropdownItem>
          </DropdownSection>
        </DropdownMenu>
      </Dropdown>
    </>
  );
}
