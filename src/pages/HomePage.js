import React from 'react';
import HeroSection from '../components/HeroSection';
import TrendCard from '../components/TrendCard';
import SelectedCreators from '../components/SelectedCreators';
import SepLine from '../components/SepLine';
import Faq from '../components/Faq';
import SelectedComments from '../components/SelectedComments';
import HomeSection from '../components/HomeSection';
import HomeNews from '../components/HomeNews';

import { useNavigate } from 'react-router-dom';
import HomeHowItWorks from '../components/HomeHowItWorks';
import ScrollButton from '../components/ScrollButton';

export default function HomePage({ setCurrentUser }) {
  const navigate = useNavigate();

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
  let creators = [
    {
      name: 'Sarra Alshehhi',
      role: 'Director',
      image:
        'https://s3-alpha-sig.figma.com/img/e26c/2905/aab29afb825e367af32e5b72498089a9?Expires=1698624000&Signature=LJMTwt8wlT6LiyNfGEDW8t-CIfsSfK4x3s96WRvzXbdkYjza3-6lashN5o3CIfM5LOU4TLLwaOVd5KNv~TU4R~XNV8GIlNj0ZsrCAJLV42H6wY~p~99gSLG2k2x41-0XW8C-kgX5GRmAmf0Of9bPm79oynuF4IGN2PoA9Q2FJVnNQcNIy7-AmM4N8f-YJ1HuBOFe1vDOJQINWHqQpjDTCDdXuZ-OdAan3LBn0l3kCAR9ucxV58gf4udbyA0mrVn-utGyy~TY87KtiuSEx6nMEak6JedL3t0CdR8e8JNgYeLwYXMv3j~tmhGl8~UgzIP358XvJip027FtXhmpEuxNgQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Abdulrahman Almadani',
      role: 'Director',
      image:
        'https://s3-alpha-sig.figma.com/img/3d50/ccc4/72e06555ecdaddf6d13407da182e0457?Expires=1698624000&Signature=I3DFu2DYnHwcujLg3OjQgyySp~KAn-5V5hQg2iPLU-BGaLBDlhh-jqp2DpklC0IFW4nQnnblJMK3Zv-JOzzmnLqzwcGHQXWb45jleMBdiMRL6sYKPRi-ZTp--e0MvbSNeWzHFqkt~JkWiaNzw7USA9RWT3LEREDfGqfrJzfQYtSNYAmPT-idsdlf1cXvITKrkV4qZCvB1EXy1AmAhk4NZEHdJOKTjJRa5NnZlgce3uKgP9ZjM1apmRA3CEN~cUBhs55Tk~LoUsU0hFCl1T-sG3SIALFf7~JutKoiqU6JWfQ5OfS2EyKvySBBSEW0~FmszTjVZ1cjijSSjElETNTDcg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Hala Matar',
      role: 'Director',
      image:
        'https://s3-alpha-sig.figma.com/img/c5ab/e0f9/259a25d0f0b90920286523d80a55ace8?Expires=1698624000&Signature=nDJrRkGdB~xu0EpQQ35nXFHrhRtWt6WiqwdUK~DxRDhZZ6PqdqlTiqAAb~zlgLPS23p6tfHmVvX4Ris5oN7iIWpKEAWqgsKj4~MQDRWQ-b5elMQgd~rIxdrX9pMaQhSANfIeTZ9UVhLklN309SQMCHeT8zPtxcT0nkLUj3jN9sTWNoVqROnyAQOsQmFm-GIsksgqE-XAuXF974K5OUPLAUCNQUy1Gdic0VRE-ebxdTTJpa2xZLsZRw2DheJmMuk8~EQX2Jovc0nZxYq1GihmXjO5vB8wusI0RRdSeE4YwwG96v-2u7gmLK~yfoUJ6J01LNH5d1TMYuUKmdb~tFGPAw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Eman Alsabah',
      role: 'Screenwriter',
      image:
        'https://s3-alpha-sig.figma.com/img/c5ca/141f/b9dbb96c8367255e016576298b0f644a?Expires=1698624000&Signature=SRVIiOo5zZK0L8I~aR-VD0Zpe~kyzWBagSeffg5~8wmZuJB6sMUUbVUS8ciOgpgPYxpfwU9HuGHxGDPhXBlcnsRR7UyNco3ZmFwn9eGrGaShQTZl4v8lS--Cj-LaG-8YgGkPjoNvFhFyFpeZXZuBo6xcwanQQYdBL4g2eN4zDkzS7gHr4DNp~2~4iEuBDjfRBTN4ojJb~VyQPvckWs2xcsRCwT2VZ3CISP3C6t9yBXQupQkTSnKC4~Y1j1Q7HSKIVBXifpkOMecAYZBt79mTsV1wQ4b5aHmmakSO5QRQAz6-LfNu8TyrutDYJybqx7fM3gRFjws4A7lGoazPUZHzfg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      BgImg:
        'https://s3-alpha-sig.figma.com/img/42bd/e6f1/ee943b12e6970b21fbe8ed50c3af6db4?Expires=1698624000&Signature=cl4PQh4WtEWJeN5s0Ddq-T47ahNGbs~EGsiDpF7A-fSi0CHMfNm-sCZW1ZgkLH-6qpJ~I48Au6EWc8px~FU7PKg9X5Wf6hcmM6hUanyUDEHFYnWaxfR04KHq111mKOIbO65gTTmYBbQzcQFPtx~i8IGrIFFwfIkEbkKCI42uTh7L1UNQDJztXrUwKFVBsUg~8lJQPFbS0JLWS-gS4hEsOG~40s~EihnlDmZrZp3pi52Ba3lhtEYWoEMKUI5w8DpSw5DtymaFPYY~U7Mkt52rLFFKRAqBEb~G6wm36WedIhc-HMPpFc1rucKQMm3By09wmBCV7Ooh5IXtWOvYcqYgxw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      percentage: 88,
      label: 'Trending Now',
      title: 'a Small Dream',
      by: 'Sarra’a Alshehhi',
    },
    {
      BgImg:
        'https://s3-alpha-sig.figma.com/img/a430/0c24/46063682ca3be0901a04ec8fe603da43?Expires=1698019200&Signature=LIBRi8JDXDcyEe8pGVn20fOMgJgXH7iSe0Jsif2PCtNbSw-LZOrQkJK2ZAQdtUDp0tf9Z1qqg63P36HtIK34LwcJrFhlWakl8Cbw6K~AVzJ9AvZ86frtbbtwzvwpD1bdOOot2uHMh8S2c07kndrW77ec3cEddTwJOoA1uViL043~muElgmskOMEDtZ~0oljHH0ftiY76jwtzUxHBCHPDjjqFweNMNe26lIsVicPWPOrMnV1IieBX8rBSZ~quPOb334BENUAtDbovTjCgTq~Z9DDH7ivxgBGCYeCdsjW3sRcMidUwmV~wsilCuLamNwPYgFtd58DbupE~xeCpmTWsHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      percentage: 20,
      label: 'Most Viewed',
      title: 'OASIS',
      by: 'Salman Ali',
    },
    {
      BgImg:
        'https://s3-alpha-sig.figma.com/img/b19b/8e5a/f3c103e393f8da36418428b6b63c43c3?Expires=1698019200&Signature=Cg1arHlbMNcoySUs1etUeWDdzByYLUA8~nTkotxgxB1s4UlRPpGK85lUvfvDg3~7jveJsHBBC12P2SXNw4YxXhyL3N9hgJ2jt~4TDk~YXGGU1s8wGY44urV4WbG08rXvbvIrqyGGmv4HRuYOOLmOAVw82XhPgwuinAa2aiQGFDd27kPalqcYqboyKvlYjAn8NznUgw4fdRXiuDyygFNGLCmwbMN9vJ8AiQLA-Uz5CUTPHO59HRLkvov0N~SF8FpyZGiaWBh31VjGIdiUb~n0nCM866XCAb2E8Cvu9YYObb10XdsMhLk7-lL8B61v7pRT9kVll4dkeRZ5uSo1jIlGBQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      percentage: 60,
      label: 'Most Viewed',
      title: 'Beyond the Glass',
      by: 'Salman Ali',
    },
  ];

  return (
    <div className="relative">
      <div className="max-w-[1440px] m-auto">
        <div className="w-full h-[113px] p-2.5 bg-white justify-center items-center gap-[38px] inline-flex">
          <div className="text-orange text-3xl font-normal leading-7">
            Reimagine entertainment. Invest in new content.
          </div>
        </div>
      </div>
      <div className="max-w-[1440px] m-auto">
        <HeroSection slides={slides} />
      </div>
      <div className="my-[48px]">
        <HomeSection
          title={'Trending Projects'}
          onClick={() => {
            navigate('/films');
          }}
        />
      </div>
      <div className="w-[1250px] m-auto flex overflow-x-scroll hide-scroll-bar flex-nowrap gap-[24px] snap-mandatory snap-x">
        {trending.map((card) => {
          return (
            <div
              className="inline-block snap-center cursor-pointer"
              onClick={() => {
                navigate('/details');
              }}
            >
              <div className="relative w-[560px]">
                <TrendCard content={card} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="my-[111px]">
        <div className="text-gray2 text-4xl text-center font-bold mt-[100px] mb-[40px]">
          How it Works in IndieSouq
        </div>
        <HomeHowItWorks />
      </div>
      <div className="my-[48px]">
        <HomeSection
          title={'Trending Creators'}
          onClick={() => {
            navigate('/creators');
          }}
        />
      </div>
      <div className="max-w-screen-2xl m-auto my-8">
        <SelectedCreators creators={creators} />
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
        Our Projects in The News
      </div>
      <HomeNews />
      <SepLine />
      <div className="text-gray2 text-4xl text-center font-bold pb-12">
        Frequently Asked Questions
      </div>
      <div className="max-w-screen-lg m-auto my-4">
        <Faq content={AccordionContent} />
      </div>
      <ScrollButton />
    </div>
  );
}
