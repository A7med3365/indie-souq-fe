import React, { useRef } from 'react';
import { Cropper } from 'react-cropper';
import 'cropperjs/dist/cropper.css';
import { Button } from '@nextui-org/react';

export default function MyCropper({
  setCropped,
  handleImageChange,
  src,
  ratio,
}) {
  const cropper = useRef();

  const handleCrop = () => {
    if (cropper.current.cropper !== undefined) {
      setCropped(cropper.current.cropper.getCroppedCanvas().toDataURL());
    }
  };
  return (
    <>
      <div className="w-full overflow-hidden">
        <Cropper
          style={{ width: 'full' }}
          ref={cropper}
          src={src}
          aspectRatio={ratio}
          viewMode={1}
          minCropBoxHeight={100}
          guides={true}
          background={false}
        />
      </div>
      <div className="w-full flex justify-around mt-3">
        <div>
          <label
            className="mb-2 text-sm font-medium text-gray-900 dark:text-white"
            htmlFor="change-file"
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
  );
}
