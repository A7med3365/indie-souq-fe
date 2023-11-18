import React, { useEffect, useRef, useState } from 'react';

import axios from 'axios';
import { useDisclosure, Button } from '@nextui-org/react';
import MyModal from '../components/MyModal';
import DropzoneInput from '../components/DropzoneInput';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';

export default function Test() {
  const [file, setFile] = useState(null);
  const [fileToUpload, setFileToUpload] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const cropper = useRef();

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFile(reader.result);
        setFileToUpload(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = () => {
    if (cropper.current.cropper !== undefined) {
      setFileToUpload(cropper.current.cropper.getCroppedCanvas().toDataURL());
    }
  };

  useEffect(() => {
    console.log(fileToUpload);
  }, [fileToUpload]);

  return (
    <div>
      <div className="w-[1440px] h-[335px] overflow-hidden m-auto border-gray border-dashed border-5">
        {fileToUpload && (
          <img src={fileToUpload} className="w-full object-cover" />
        )}
      </div>
      <span className="w-auto flex justify-center">
        <Button className="bg-orange m-auto" onPress={onOpen} variant="flat">
          <p className="text-white text-xl px-2">
            {fileToUpload ? 'Edit' : 'Upload'}
          </p>
        </Button>
      </span>
      <MyModal isOpen={isOpen} onOpenChange={onOpenChange}>
        <div className="bg-white w-[1000px] h-[700px] rounded-2xl p-5">
          {file ? (
            <>
              <div className="w-full overflow-hidden">
                <Cropper
                  style={{ width: 'full' }}
                  ref={cropper}
                  src={file}
                  aspectRatio={1440 / 335}
                  viewMode={1}
                  minCropBoxHeight={100}
                  guides={true}
                  background={false}
                  // cropend={() => this.handleCropChange()}
                />
                {/* <img
                  src={file}
                  alt="Selected"
                  classNameName="w-full h-[223px] object-cover rounded-lg m-auto"
                /> */}
              </div>
              <div className="w-full flex justify-around mt-3">
                <div>
                  <label
                    class="mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    for="change-file"
                  >
                    Change file
                  </label>
                  <input
                    id="change-file"
                    accept="image/*"
                    onChange={handleImageChange}
                    type="file"
                    className="bg-orange rounded-lg"
                  />
                </div>
                <Button className="bg-orange" onClick={handleCrop}>
                  Crop
                </Button>
              </div>
            </>
          ) : (
            <DropzoneInput handleImageChange={handleImageChange} />
          )}
        </div>
      </MyModal>
    </div>
  );
}
