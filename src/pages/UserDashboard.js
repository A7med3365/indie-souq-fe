import { Spinner, Tooltip } from '@nextui-org/react';
import React, { useState } from 'react';
import useRequest from '../hooks/use-request';

export default function UserDashboard({ userId }) {
  const [projects, setProjects] = useState([]);
  const { doRequest, isLoading, errors } = useRequest({
    url: `/api/user-projects/${userId}`,
    method: 'get',
    onSuccess: (res) => {
      setProjects(res.data);
      // console.log(res.data);
    },
  });

  React.useEffect(() => {
    const fetchProjectsData = async () => {
      if (userId) {
        await doRequest();
      }
    };
    fetchProjectsData();
  }, [userId]);

  const dummy = [
    { title: 'Project Title', isPub: true },
    { title: 'Project Title', isPub: false },
    { title: 'Project Title', isPub: true },
    { title: 'Project Title', isPub: true },
    { title: 'Project Title', isPub: true },
    { title: 'Project Title', isPub: true },
  ];

  if (isLoading || projects.length === 0) {
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
    <div className="flex flex-col gap-7 max-w-[1440px] m-auto mt-8">
      {projects.map((project, i) => {
        return (
          <ProjectCard
            title={project.title}
            isPub={project.isPublished}
            key={i}
          />
        );
      })}
    </div>
  );
}

function ProjectCard({ title, isPub, key }) {
  return (
    <div className="w-full h-[20dvh] border flex rounded-3xl px-8" key={key}>
      <p className=" flex-1 text-4xl ml-3 my-auto">{title}</p>
      <div className="flex gap-4 my-auto mr-10">
        <ShareIcon />
        <EditIcon />
        <DeleteIcon />
      </div>
      <Status isPub={isPub} />
    </div>
  );
}

function Status({ isPub }) {
  if (isPub) {
    return (
      <div className=" w-32 py-6 text-green-700 bg-green-100 border border-green-300 rounded-3xl my-auto text-center font-semibold">
        Published
      </div>
    );
  }
  return (
    <div className="w-32 py-6 text-yellow-700 bg-yellow-100 border border-yellow-300 rounded-3xl my-auto text-center font-semibold">
      Draft
    </div>
  );
}

function DeleteIcon() {
  return (
    <Tooltip showArrow={true} content="Delete">
      <svg
        className=" cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21.07 5.23C19.46 5.07 17.85 4.95 16.23 4.86V4.85L16.01 3.55C15.86 2.63 15.64 1.25 13.3 1.25H10.68C8.35001 1.25 8.13 2.57 7.97 3.54L7.76 4.82C6.83001 4.88 5.9 4.94 4.97 5.03L2.93001 5.23C2.51001 5.27 2.21 5.64 2.25 6.05C2.29 6.46 2.65 6.76 3.07 6.72L5.11001 6.52C10.35 6 15.63 6.2 20.93 6.73C20.96 6.73 20.98 6.73 21.01 6.73C21.39 6.73 21.72 6.44 21.76 6.05C21.79 5.64 21.49 5.27 21.07 5.23Z"
          fill="#292D32"
        />
        <path
          d="M19.23 8.14C18.99 7.89 18.66 7.75 18.32 7.75H5.67999C5.33999 7.75 4.99999 7.89 4.76999 8.14C4.53999 8.39 4.40999 8.73 4.42999 9.08L5.04999 19.34C5.15999 20.86 5.29999 22.76 8.78999 22.76H15.21C18.7 22.76 18.84 20.87 18.95 19.34L19.57 9.09C19.59 8.73 19.46 8.39 19.23 8.14ZM13.66 17.75H10.33C9.91999 17.75 9.57999 17.41 9.57999 17C9.57999 16.59 9.91999 16.25 10.33 16.25H13.66C14.07 16.25 14.41 16.59 14.41 17C14.41 17.41 14.07 17.75 13.66 17.75ZM14.5 13.75H9.49999C9.08999 13.75 8.74999 13.41 8.74999 13C8.74999 12.59 9.08999 12.25 9.49999 12.25H14.5C14.91 12.25 15.25 12.59 15.25 13C15.25 13.41 14.91 13.75 14.5 13.75Z"
          fill="#292D32"
        />
      </svg>
    </Tooltip>
  );
}

function EditIcon() {
  return (
    <Tooltip showArrow={true} content="Edit">
      <svg
        className=" cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M21 22H3C2.59 22 2.25 21.66 2.25 21.25C2.25 20.84 2.59 20.5 3 20.5H21C21.41 20.5 21.75 20.84 21.75 21.25C21.75 21.66 21.41 22 21 22Z"
          fill="#292D32"
        />
        <path
          d="M19.02 3.48C17.08 1.54 15.18 1.49 13.19 3.48L11.98 4.69C11.88 4.79 11.84 4.95 11.88 5.09C12.64 7.74001 14.76 9.86 17.41 10.62C17.45 10.63 17.49 10.64 17.53 10.64C17.64 10.64 17.74 10.6 17.82 10.52L19.02 9.31001C20.01 8.33001 20.49 7.38 20.49 6.42C20.5 5.43 20.02 4.47 19.02 3.48Z"
          fill="#292D32"
        />
        <path
          d="M15.61 11.53C15.32 11.39 15.04 11.25 14.77 11.09C14.55 10.96 14.34 10.82 14.13 10.67C13.96 10.56 13.76 10.4 13.57 10.24C13.55 10.23 13.48 10.17 13.4 10.09C13.07 9.81 12.7 9.45 12.37 9.05C12.34 9.03 12.29 8.96 12.22 8.87C12.12 8.75 11.95 8.55 11.8 8.32C11.68 8.17 11.54 7.95 11.41 7.73C11.25 7.46 11.11 7.19 10.97 6.91C10.9488 6.86461 10.9283 6.81944 10.9084 6.77454C10.7608 6.44122 10.3262 6.34378 10.0684 6.60153L4.33995 12.33C4.20995 12.46 4.08995 12.71 4.05995 12.88L3.51995 16.71C3.41995 17.39 3.60995 18.03 4.02995 18.46C4.38995 18.81 4.88995 19 5.42995 19C5.54995 19 5.66995 18.99 5.78995 18.97L9.62995 18.43C9.80995 18.4 10.06 18.28 10.18 18.15L15.9013 12.4287C16.1608 12.1691 16.0629 11.7237 15.7253 11.5796C15.6873 11.5634 15.6489 11.5469 15.61 11.53Z"
          fill="#292D32"
        />
      </svg>
    </Tooltip>
  );
}

function ShareIcon() {
  return (
    <Tooltip showArrow={true} content="Share">
      <svg
        className=" cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M16.14 2.96L7.11 5.96C1.04 7.99 1.04 11.3 7.11 13.32L9.79 14.21L10.68 16.89C12.7 22.96 16.02 22.96 18.04 16.89L21.05 7.87C22.39 3.82 20.19 1.61 16.14 2.96ZM16.46 8.34L12.66 12.16C12.51 12.31 12.32 12.38 12.13 12.38C11.94 12.38 11.75 12.31 11.6 12.16C11.31 11.87 11.31 11.39 11.6 11.1L15.4 7.28C15.69 6.99 16.17 6.99 16.46 7.28C16.75 7.57 16.75 8.05 16.46 8.34Z"
          fill="#292D32"
        />
      </svg>
    </Tooltip>
  );
}
