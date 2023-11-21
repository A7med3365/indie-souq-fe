import React, { useEffect, useRef, useState } from 'react';
import UploadImageCrop from '../components/upload-image-crop';
import { AddIcon, EditIcon } from '../components/ButtonIcons';
import SignupBannerAvatar from '../components/SignupBannerAvatar';
import Step2 from '../components/signup/Step2';
import axios from 'axios';
import { Button } from 'flowbite-react';
import { avatar } from '@nextui-org/react';

export default function Test() {
  const [data2, setData2] = React.useState({
    avatar: '',
    banner: '',
    bio: 'Lorem ipsum dolor sit amet consectetur. Nisi fringilla scelerisque sem etiam fusce sed lectus scelerisque consectetur Dictum sagittis interdum onsectetur.',
  });

  const [files, setFiles] = React.useState({
    banner: { file: '', fileName: '' },
    avatar: { file: '', fileName: '' },
  });

  useEffect(() => {
    console.log(data2);
  }, [data2]);

  useEffect(() => {
    console.log(files);
  }, [files]);

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
      const responseA = await axios.post('/api/upload', formDataA);
      setData2((prevData) => ({ ...prevData, avatar: responseA.data.url }));
      console.log(responseA.data);
      const responseB = await axios.post('/api/upload', formDataB);
      setData2((prevData) => ({ ...prevData, banner: responseB.data.url }));
      console.log(responseB.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="w-[1440px] m-auto">
      <Step2
        data={data2}
        setData={setData2}
        files={files}
        setFiles={setFiles}
      />
      <button onClick={handleSubmit}>submit</button>
    </div>
  );
}
