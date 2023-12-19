import React, { useState } from 'react'
import useRequest from '../../hooks/use-request';
import ProjectCard from './ProjectCard';
import { Spinner } from '@nextui-org/react';

export default function Projects({userId}) {
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userId]);

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
    <div className="flex flex-col gap-7 w-full max-w-4xl mt-4">
      <div className="w-full h-[10dvh] border flex rounded-3xl px-8 text-orange cursor-pointer border-orange transition-all ease-in-out delay-100 hover:bg-orange hover:text-white">
        <p className=" flex-1 text-4xl ml-3 my-auto">+ Start a new project</p>
      </div>
      {projects.map((project, i) => {
        return (
          <ProjectCard
            title={project.title}
            isPub={project.isPublished}
            key={i}
            id={project.id}
          />
        );
      })}
    </div>
  );
}
