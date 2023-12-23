import React, { useEffect, useState } from 'react';
import ProjectCreateSteps from '../components/ProjectCreateSteps';
import { Button } from '@nextui-org/react';
import { useNavigate, useParams } from 'react-router-dom';
import useRequest from '../hooks/use-request';
import DetailsForm from '../components/forms/DetailsForm';
import CrewForm from '../components/forms/CrewForm';
import FundingForm from '../components/forms/FundingForm';
import BudgetForm from '../components/forms/BudgetForm';
import RewardForm from '../components/forms/RewardForm';

export default function ProjectCreateUpdate() {
  const nav = useNavigate();
  const { projectId } = useParams();
  const [selected, setSelected] = React.useState(0);
  const [complete, setComplete] = React.useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [project, setProject] = useState();

  const { doRequest, isLoading } = useRequest({
    url: `/api/projects/${projectId}`,
    method: 'get',
    onSuccess: (res) => {
      setProject(res.data);
      // console.log(res.data);
    },
  });

  useEffect(() => {
    const fetchProjectData = async () => {
      await doRequest();
    };
    fetchProjectData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const forms = [
    <DetailsForm
      title={project.title}
      type={project.type}
      genre={project.genre}
      story={project.details.story}
      media={project.details.media}
      setComplete={setComplete}
      id={projectId}
    />,
    <CrewForm />,
    <FundingForm setComplete={setComplete} />,
    <BudgetForm setComplete={setComplete} />,
    <RewardForm />,
  ];

  return (
    <div className="flex flex-grow gap-5 h-[100dvh]">
      <div className=" w-2/6 h-full shadow-[0_0px_23px_0px_rgba(0,0,0,0.1)] flex flex-col justify-center gap-12">
        <ProjectCreateSteps
          selected={selected}
          setSelected={setSelected}
          complete={complete}
        />
        <div className="flex gap-5 mx-auto">
          <Button
            className="bg-orange w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
            variant="flat"
          >
            <p className="text-white text-base font-semibold px-2">
              Save draft
            </p>
          </Button>
          <Button
            className="border border-orange bg-[rgb(0,0,0,0)] w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
            variant="flat"
            disabled = {!(complete[0] && complete[2])}
          >
            <p className="text-orange text-base font-semibold px-2">
              Submit project
            </p>
          </Button>
        </div>
        <div className="flex gap-5 mx-auto">
          <Button
            className="border border-blue-500 hover:bg-blue-500 bg-[rgb(0,0,0,0)] text-blue-500 hover:text-white w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
            variant="flat"
            onClick={(e) => nav('/dashboard')}
          >
            <p className="text-base font-semibold px-2">Discard Changes</p>
          </Button>
        </div>
      </div>
      <div className="ml-24 overflow-y-auto flex flex-col">
        {forms[selected]}
      </div>
    </div>
  );
}
