import React from 'react';
import Carousel from '../components/Carousel';
import TrendCard from '../components/TrendCard';
import SelectedCreators from '../components/SelectedCreators';
import SepLine from '../components/SepLine';
import Faq from '../components/Faq';
import SelectedComments from '../components/SelectedComments';
import HomeSection from '../components/HomeSection';
import HomeNews from '../components/HomeNews';

import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  let slides = [
    './banner-sample.png',
    './banner-sample.png',
    './banner-sample.png',
  ];
  let creators = [
    {
      name: 'Ali Alnajjar',
      role: 'Film Director',
      image:
        'https://s3-alpha-sig.figma.com/img/d823/55ae/fcdea021324bfe7bbcff48925da880d2?Expires=1698019200&Signature=aDBUKSXubmJ5Z~s2y1tnf~vHiANbVCG~dzxLbVQaoqhhc0ZIxjKQa0egiX4qOa7JZAoehhANIaOIDEPjg8WXN9asYfFF56JJ5m6AVMVLXFnV95qC5BLMi2HDUsZHnzghtY59EZIgZG~ubwuEZxLDFFnnQjgjqbFL9V-7WPvgJUjVkKNqa2olvBz9GyQNVqrUCD0Qitt2TMhM-6Fe~fogQ3PQCd0ceOdjqvPXHWiFe~iqqkIyHpYW4cmZ69jeAPCAMtBlfvEeOawo3C5MNTM8nn3a9XK6cpUXxXojpbHkoAJcX2gh1OTBkBhtv~YqtB0-bTP39-h3I3tvVtI~7qoOlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Ahmed Sharif',
      role: 'Film Producer',
      image:
        'https://s3-alpha-sig.figma.com/img/84fe/8d78/ac4191f087dbcdb8045605105a41521b?Expires=1698019200&Signature=Akrdv8qX0QkyuDaqTd9XwXRPhDaLhUq1jY2NMmmhMy7C1Oxwq1kYwZIJWJZqaiEv0ne73kx-flMQMPj3G9g1HV6Hrj0lJTbr5ybqp2wQGg8UJB~2OQz3aYMMe9tSq46Caj78oWEfdZ51mjtnpSHZFH53MymNJ15roOpaQ9E1PsM8t5SdY6XnTmyKcTPJzS0VdaiBFXgy0jrEtBS84oJ8C3dJ6xHMnL2loc59nGNOR1yADX3pJay6KEhrIUbdsG0SjwuGuRXfZvHONlWLac7UXTRY7ugd7Ztf~UgERpv-8UNP7tm1ci5hIUMyftUvNSXeCYUOD3Mb52E9g08B9RU4zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Sami Rashdan',
      role: 'Film Producer',
      image:
        'https://s3-alpha-sig.figma.com/img/821d/1d04/7f6d58a748ffa632159944311cbbba65?Expires=1698019200&Signature=fOz0xTVjqxHNAzUFm-gIiExNzsmgN3aaOhUdKC3FI91uBVjzPwlG~5JDdhyclOiQ9uRHMN~P0sOxhbYhVpRb18w3-VZhF2M9ylBeBEqL1nBpku6dhxwUk7zQ9Cf-E2qX9C6J2PIdgWKZyFbN0o7gyE0VcI2XHg4ytTDQ1QbO0r4r4udWXSplLcQ~tIo5DPq89jK64m2yPN3P3HnpQP0RRUFLqYXq7hD7Wq6zKMiv~2M6w2KF3ow5wgDHvKYjTKu~GP~c~cgtVLsMHGuJDnyw-IZ5z4tLtvyukPlTLayLQ3cpDFYlDmnqY1vPx5n8s2GtamIKk3QoFYPPsZAREMYoiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Khaled Janahi',
      role: 'Actor',
      image:
        'https://s3-alpha-sig.figma.com/img/4277/6a70/d28e0713e0af57da6ed45a2292e9c76a?Expires=1698019200&Signature=E4buKSdXm6~37ghO9elS08XkSNLUnwWI7mEI-C~MO7K1q~tF1eLV8ztEDba9~UbQEASAUEsrfmjEOl~P3oKJ1FLHzfk9~7nj07bV-W8M-RkCV971OhWdysX3HuFLM6oS0vLIhKJHSedvIGqWwo4XYwXLHU8-an0IInW5p-hOlyjTrUf-GMazwFFzhFDNonh7cTr8Ly9cbHsy6YGSnAS7SlgA1XL8EV3rSGeOrq2Q5pUs2DQC1iglfnjv-2h4rIRQHKD5WzVEx1-UpXVcwWDuAWcS2PNIrzKk4Sbw7SHDyJ-Hz6o~oI-m1NS3UkJtLf9f5SHx0yEeY~besuGvmgMj0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
      <div className="my-[48px]">
        <HomeSection
          title={'Trending Projects'}
          onClick={() => {
            navigate('/films');
          }}
        />
      </div>
      <div className="max-w-[1150px] m-auto gap-5 flex justify-center">
        <TrendCard content={trending[0]} />
        <TrendCard content={trending[1]} />
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
    </div>
  );
}
