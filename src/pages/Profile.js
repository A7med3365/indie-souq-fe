import React from 'react';
import ProfileInformation from '../components/ProfileInformation';
import ProfileTabs from '../components/ProfileTabs';
import { useParams } from 'react-router-dom';
import useRequest from '../hooks/use-request';
import { Spinner } from '@nextui-org/react';

export default function Profile() {
  const { userId } = useParams();
  const [user, setUser] = React.useState(null);
  const { doRequest, errors } = useRequest({
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  React.useEffect(() => {
    console.log(userId);
  }, [userId]);

  if (user === null) {
    return (
      <div className="flex justify-center my-[88px]">
        <Spinner label="Loading..." size="lg" />
      </div>
    );
  } else if (errors) {
    return <div>errors</div>;
  }

  return (
    <div>
      <img
        alt="profile banner"
        src={user.banner}
        className="h-[335px] w-[1440px] object-cover m-auto"
      />
      <div className="max-w-[1156px] m-auto -translate-y-[140px]">
        <div className="w-[280px] h-[280px] border-[10px] border-white rounded-full overflow-hidden mb-[24px]">
          <img
            alt="profile pic"
            src={user.avatar}
            className="w-[285px] h-[285px] object-cover"
          />
        </div>
        <div className="mb-[83px]">
          <ProfileInformation user={user} />
        </div>
        <div>
          <ProfileTabs />
        </div>
      </div>
    </div>
  );
}
