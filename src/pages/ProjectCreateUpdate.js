import React, { useEffect, useState } from 'react';
import ProjectCreateSteps from '../components/ProjectCreateSteps';
import { Button, Chip, Select, SelectItem, Textarea } from '@nextui-org/react';
import { Input } from '@nextui-org/react';
import DropzoneInput from '../components/DropzoneInput';
import { useParams } from 'react-router-dom';
import useRequest from '../hooks/use-request';

export default function ProjectCreateUpdate() {
  const { projectId } = useParams();
  const [selected, setSelected] = React.useState(0);
  const [complete, setComplete] = React.useState([
    true,
    true,
    false,
    false,
    false,
  ]);
  const [project, setProject] = useState()

  const { doRequest } = useRequest({
    url: `/api/projects/${projectId}`,
    method: 'get',
    onSuccess: (res) => {
      setProject(res.data);
      // console.log(res.data);
    },
  });

  const forms = [
    <DetailsForm title={project.title} type={project.type} genre={project.genre} story={project.details.story}/>,
    <CrewForm />,
    <FundingForm />,
    <BudgetForm />,
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
          >
            <p className="text-orange text-base font-semibold px-2">
              Submit project
            </p>
          </Button>
        </div>
      </div>
      <div className="ml-24 overflow-y-auto flex flex-col">
        {forms[selected]}
        <div className="flex gap-5 mx-auto mb-11">
          <Button
            className="border border-orange bg-[rgb(0,0,0,0)] w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
            variant="flat"
          >
            <p className="text-orange text-base font-semibold px-2">Save</p>
          </Button>
          <Button
            className="bg-orange w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
            variant="flat"
          >
            <p className="text-white text-base font-semibold px-2">Next</p>
          </Button>
        </div>
      </div>
    </div>
  );
}

function DetailsForm({title, type, genre, story}) {
  const [details, setDetails] = useState({
    title: title || '',
    type: type || '',
    genre: genre || [],
    story: story || '',
  });

  const [selectedGenres, setSelected] = useState(new Set([]));

  const genres = [
    'Action',
    'Adventure',
    'Anime',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Fantasy',
    'History',
    'Horror',
    'Music',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Thriller',
  ];

  const updateGenre = (genre) => {
    let temp = { ...details };
    temp.genre = genre.split(',');
    setSelected(new Set(temp.genre));
    setDetails(temp);
  };

  const updateDetails = (field, value) => {
    let temp = { ...details };
    temp[field] = value;
    setDetails(temp);
  };

  useEffect(() => console.log(details), [details]);
  return (
    <div className="flex flex-col gap-14 mt-24 mb-12">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Project details
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
      <div className="flex flex-col gap-5">
        <div className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 bg-default-100 min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 h-14 py-2 hover:bg-gray-200 cursor-pointer">
          Add Video
        </div>
        <DropzoneInput />
        <Input
          type="text"
          label="Title"
          size="lg"
          value={details.title}
          onChange={(e) => updateDetails('title', e.target.value)}
        />
        <Select
          label="Film type"
          size="lg"
          value={details.type}
          onChange={(e) => updateDetails('type', e.target.value)}
          // className="max-w-xs"
        >
          {[
            { value: 'short', label: 'Short' },
            { value: 'feature', label: 'Feature' },
          ].map((type) => (
            <SelectItem key={type.value} value={type.value} onChange={() => {}}>
              {type.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          label="Genre"
          items={genres}
          isMultiline={true}
          size="lg"
          selectionMode="multiple"
          placeholder="Select a Genre"
          selectedKeys={selectedGenres}
          renderValue={(items) => {
            return (
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Chip
                    variant="bordered"
                    key={item.key}
                    classNames={{
                      base: 'border-orange',
                    }}
                  >
                    {item.props.value}
                  </Chip>
                ))}
              </div>
            );
          }}
          // className="max-w-xs"
          onChange={(e) => updateGenre(e.target.value)}
        >
          {genres.map((g) => (
            <SelectItem key={g} value={g}>
              {g}
            </SelectItem>
          ))}
        </Select>
        <Textarea
          label="Story"
          size="lg"
          placeholder="Enter your story"
          onChange={(e) => updateDetails('story', e.target.value)}
          // className="max-w-xs"
        />
      </div>
    </div>
  );
}

function CrewForm() {
  return (
    <div className="flex flex-col gap-14 my-24">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Cast & crew
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
    </div>
  );
}

function FundingForm() {
  return (
    <div className="flex flex-col gap-14 my-24">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Funding details
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
    </div>
  );
}

function BudgetForm() {
  return (
    <div className="flex flex-col gap-14 my-24">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Budget distribution
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
    </div>
  );
}

function RewardForm() {
  return (
    <div className="flex flex-col gap-14 my-24">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Reward system
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
    </div>
  );
}
