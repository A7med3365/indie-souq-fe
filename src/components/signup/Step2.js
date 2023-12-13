import React from 'react';
import { Input, Textarea } from '@nextui-org/react';
import SignupBannerAvatar from '../SignupBannerAvatar';

export default function Step2({ data, setData, files, setFiles }) {
  return (
    <>
      <SignupBannerAvatar data={files} setData={setFiles} />
      <div className="flex flex-col items-center gap-5 -translate-y-[9.28125rem] mt-12">
        <div className="w-[752px] flex gap-5 cursor-not-allowed">
          <Input
            isDisabled
            variant="bordered"
            size="lg"
            type="name"
            label="First name"
            labelPlacement="outside"
            placeholder="Enter first name"
          />
          <Input
            isDisabled
            variant="bordered"
            size="lg"
            type="name"
            label="Last name"
            labelPlacement="outside"
            placeholder="Enter last name"
          />
        </div>
        <Input
          className="w-[752px]"
          isDisabled
          variant="bordered"
          size="lg"
          type="text"
          label="Country"
          labelPlacement="outside"
          placeholder="Bahrain"
          endContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
            >
              <path
                d="M8.97148 10.9715L0.483064 2.48306C-0.433248 1.56675 0.215722 0 1.51158 0H18.4884C19.7843 0 20.4332 1.56675 19.5169 2.48307L11.0285 10.9715C10.4605 11.5395 9.53952 11.5395 8.97148 10.9715Z"
                fill="#939393"
              />
            </svg>
          }
        />
        <Input
          className="w-[752px]"
          isDisabled
          variant="bordered"
          size="lg"
          type="text"
          label="Date of birth"
          labelPlacement="outside"
          placeholder="DD/MM/YYYY"
        />
        <Input
          className="w-[752px]"
          isDisabled
          variant="bordered"
          size="lg"
          type="text"
          label="Select your Occupation"
          labelPlacement="outside"
          placeholder="Filmmaker"
          endContent={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="12"
              viewBox="0 0 20 12"
              fill="none"
            >
              <path
                d="M8.97148 10.9715L0.483064 2.48306C-0.433248 1.56675 0.215722 0 1.51158 0H18.4884C19.7843 0 20.4332 1.56675 19.5169 2.48307L11.0285 10.9715C10.4605 11.5395 9.53952 11.5395 8.97148 10.9715Z"
                fill="#939393"
              />
            </svg>
          }
        />
        <Textarea
          className="w-[752px] h-[293px]"
          variant="bordered"
          label="Profile Description"
          labelPlacement="outside"
          value={data.bio}
          onValueChange={(value) => {
            setData({ ...data, bio: value });
          }}
        />
      </div>
    </>
  );
}
