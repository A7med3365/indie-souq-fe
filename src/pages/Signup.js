import { Button } from '@nextui-org/react';
import React from 'react';
import Step1 from '../components/signup/Step1';
import Step2 from '../components/signup/Step2';
import useRequest from '../hooks/use-request';
import { useNavigate } from 'react-router-dom';

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

  const { doRequest: step1 } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: { ...data },
    onSuccess: (res) => {
      setUserId(res.data.id);
      setStep(step + 1);
    },
  });
  const { doRequest: step2 } = useRequest({
    url: `/api/users/${userId}`,
    method: 'put',
    body: { ...data2 },
    onSuccess: (res) => {
      setUserId(res.data.id);
      navigate('/signin');
    },
  });

  const onNext = async () => {
    if (step === 0) {
      step1();
    } else if (step === 1) {
      step2();
    }
  };

  const steps = [
    <Step1 data={data} setData={setData} />,
    <Step2 data={data2} setData={setData2} />,
  ];

  React.useEffect(() => {
    console.log(data);
  }, [data]);
  React.useEffect(() => {
    console.log(data2);
  }, [data2]);

  return (
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
  );
}
