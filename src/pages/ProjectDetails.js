import React, { useEffect, useState } from 'react';
import DetailsCards from '../components/DetailsCards';
import DetailsTaps from '../components/DetailsTaps';
import DetailsPreview from '../components/DetailsPreview';
import DetailsReactions from '../components/DetailsReactions';
import { useLocation } from 'react-router-dom';
import useRequest from '../hooks/use-request';
import { capitalize } from '../util/str';
import { dateStrFormat } from '../util/dates';

export default function ProjectDetails() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const [res, setRes] = useState({
    title: '',
    type: '',
    budget: [],
    details: null,
    genre: [],
    creator: {
      role: '',
      media: null,
      firstName: '',
      lastName: '',
      location: '',
      avatar: '',
      id: '',
    },
  });
  const { doRequest, isLoading } = useRequest({
    url: `/api/projects/${query.get('p')}`,
    method: 'get',
    onSuccess: (response) => {
      // console.log(response.data);
      setRes(response.data);
    },
  });
  useEffect(() => console.log(res) ,[res])
  useEffect(() => {
    const fetch = async () => {
      await doRequest();
    };
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let data = {
    name: 'Mohamed Jassim',
    role: 'Film Producer',
    location: 'Bahrain',
    filmType: 'Short Film',
    genre: 'Drama',
    fundGoal: 5000,
    fundRaised: 4400,
    fundPurpose: 'Cast Cost',
    Deadline: '11 Nov 2023',
    type: 'Fixed Fund',
    rewards: 'Fixed',
  };
  if (isLoading) return <div>Loading...</div>;
  return (
    <>
      <div className="text-stone-500 text-5xl font-bold max-w-[1440px] m-auto mt-14 mb-14 px-40">
        {res.title ? res.title : 'Title'}
      </div>
      <div className="max-w-[1440px] m-auto gap-[55px] mt-5 flex justify-center">
        <div className="flex flex-col gap-[62px] max-w-[753px]">
          <DetailsPreview media={res.details ? res.details?.media : null} />
          <DetailsReactions />
          <DetailsTaps story={res.details ? res.details?.story : ''} budget={res.budget ? res.budget : null} />
        </div>
        <DetailsCards
          name={
            res.creator?.firstName
              ? capitalize(res.creator?.firstName) +
                ' ' +
                capitalize(res.creator?.lastName)
              : data.name
          }
          role={res.creator?.role ? res.creator?.role : data.role}
          location={
            res.creator?.location ? res.creator?.location : data.location
          }
          filmType={res.type ? capitalize(res.type) : data.filmType}
          genre={res.genre?.join(', ')}
          avatar={res.creator?.avatar}
          fundGoal={res.details ? res.details?.goal : 100}
          fundRaised={res.details ? res.details?.raised : 10}
          stage={res.details ? res.details?.stage : ''}
          Deadline={
            res.details
              ? dateStrFormat(res.details?.endOfCampaign)
              : '11 Nov 2023'
          }
        />
      </div>
    </>
  );
}
