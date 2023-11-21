import { Button, useDisclosure } from '@nextui-org/react';
import React, { useRef } from 'react';
import MyModal from './MyModal';
import MyCropper from './mycropper';
import DropzoneInput from './DropzoneInput';

export default function UploadImageCrop({
  file,
  setFile,
  setFileName,
  setCropped,
  ratio,
  children,
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFileName(file.name.replace(/[^\w.]/g, '-'));
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result);
        setCropped(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div onClick={onOpen}>{children}</div>
      <MyModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <div className="bg-white w-[1000px] h-[700px] rounded-2xl p-5">
          {file ? (
            <MyCropper
              setCropped={setCropped}
              handleImageChange={handleImageChange}
              src={file}
              ratio={ratio}
            />
          ) : (
            <DropzoneInput handleImageChange={handleImageChange} />
          )}
        </div>
      </MyModal>
    </>
  );
}
