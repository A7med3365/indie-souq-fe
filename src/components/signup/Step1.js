import React from 'react';
import { Input } from '@nextui-org/react';
import { EyeFilledIcon } from '../EyeFilledIcon';
import { EyeSlashFilledIcon } from '../EyeSlashFilledIcon';

export default function Step1({ data, setData }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="w-full m-auto flex flex-col items-center gap-3">
      <Input
        isRequired
        className="w-[50%]"
        size="lg"
        variant="bordered"
        type="firstName"
        label="First Name"
        value={data.firstName}
        onValueChange={(value) => {
          setData({ ...data, firstName: value });
        }}
      />
      <Input
        isRequired
        className="w-[50%]"
        size="lg"
        variant="bordered"
        type="lastName"
        label="last Name"
        value={data.lastName}
        onValueChange={(value) => {
          setData({ ...data, lastName: value });
        }}
      />
      <Input
        isRequired
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
        isRequired
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
    </div>
  );
}
