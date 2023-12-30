import React, { useEffect } from 'react';
import Step2 from '../signup/Step2';
import useRequest from '../../hooks/use-request';
import { toast } from 'react-toastify';
import { Button } from '@nextui-org/button';
import { uploadBase64Files } from '../../util/files';

export default function Profile({ userId }) {
  const [data, setData] = React.useState(null);
  const [files, setFiles] = React.useState({
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

  const refresh = async () => {
    await doRequest();
  }

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
    body: { ...data },
    // onSuccess: (res) => {
    //   toast.success('Profile updated successfully!');
    // },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const urls = await uploadBase64Files(files);
    console.log({urls});
    const toastId = toast.loading('Updating profile...');
    await updateProfile(urls);
    toast.update(toastId, {
      render: 'Profile updated successfully!',
      type: toast.TYPE.SUCCESS,
      isLoading: false,
      autoClose: 2000,
    });
    refresh();
  };

  if (data === null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <Step2 data={data} setData={setData} files={files} setFiles={setFiles} />
      <div className="flex -translate-y-24">
        <Button
          className="border border-orange bg-[rgb(0,0,0,0)] m-auto w-[700px] h-[100px] p-[12.56px] rounded-xl"
          variant="flat"
          onClick={handleSubmit}
        >
          <p className="text-orange text-3xl font-semibold px-2">
            Update profile
          </p>
        </Button>
      </div>
    </div>
  );
}
