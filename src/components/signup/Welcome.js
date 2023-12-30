import { Button } from '@nextui-org/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Welcome({ isSignup, userId }) {
  const nav = useNavigate();
  return (
    <div className="w-full m-auto text-center">
      <img
        src="https://s3-alpha-sig.figma.com/img/7d60/1e35/8b6f4f355cc924f3c60fd5bc5b0069b4?Expires=1704672000&Signature=ZAKsYcblk58b0t2GosJyvGi9zMBXCROeQA7ZfZ1kUWFw3h4047n8a8BMo6uT4yzy5akHRSF2X-mRb9DipMTpmR3WerIyYAmwlUvtGMFod7Iew2lINvqIXwitR1DkI~z8H5ykYFa8vYItpafiGbZS1BUeBrdAIJjt0EP9KQ7yQmS1o513Jombocp-sc2URTanaMDcqZRpJsefZCjuRkTAwr0hbDoRHppf4N5D5v~M4AjiOauekIanebz-~0~4l~I-u-R21NHnFYwAEdAtj5pk6GVRZpVVl9fPsR8c5q90wYlXb06AQu2Vdz00uYxIE3nRoWCDGYRdn6NQS8CeglqsvA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="welcome"
        className="m-auto"
      />
      <div className="flex-col justify-center items-center gap-6 inline-flex">
        <div className="text-neutral-700 text-[34px] font-bold font-['Inter'] text-center">
          {isSignup
            ? 'Welcome onboard!'
            : 'Congratulations! you’re now a content creator'}
        </div>
        <div className="text-center text-neutral-700 text-base font-normal font-['Inter']">
          {isSignup
            ? 'You can now explore content, share your thoughts and customize your profile. Complete your profile to become a creator.'
            : 'You can now post content, share your thoughts and engage with your community.'}
        </div>
      </div>
      <div className="block mt-8">
        <div className="w-[389px] h-[50px] justify-start items-start gap-[23px] inline-flex">
          <Button
            className="border border-orange bg-[rgb(0,0,0,0)] w-[183px] h-[50px] p-[12.56px] rounded-xl"
            variant="flat"
            onClick={(e) => {
                nav('/');
                }}
          >
            <p className="text-orange text-base font-semibold font-['Inter'] px-2">
              Go back home
            </p>
          </Button>
          <Button
            className="bg-orange w-[183px] h-[50px] p-[12.56px] rounded-xl"
            variant="flat"
            onClick={(e) => {
              isSignup ? nav(`/register?id=${userId}`) : nav('/dashboard?s=1');
            }}
          >
            <p className="text-white text-base font-semibold font-['Inter'] px-2">
              {isSignup ? 'Become a creator' : 'Create a project'}
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}
