// ts-check
import React, { useState } from 'react';
import Projects from '../components/Dashboard/Projects';
import Logo from '../components/assets/Logo';
import {
  AnalyticsIcon,
  ProfileIcon,
  ProjectsIcon,
  SettingsIcon,
} from '../components/Dashboard/DashboardIcons';
import { useLocation, useNavigate } from 'react-router-dom';
import Profile from '../components/Dashboard/Profile';

export default function UserDashboard({ userId }) {
  const nav = useNavigate();
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const sections = [
    {
      name: 'Profile',
      icon: ProfileIcon,
      // link: '/dashboard/profile',
    },
    {
      name: 'Projects',
      icon: ProjectsIcon,
      // link: '/dashboard/projects',
    },
    {
      name: 'Analytics',
      icon: AnalyticsIcon,
      // link: '/dashboard/analytics',
    },
    {
      name: 'Settings',
      icon: SettingsIcon,
      // link: '/dashboard/settings',
    },
  ];
  const section = query.get('s');
  const [selected, setSelected] = useState(Number(section));
  const style = {
    sections: (isSelected) =>
      `flex gap-4 my-auto ml-10 pl-10 py-5 transition-all ease-in-out delay-100 hover:bg-gray-400 rounded-l-2xl cursor-pointer ${
        isSelected && 'bg-gray-400'
      }`,
  };
  return (
    <div className="flex gap-24 pt-4 h-[100dvh]">
      <div className="bg-gray-300 w-[25dvw] h-full shadow-xl rounded-tl-3xl ml-5">
        <Logo className={'flex justify-center mt-4 cursor-pointer'} onClick={()=>nav('/')}/>
        <div className="flex flex-col gap-4 mt-14">
          {sections.map((section, i) => {
            return (
              <div
                className={style.sections(selected === i)}
                onClick={(_) => setSelected(i)}
                key={i}
              >
                <section.icon styles={{ width: 50, height: 50 }} />
                <p className="text-lg font-semibold p-2">{section.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex-grow h-full overflow-y-auto">
        {selected === 0 ? (
          <Profile userId={userId} />
        ):(
          selected === 1 ? (
            <Projects userId={userId} />
          ) : <div className=' text-2xl'>currently unavailable</div>
        )}
      </div>
    </div>
  );
}
