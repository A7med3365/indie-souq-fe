import React, { useState } from 'react'
import useRequest from '../../hooks/use-request';
import ProjectCard from './ProjectCard';
import { Spinner, useDisclosure } from '@nextui-org/react';
import MyModal from '../common/MyModal';
import CreateProject from '../common/CreateProject';
import EmptyProjects from './EmptyProjects';

export default function Projects({userId}) {
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [projects, setProjects] = useState([]);
  const { doRequest, isLoading, errors } = useRequest({
    url: `/api/user-projects/${userId}`,
    method: 'get',
    onSuccess: (res) => {
      setProjects(res.data);
      // console.log(res.data);
    },
  });

  const refresh = async () => {
    await doRequest();
  };

  React.useEffect(() => {
    const fetchProjectsData = async () => {
      if (userId) {
        await doRequest();
      }
    };
    fetchProjectsData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userId]);

  if (isLoading ) {
    return (
      <div className="flex justify-center my-[88px]">
        <Spinner label="Loading..." size="lg" />
      </div>
    );
  }

  if (projects.length === 0) {
    return (
      <>
        <EmptyProjects onOpen={onOpen} />
        <MyModal isOpen={isOpen} onOpenChange={onOpenChange}>
          <CreateProject userId={userId} onClose={onClose} onProjectCreated={refresh} />
        </MyModal>
      </>
    );
  }

  if (errors) {
    return <div>errors</div>;
  }

  return (
    <>
      <div className="flex flex-col gap-7 w-full max-w-4xl mt-4">
        <div
          className="w-full h-[10dvh] border flex rounded-3xl px-8 text-orange cursor-pointer border-orange transition-all ease-in-out delay-100 hover:bg-orange hover:text-white"
          onClick={onOpen}
        >
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
      <MyModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <CreateProject userId={userId} onClose={onClose} onProjectCreated={refresh}/>
      </MyModal>
    </>
  );
}
