import { Button } from '@nextui-org/react';
import React, { useEffect } from 'react';
import Step1 from '../components/signup/Step1';
import Step2 from '../components/signup/Step2';
import useRequest from '../hooks/use-request';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';


export default function Signup() {
  const navigate = useNavigate();
  const [step, setStep] = React.useState(0);
  const [userId, setUserId] = React.useState('');
  const [data, setData] = React.useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isFilmmaker: true,
  });
  const [data2, setData2] = React.useState({
    avatar: '',
    banner: '',
    bio: 'Lorem ipsum dolor sit amet consectetur. Nisi fringilla scelerisque sem etiam fusce sed lectus scelerisque consectetur Dictum sagittis interdum onsectetur.',
  });

  const [files, setFiles] = React.useState({
    banner: { file: '', fileName: '' },
    avatar: { file: '', fileName: '' },
  });

  const { doRequest: step1, errors:err1 } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: { ...data },
    onSuccess: (res) => {
      setUserId(res.data.id);
      setStep(step + 1);
      toast.success('Account created successfully!')
    },
  });
  const { doRequest: step2, errors: err2 } = useRequest({
    url: `/api/users/${userId}`,
    method: 'put',
    // body: { ...data2 },
    onSuccess: (res) => {
      setUserId(res.data.id);
      navigate('/creators');
      toast.success('Account updated successfully!')
    },
  });

  useEffect(() => {
    if (err1) {
      err1.map((e) => toast.error(e.message,{
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      }));
    }
    if (err2) {
      err2.map((e) => toast.error(e.message,{
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
      }));
    }    
  }, [err1, err2]);

  const handleSubmit = async () => {
    const base64avatar = await fetch(files.avatar.file);
    const base64banner = await fetch(files.banner.file);
    const blobAvatar = await base64avatar.blob();
    const blobBanner = await base64banner.blob();

    const formDataA = new FormData();
    const formDataB = new FormData();
    formDataA.append('file', blobAvatar, files.avatar.fileName);
    formDataB.append('file', blobBanner, files.banner.fileName);

    try {
      let body = {
        avatar: '',
        banner: '',
        bio: data2.bio,
      };
      console.log('Before a u call');
      const responseA = await axios.post('/api/upload', formDataA);
      body = { ...body, avatar: responseA.data.url };
      console.log('after a u call');
      // console.log(responseA.data);
      console.log('Before b u call');
      const responseB = await axios.post('/api/upload', formDataB);
      body = { ...body, banner: responseB.data.url };
      console.log('after b u call');
      console.log({ body });
      console.log('Before step2 call');
      await step2(body);
      console.log('After step2 call');
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  const onNext = async () => {
    if (step === 0) {
      await step1();
    } else if (step === 1) {
      await handleSubmit();
    }
  };

  const steps = [
    <Step1 data={data} setData={setData} />,
    <>
      <Step2
        data={data2}
        setData={setData2}
        files={files}
        setFiles={setFiles}
      />
      {/* <Button
        size="lg"
        className="bg-orange text-white text-lg font-semibold mt-4"
        onClick={handleSubmit}
      >
        Next
      </Button> */}
    </>,
  ];

  React.useEffect(() => {
    console.log(data);
  }, [data]);
  React.useEffect(() => {
    console.log(data2);
  }, [data2]);

  return (
    <>
      <div className="m-auto w-[1440px] py-20 px-40 flex flex-col items-center gap-3 focus:border-orange">
        {steps[step]}
        <Button
          size="lg"
          className="bg-orange text-white text-lg font-semibold mt-4"
          onClick={onNext}
        >
          Next
        </Button>
      </div>
    </>
  );
}
