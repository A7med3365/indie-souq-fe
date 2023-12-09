import { Button, Input, Link } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { EyeFilledIcon } from '../components/EyeFilledIcon';
import { EyeSlashFilledIcon } from '../components/EyeSlashFilledIcon';
import { useNavigate } from 'react-router-dom';
import useRequest from '../hooks/use-request';
import { toast } from 'react-toastify';

export default function Signin() {
  const [isVisible, setIsVisible] = React.useState(false);
  const [data, setData] = React.useState({ email: '', password: '' });
  const nav = useNavigate();
  const { doRequest, errors } = useRequest({
    url: '/api/users/signin',
    method: 'post',
    body: { ...data },
    onSuccess: (res) => {
      console.log(res);
      nav('/');
    },
  });

  useEffect(() => {
    if (errors) {
      errors.map((e) =>
        toast.error(e.message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        })
      );
    }
  }, [errors]);

  React.useEffect(() => {
    console.log(data);
  }, [data]);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="m-auto w-[1440px] py-20 px-40 flex flex-col items-center gap-3 focus:border-orange">
      <Input
        className="w-[50%]"
        size="lg"
        variant="bordered"
        type="email"
        label="Email"
        value={data.email}
        onValueChange={(value) => {
          setData({ ...data, email: value });
        }}
      />
      <Input
        className="w-[50%]"
        size="lg"
        variant="bordered"
        label="Password"
        value={data.password}
        onValueChange={(value) => {
          setData({ ...data, password: value });
        }}
        endContent={
          <button
            className="focus:outline-none"
            type="button"
            onClick={toggleVisibility}
          >
            {isVisible ? (
              <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            ) : (
              <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? 'text' : 'password'}
      />
      <Button
        size="lg"
        className="bg-orange text-white text-lg font-semibold mt-4"
        onClick={async () => {
          doRequest();
        }}
      >
        Sign in
      </Button>
      <Link
        className="hover:text-gray1 text-[#D8D8D8] text-md font-semibold p-[10px]"
        href="/signup"
      >
        New to IndeSouq? create a new account
      </Link>
    </div>
  );
}
