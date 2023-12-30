import React, { useEffect, useState } from 'react';
import useRequest from '../hooks/use-request';
import { uploadBase64Files } from '../util/files';
import { toast } from 'react-toastify';
import { Button } from '@nextui-org/react';
import Step2 from '../components/signup/Step2';
import Welcome from '../components/signup/Welcome';
import { useLocation } from 'react-router-dom';

export default function RegisterCreator() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const userId = query.get('id');
  const [showWelcome, setShowWelcome] = useState(false);
  const [data, setData] = useState(null);
  const [files, setFiles] = useState({
    banner: { file: '', fileName: '' },
    avatar: { file: '', fileName: '' },
  });

  // getting the profile data
  const { doRequest } = useRequest({
    url: `/api/users/${userId}`,
    method: 'get',
    onSuccess: (res) => {
      setData(res.data);
      // console.log(res.data);
    },
  });

  useEffect(() => {
    const fetch = async () => {
      await doRequest();
    };
    if (userId) fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { doRequest: updateProfile } = useRequest({
    url: `/api/users/${userId}`,
    method: 'put',
    body: { ...data, isFilmmaker: true },
    onSuccess: (res) => {
      setShowWelcome(true);
    },
  });

  const isDataComplete = () => {
    return (
      data.firstName &&
      data.lastName &&
      data.location &&
      data.role &&
      data.bio &&
      data.birthDate &&
      files.avatar.file &&
      files.banner.file &&
      files.avatar.fileName &&
      files.banner.fileName
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isDataComplete()) {
      toast.error('Please fill all the fields!');
      return;
    }
    const urls = await uploadBase64Files(files);
    console.log({ urls });
    const toastId = toast.loading('Updating profile...');
    await updateProfile(urls);
    toast.update(toastId, {
      render: 'Profile updated successfully!',
      type: toast.TYPE.SUCCESS,
      isLoading: false,
      autoClose: 2000,
    });
  };

  if (data === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      {' '}
      {showWelcome ? (
        <Welcome />
      ) : (
        <div className=" mt-20">
          <div className="text-center">
            <div className="w-[800px] h-[84px] flex-col justify-center items-center gap-6 inline-flex mb-20">
              <div className="text-neutral-700 text-[34px] font-bold font-['Inter']">
                Build your creator profile
              </div>
              <div className="text-neutral-700 text-base font-normal font-['Inter']">
                This is the profile you use to introduce yourself, your
                projects, the cast you work with and more.
              </div>
            </div>
          </div>
          <Step2
            data={data}
            setData={setData}
            files={files}
            setFiles={setFiles}
          />
          <div className="flex -translate-y-24">
            <Button
              className="border border-orange bg-[rgb(0,0,0,0)] m-auto w-[700px] h-[100px] p-[12.56px] rounded-xl"
              variant="flat"
              onClick={handleSubmit}
            >
              <p className="text-orange text-3xl font-semibold px-2">
                Become a Creator
              </p>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
