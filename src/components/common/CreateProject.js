import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import useRequest from '../../hooks/use-request';
import { toast } from 'react-toastify';
import { Button, Input, Spinner } from '@nextui-org/react';


export default function CreateProject({ userId, onClose }) {
  const nav = useNavigate();
  // const userId = useRecoilValue(currentUser);
  const [projectTitle, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const { doRequest } = useRequest({
    url: '/api/projects',
    method: 'post',
    // body: { ...data },
    onSuccess: (res) => {
      console.log(res);
      nav('/dashboard');
      setLoading(false);
      onClose();
      toast.success('Project created successfully');
    },
  });

  const handleSubmit = async () => {
    if (projectTitle.length < 3) {
      return;
    }
    setLoading(true);

    doRequest({ creator: userId, title: projectTitle });
  };

  if (loading) {
    return (
      <div className=" w-2/4 h-fit p-9 bg-white rounded-2xl flex flex-col gap-5">
        <Spinner />
      </div>
    );
  }

  return (
    <div className=" w-2/4 h-fit p-9 bg-white rounded-2xl flex flex-col gap-5">
      <p className=" text-orange text-lg">Your project Title:</p>
      <Input
        // isDisabled
        variant="bordered"
        size="lg"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        // label="Project Title"
        // labelPlacement=""
        placeholder="Enter Title"
        classNames={{
          inputWrapper: 'text-gray2',
        }}
      />
      <Button
        className="border border-orange bg-[rgb(0,0,0,0)] w-[163px] h-[44.13px] p-[12.56px] rounded-xl mx-auto mt-4"
        variant="flat"
        onClick={handleSubmit}
      >
        <p className="text-orange text-base font-semibold px-2">
          Create project
        </p>
      </Button>
    </div>
  );
}
