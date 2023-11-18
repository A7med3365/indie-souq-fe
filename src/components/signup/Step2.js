import React, { useState } from 'react';
import { Input, Textarea } from '@nextui-org/react';

export default function Step2({ data, setData }) {
  const [file, setFile] = useState(null);
  const [file2, setFile2] = useState(null);

  // const handleSubmit = async () => {
  //   console.log('uploading..');
  //   const response = await axios.post(
  //     'https://ih4rl4ru21.execute-api.me-south-1.amazonaws.com/default/S3FileUplaod',
  //     {
  //       fileName: 'test.png',
  //       file: file,
  //     }
  //   );
  //   console.log(response);
  // };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFile(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  const handleImageChange2 = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFile2(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="w-full m-auto flex flex-col items-center gap-3">
      {/* <Input
        className="w-[50%]"
        size="lg"
        variant="bordered"
        type="file"
        label="Avatar"
        value={data.avatar}
        onValueChange={handleImageChange}
        // onValueChange={(value) => {
        //   setData({ ...data, avatar: value });
        // }}
      />
      <Input
        className="w-[50%]"
        size="lg"
        variant="bordered"
        type="file"
        label="Banner"
        value={data.banner}
        onValueChange={handleImageChange2}
        // onValueChange={(value) => {
        //   setData({ ...data, banner: value });
        // }}
      /> */}
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <br />
      <input
        className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
        type="file"
        accept="image/*"
        onChange={handleImageChange2}
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
      {file && (
        <div>
          <img
            src={file}
            alt="Selected"
            className="h-[335px] w-[1440px] object-cover border-[1.5px] border-gray m-auto"
          />
        </div>
      )}
      {file2 && (
        <div>
          <img
            src={file2}
            alt="Selected"
            className="w-[280px] h-[280px] border-[10px] border-white rounded-full overflow-hidden mb-[24px] m-auto"
          />
        </div>
      )}
    </div>
  );
}
