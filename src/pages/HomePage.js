import React from 'react';
import Carousel from '../components/Carousel';
import TrendCard from '../components/TrendCard';
import SelectedCreators from '../components/SelectedCreators';
import SepLine from '../components/SepLine';
import Faq from '../components/Faq';
import SelectedComments from '../components/SelectedComments';
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
  let trending = [
    {
      BgImg: './trending-1.jpeg',
      percentage: 88,
      label: 'Trending Now',
      title: 'Movie Name',
      by: 'Mohamed Jasim',
    },
    {
      BgImg: './trending-2.png',
      percentage: 20,
      label: 'Most Viewed',
      title: 'OASIS',
      by: 'Salman Ali',
    },
  ];
  return (
    <div>
      <div className="max-w-[1440px] m-auto">
        <Carousel slides={slides} />
      </div>
      <div className="max-w-[1150px] m-auto gap-5 pt-8 flex justify-center">
        <TrendCard content={trending[0]} />
        <TrendCard content={trending[1]} />
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
      <div className="flex justify-center my-12">
        <SelectedComments />
      </div>
      <SepLine />
      <div className="text-gray2 text-4xl text-center font-bold pb-12">
        Frequently Asked Questions
      </div>
      <div className="max-w-screen-lg m-auto my-4">
        <Faq content={AccordionContent} />
      </div>
    </div>
  );
}
