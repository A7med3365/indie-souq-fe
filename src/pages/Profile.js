import React from 'react';
import ProfileInformation from '../components/ProfileInformation';
import ProfileTabs from '../components/ProfileTabs';

export default function Profile() {
  return (
    <div>
      <img
        alt="profile banner"
        src="./profile-banner.png"
        className="max-w-[1440px] m-auto"
      />
      <div className="max-w-[1156px] m-auto -translate-y-[140px]">
        <div className="w-[280px] h-[280px] border-[10px] border-white rounded-full overflow-hidden mb-[24px]">
          <img
            alt="profile pic"
            src="./profile-pic-example.png"
            className="w-[280px]"
          />
        </div>
        <div className="mb-[83px]">
          <ProfileInformation />
        </div>
        <div>
          <ProfileTabs />
        </div>
      </div>
    </div>
  );
}
