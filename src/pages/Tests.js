import React from 'react';
import HeroSection from '../components/HeroSection';

export default function Test() {
  let slides = [
    {
      image: './slide1.png',
      content: {
        title: 'The Skeleton Whale',
        subtitle: 'Feature Film',
        description:
          'When Mariam discovers a talking skeleton whale, she must journey across a desolate Arabia with her companions to save the Whale, her home and everyone in it',
        tags: ['Animation', 'Sci-Fi', 'Action'],
      },
    },
    {
      image: './slide2.png',
      content: {
        title: 'Small Dream',
        subtitle: 'Short Film',
        description:
          'Living in Ras Al Khaimah, UAE, a conservative society, Maitha has a small and seemingly simple dream of swimming in the sea that she frequents.',
        tags: ['Drama', 'Emotional'],
      },
    },
    {
      image: './slide3.png',
      content: {
        title: 'Spinster',
        subtitle: 'Feature Film',
        description:
          'As an Emirati woman pushes 30, her family pressures her to settle down. Torn between two choices, Amal must marry to satisfy her family or stand alone.',
        tags: ['Drama', 'Emotional'],
      },
    },
    {
      image: './slide4.png',
      content: {
        title: 'How to Not Get Married',
        subtitle: 'Feature Film',
        description:
          'When Shahad, a niqabi and aspiring stand-up comedian, falls for her mentor, she learns love and marriage are more complex than her jokes portray.',
        tags: ['Comedy', 'Romantic comedy'],
      },
    },
    {
      image: './slide5.png',
      content: {
        title: 'Reimagine entertainment Invest in new content',
        subtitle: '',
        description: '',
        tags: [],
      },
    },
  ];
  return (
    <div className="w-[1440px] m-auto">
      <HeroSection slides={slides} />
    </div>
  );
}
