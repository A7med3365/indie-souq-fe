import React from 'react';

export default function Footer() {
  return (
    <div className="flex-col gap-20">
      <div className="pb-10">
        <img src="./logo-white.png" />
      </div>
      <div class="grid grid-cols-4 gap-12 content-around w-full py-10 text-2xl">
        <div>About</div>
        <div>Guide for Creators</div>
        <div>News</div>
        <div>Contact Us</div>
        <div>Who We Are</div>
        <div>Guide for Supporters</div>
        <div>Privacy</div>
        <div>Term of Use</div>
        <div>Our Mission and Values</div>
        <div>Why IndieSouq</div>
        <div>Partners</div>
        <div>How it Works</div>
      </div>
      <div className="flex w-full justify-between">
        <div className="justify-self-start self-center">© 2023 IndieSouq</div>
        <div className="justify-self-end flex gap-3">
          <div className="text-base font-bold self-center">Follow Us</div>
          <img src="./facebook.png" />
          <img src="./tweeter.png" />
          <img src="./instgram.png" />
          <img src="./linkdin.png" />
        </div>
      </div>
    </div>
  );
}
