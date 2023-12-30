import React from 'react';
import Search from '../components/Search';
import Creator from '../components/Creator';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from '@nextui-org/react';
import useRequest from '../hooks/use-request';
import { capitalize } from '../util/str';

export default function Creators() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const [creators, setCreators] = React.useState([]);
  const { doRequest, isLoading, errors } = useRequest({
    url: `/api/users${query.get('all') ? '' : '?filmmakers=1'}`,
    method: 'get',
    onSuccess: (res) => {
      setCreators(res.data);
      // console.log(res.data);
    },
  });

  React.useEffect(() => {
    const fetchCreatorsData = async () => {
      await doRequest();
    };
    fetchCreatorsData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading || creators.length === 0) {
    return (
      <div className="flex justify-center my-[88px]">
        <Spinner label="Loading..." size="lg" />
      </div>
    );
  }

  if (errors) {
    return <div>errors</div>;
  }

  return (
    <div>
      <div className="flex justify-center my-[88px]">
        <Search />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-[20px] gap-y-[36px] max-w-[1140px] m-auto pb-[70px]">
        {creators.map((creator, i) => {
          return (
            <Creator
              key={i}
              creator={{
                image: creator.avatar,
                name: `${creator.firstName} ${creator.lastName}`,
                role: capitalize(creator.role),
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
