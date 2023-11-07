import React from 'react';
import Search from '../components/Search';
import Creator from '../components/Creator';
import { useNavigate } from 'react-router-dom';
import { Spinner } from '@nextui-org/react';

import useRequest from '../hooks/use-request';

export default function Creators() {
  const navigate = useNavigate();
  const [creators, setCreators] = React.useState([]);
  const { doRequest, errors } = useRequest({
    url: '/api/users',
    method: 'get',
    onSuccess: (res) => {
      setCreators(res.data);
      console.log(res.data);
    },
  });

  const fetch = async () => {
    await doRequest();
  };

  React.useEffect(() => {
    fetch();
  }, []);

  if (creators.length < 1) {
    return (
      <div className="flex justify-center my-[88px]">
        <Spinner label="Loading..." size="lg" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-center my-[88px]">
        <Search />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-[20px] gap-y-[36px] max-w-[1140px] m-auto pb-[70px]">
        {creators.map((creator) => {
          return (
            <Creator
              creator={{
                image: creator.avatar,
                name: `${creator.firstName} ${creator.lastName}`,
                role: 'filmmaker',
              }}
              onClick={() => {
                navigate(`/profile/${creator.id}`);
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
