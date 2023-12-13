import React, { useEffect, useState } from 'react';
import UploadImageCrop from '../components/upload-image-crop';
import { AddIcon, EditIcon } from '../components/ButtonIcons';

export default function SignupBannerAvatar({ data, setData }) {
  const [banner, setBanner] = useState(null);
  const [croppedBanner, setCroppedBanner] = useState(null);
  const [bannerName, setBannerName] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [croppedAvatar, setCroppedAvatar] = useState(null);
  const [avatarName, setAvatarName] = useState(null);

  useEffect(() => {
    setData({ ...data, banner: { file: croppedBanner, fileName: bannerName } });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [croppedBanner, bannerName]);

  useEffect(() => {
    setData({ ...data, avatar: { file: croppedAvatar, fileName: avatarName } });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [croppedAvatar, avatarName]);

  return (
    <div className="w-[1140px] m-auto">
      <div className="w-[1140px] h-[15.75rem] rounded-[0.875rem] border-[1.5px] border-[#ababab] overflow-hidden relative">
        {croppedBanner && (
          <img src={croppedBanner} alt="" className="w-full object-cover" />
        )}
        <UploadImageCrop
          file={banner}
          setFile={setBanner}
          setFileName={setBannerName}
          setCropped={setCroppedBanner}
          ratio={1444 / 335}
        >
          <div className="w-[63px] h-[63px] bg-orange rounded-full border-4 border-white flex justify-center items-center cursor-pointer absolute right-7 bottom-7">
            {croppedBanner ? <EditIcon /> : <AddIcon />}
          </div>
        </UploadImageCrop>
      </div>
      <div className="p-[0.9375rem] w-[18.5625rem] h-[18.5625rem] rounded-full bg-white ml-[84px] -translate-y-[9.28125rem] relative">
        <div className="w-[16.625rem] h-[16.625rem] border-[1.644px] border-[#ababab] bg-white rounded-full overflow-hidden">
          {croppedAvatar && (
            <img alt='' src={croppedAvatar} className="w-full object-cover" />
          )}
        </div>
        <UploadImageCrop
          file={avatar}
          setFile={setAvatar}
          setFileName={setAvatarName}
          setCropped={setCroppedAvatar}
          ratio={1 / 1}
        >
          <div className="w-[63px] h-[63px] bg-orange rounded-full border-4 border-white flex justify-center items-center cursor-pointer absolute right-7 bottom-7">
            {croppedAvatar ? <EditIcon /> : <AddIcon />}
          </div>
        </UploadImageCrop>
      </div>
    </div>
  );
}
