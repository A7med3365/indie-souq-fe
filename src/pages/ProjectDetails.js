import React from 'react';
import DetailsCards from '../components/DetailsCards';
import DetailsTaps from '../components/DetailsTaps';
import DetailsPreview from '../components/DetailsPreview';
import DetailsReactions from '../components/DetailsReactions';

export default function ProjectDetails() {
  let exampleData = {
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
  return (
    <div className="max-w-[1440px] m-auto gap-[55px] mt-5 flex justify-center">
      <div className="flex flex-col gap-[62px] max-w-[753px]">
        <DetailsPreview />
        <DetailsReactions />
        <DetailsTaps />
      </div>
      <DetailsCards data={exampleData} />
    </div>
  );
}
