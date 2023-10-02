import React from 'react';
import Carousel from '../components/Carousel';
import TrendCard from '../components/TrendCard';
import SelectedCreators from '../components/SelectedCreators';
import SepLine from '../components/SepLine';
import Faq from '../components/Faq';
import Footer from '../components/Footer';
export default function HomePage() {
  let slides = [
    './banner-sample.png',
    './banner-sample.png',
    './banner-sample.png',
  ];
  let creators = [
    {
      name: 'Oliver Anderson',
      role: 'Film Maker',
      image: './oliver.png',
    },
    {
      name: 'Ethan Mitchell',
      role: 'Director',
      image: './ethan.png',
    },
    {
      name: 'Benjamin Parker',
      role: 'Film Producer',
      image: './ben.png',
    },
    {
      name: 'Noah Walker',
      role: 'Screen Writer',
      image: './noah.png',
    },
  ];
  const defaultContent =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

  let AccordionContent = [
    {
      label: 'How does funding work in IndieSouq?',
      text: defaultContent,
    },
    {
      label: 'How the investment managed on this platform?',
      text: defaultContent,
    },
    {
      label: 'What are the potential returns on film investments?',
      text: defaultContent,
    },
    {
      label: "How can I be updated of the films I've invested in?",
      text: defaultContent,
    },
  ];
  return (
    <div>
      <div className="max-w-screen-2xl m-auto">
        <Carousel slides={slides} />
      </div>
      <div className="max-w-[1150px] m-auto gap-5 pt-8 flex justify-center">
        <TrendCard BgImg={'./trending-1.jpeg'} />
        <TrendCard BgImg={'./trending-2.png'} />
      </div>
      <SepLine />
      <div className="text-gray2 text-4xl text-center font-bold">
        Our Creators
      </div>
      <div className="max-w-screen-2xl m-auto my-8">
        <SelectedCreators creators={creators} />
        <div className="text-blue-400 underline text-2xl font-medium text-center">
          View All
        </div>
      </div>
      <SepLine />
      <div className="text-gray2 text-4xl text-center font-bold">
        What User’s Say About Us
      </div>
      <SepLine />
      <div className="text-gray2 text-4xl text-center font-bold">
        Frequently Asked Questions
      </div>
      <div className="max-w-screen-lg m-auto my-4">
        <Faq content={AccordionContent} />
      </div>
      <div className="bg-footerBg w-full mt-20">
        <div className="max-w-[1150px] m-auto text-white px-10 py-28 xl:px-0">
          <Footer />
        </div>
      </div>
    </div>
  );
}
