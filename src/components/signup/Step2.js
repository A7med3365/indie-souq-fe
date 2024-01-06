import React from 'react';
import SignupBannerAvatar from '../signup/SignupBannerAvatar';
import MyInput from '../common/MyInput';
import MyDatePicker from '../common/MyDatePicker';
import MyTextarea from '../common/MyTextarea';
import { formatDate } from '../../util/dates';

export default function Step2({ data, setData, files, setFiles }) {
  return (
    <>
      <SignupBannerAvatar data={files} setData={setFiles} />
      <div className="flex flex-col items-center gap-5 -translate-y-[9.28125rem] mt-12">
        <div className="w-[752px] relative flex gap-5">
          <MyInput
            className={' flex-grow'}
            label="First Name"
            placeholder="Enter first name"
            value={data.firstName}
            onChange={(e) => setData({ ...data, firstName: e.target.value })}
          />
          <MyInput
            className={' flex-grow'}
            label="last Name"
            placeholder="Enter last name"
            value={data.lastName}
            onChange={(e) => setData({ ...data, lastName: e.target.value })}
          />
        </div>
        <MyInput
          className={'w-[752px]'}
          label="Country"
          placeholder="Enter Your country"
          value={data.location}
          onChange={(e) => setData({ ...data, location: e.target.value })}
        />
        <MyDatePicker
          className={'w-[752px]'}
          label="Date of birth"
          placeholder="DD-MM-YYYY"
          disabledDays={[{ from: new Date(), to: new Date(3000,1,1) }]}
          captionLayout='dropdown-buttons'
          fromYear={1900}
          toYear={new Date().getFullYear() - 17}
          value={formatDate(data.birthDate || new Date())}
          onSelect={(date) => setData({ ...data, birthDate: date })}
        />
        <MyInput
          className={'w-[752px]'}
          label="Occupation"
          placeholder="Enter Your occupation"
          value={data.role}
          onChange={(e) => setData({ ...data, role: e.target.value })}
        />
        <MyTextarea
          className="w-[752px]"
          label="Profile Description"
          placeholder="Write your bio here"
          value={data.bio}
          onChange={(e) => setData({ ...data, bio: e.target.value })}
        />
      </div>
    </>
  );
}
