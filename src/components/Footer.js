import React from 'react';

export default function Footer() {
  return (
    <div className="flex-col gap-20">
      <div className="pb-10">
        <img src="./logo-white.png" alt="inddie souq logo" />
      </div>
      <div className="grid grid-cols-4 gap-12 content-around w-full py-10 text-2xl">
        <div>About</div>
        <div>Contact Us</div>
        <div>News</div>
        <div>Guide for Creators</div>
        <div>Who We Are</div>
        <div>Term of Use</div>
        <div>Privacy</div>
        <div>Guide for Supporters</div>
        <div>Why IndieSouq</div>
        <div>How it Works</div>
        <div>Partners</div>
        <div>Our Mission and Values</div>
      </div>
      <div className="flex w-full justify-between py-10">
        <div className="text-base font-bold justify-self-start self-center">
          © 2023 IndieSouq
        </div>
        <div className="justify-self-end flex gap-3">
          <div className="text-base font-bold self-center pr-8">Follow Us</div>
          <img src="./facebook.png" alt="social icon" />
          <img src="./tweeter.png" alt="social icon" />
          <img src="./instgram.png" alt="social icon" />
          <img src="./linkdin.png" alt="social icon" />
        </div>
      </div>
    </div>
  );
}
