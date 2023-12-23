import React, { useEffect } from 'react';
import Step2 from '../signup/Step2';
import useRequest from '../../hooks/use-request';
import { toast } from 'react-toastify';

export default function Profile({ userId }) {
  const [data, setData] = React.useState({
    avatar: '',
    banner: '',
    firstName: 'ah',
    lastName: '',
    location: '',
    role: '',
    birthDate: undefined,
    bio: 'Lorem ipsum dolor sit amet consectetur. Nisi fringilla scelerisque sem etiam fusce sed lectus scelerisque consectetur Dictum sagittis interdum onsectetur.',
  });
  const [files, setFiles] = React.useState({
    banner: { file: '', fileName: '' },
    avatar: { file: '', fileName: '' },
  });

  // getting the profile data
  const { doRequest, errors } = useRequest({
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
    fetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { doRequest: updateProfile, errors: err2 } = useRequest({
    url: `/api/users/${userId}`,
    method: 'put',
    body: { ...data },
    onSuccess: (res) => {
      toast.success('Profile updated successfully!');
    },
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    const prom = updateProfile();
    toast.promise(prom, {
      pending: 'Updating profile...',
      success: 'Profile updated successfully!',
      error: 'Error updating profile',
    });
  }

  if (errors) {
    errors.map((e) =>
      toast.error(e.message, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      })
    );
    return <div></div>;
  }
  return (
    <div>
      <Step2 data={data} setData={setData} files={files} setFiles={setFiles} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
