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

export default function NavbarAvatar({ userId, logout }) {
  //   const userId = currentUser.id;
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
    fetchUserData();
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
            <DropdownItem textValue="settings" key="settings">
              Settings
            </DropdownItem>
            <DropdownItem textValue="Projects" key="Projects">
              Projects
            </DropdownItem>
            <DropdownItem textValue="analytics" key="analytics">
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
