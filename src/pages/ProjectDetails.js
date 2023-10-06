import React from 'react';
import DetailsCards from '../components/DetailsCards';
import DetailsTaps from '../components/DetailsTaps';
import DetailsPreview from '../components/DetailsPreview';

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
    rewards: 'Available',
  };
  return (
    <div className="max-w-[1440px] m-auto gap-[55px] mt-5 flex justify-between">
      <div className="flex flex-col gap-[62px] grow max-w-[960px]">
        <DetailsPreview />
        <DetailsTaps />
      </div>
      <DetailsCards data={exampleData} />
    </div>
  );
}
