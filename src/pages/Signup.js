import { Button } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';
import Step1 from '../components/signup/Step1';
import useRequest from '../hooks/use-request';
import { toast } from 'react-toastify';
import Welcome from '../components/signup/Welcome';

export default function Signup() {
  const [showWelcome, setShowWelcome] = useState(false);
  const [userId, setUserId] = useState('');
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    isFilmmaker: false,
  });

  const { doRequest: step1, errors: err1 } = useRequest({
    url: '/api/users/signup',
    method: 'post',
    body: { ...data },
    onSuccess: (res) => {
      setUserId(res.data.id);
      toast.success('Account created successfully!');
      setShowWelcome(true);
    },
  });

  useEffect(() => {
    if (err1) {
      err1.map((e) =>
        toast.error(e.message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
        })
      );
    }
  }, [err1]);

  const onSignup = async () => {
    await step1();
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <>
      {showWelcome ? (
        <Welcome isSignup userId={userId} />
      ) : (
        <div className="m-auto w-[1440px] py-20 px-40 flex flex-col items-center gap-3 focus:border-orange">
          <Step1 data={data} setData={setData} />
          <Button
            size="lg"
            className="bg-orange text-white text-lg font-semibold mt-4"
            onClick={onSignup}
          >
            Sign Up
          </Button>
        </div>
      )}
    </>
  );
}
