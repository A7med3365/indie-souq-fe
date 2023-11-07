import React from 'react';
import { Input, Textarea } from '@nextui-org/react';

export default function Step2({ data, setData }) {
  return (
    <div className="w-full m-auto flex flex-col items-center gap-3">
      <Input
        className="w-[50%]"
        size="lg"
        variant="bordered"
        type="url"
        label="Avatar"
        value={data.avatar}
        onValueChange={(value) => {
          setData({ ...data, avatar: value });
        }}
      />
      <Input
        className="w-[50%]"
        size="lg"
        variant="bordered"
        type="url"
        label="Banner"
        value={data.banner}
        onValueChange={(value) => {
          setData({ ...data, banner: value });
        }}
      />
      <Textarea
        className="w-[50%]"
        variant="bordered"
        label="Profile Description"
        value={data.bio}
        onValueChange={(value) => {
          setData({ ...data, bio: value });
        }}
      />
    </div>
  );
}
