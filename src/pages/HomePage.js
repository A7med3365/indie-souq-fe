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
      BgImg:
        'https://s3-alpha-sig.figma.com/img/69c4/6289/d851020acab2051ccbf43d558bf40678?Expires=1698019200&Signature=dVv63wK060hrvaFS2ZPO66Bgu0gQCSDLqyfhc~5h9o5P8b0iHis2COvxOk-EJ7t3TYCq1vFx8C~qBZ~LqQXvcjAbmLDUvBikOVq-nVvhgl-huGz3uglDD~LeRFCoaJKqJfOntnbrdAX7YUL7b-ibnZWeFAvB0OPa5G~zQOs0WtPZtaQ-29w0XfNlv4nIKwU5KKEu4gQrH0s10K3ytGRH1p4diVECiY49t3C8QrxDMhxWAMEsYbLv9B4wZV18yQA5cvlVbNFIe-HGSVmQaUcX0EmPc3WwD9GnkeqgCBn8gOyavxrpMDAbITmlmzq7T1GeWTEjTTd-ue0NV5ll0bn17A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
      percentage: 88,
      label: 'Trending Now',
      title: 'Movie Name',
      by: 'Mohamed Jasim',
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
  let HowItWorks = [
    {
      title: 'Explore the latest features',
      subtitle: 'Discover the freshest films in development, all in one place',
      figure: `<svg xmlns="http://www.w3.org/2000/svg" width="139" height="106" viewBox="0 0 139 106" fill="none"><rect x="10.3438" y="55.7812" width="25.0539" height="16.0066" rx="4.25022" stroke="#F1592D" stroke-width="2.14104" /><rect x="41.6611" y="55.7812" width="25.0539" height="16.0066" rx="4.25022" stroke="#F1592D" stroke-width="2.14104" /><rect x="72.9805" y="55.7812" width="25.0539" height="16.0066" rx="4.25022" stroke="#F1592D" stroke-width="2.14104" /><path d="M120.652 55.7812H108.548C106.201 55.7812 104.298 57.6841 104.298 60.0315V67.5377C104.298 69.885 106.201 71.7879 108.548 71.7879H120.652" stroke="#F1592D" stroke-width="2.14104" /><path d="M98.73 20.9883H5.54856C3.20123 20.9883 1.29834 22.8912 1.29834 25.2385V100.251C1.29834 102.598 3.20123 104.501 5.54856 104.501H116.75C119.097 104.501 121 102.598 121 100.251V39.7787" stroke="#F1592D" stroke-width="2.14104" /><path d="M55.4878 40.6276V30.9509C55.4878 29.3088 57.2707 28.2871 58.6874 29.1174L67.1546 34.0799C68.5733 34.9114 68.5506 36.97 67.1138 37.77L58.6467 42.4843C57.2302 43.273 55.4878 42.2488 55.4878 40.6276Z" stroke="#F1592D" stroke-width="2.14104" /><circle cx="118.215" cy="20.9863" r="19.4863" stroke="#F1592D" stroke-width="2.14104" /><path d="M1.29834 77.1836H16.1741C18.5215 77.1836 20.4244 79.0865 20.4244 81.4338V88.8717" stroke="#F1592D" stroke-width="2.14104" /><path d="M52.1023 88.4905V81.6057C52.1023 79.2584 50.1994 77.3555 47.8521 77.3555H30.6028C28.2554 77.3555 26.3525 79.2584 26.3525 81.6057V88.4905" stroke="#F1592D" stroke-width="2.14104" /><path d="M82.7213 88.4905V81.6057C82.7213 79.2584 80.8184 77.3555 78.4711 77.3555H61.9177C59.5704 77.3555 57.6675 79.2584 57.6675 81.6057V88.4905" stroke="#F1592D" stroke-width="2.14104" /><path d="M114.04 88.4905V81.6057C114.04 79.2584 112.137 77.3555 109.79 77.3555H93.2366C90.8892 77.3555 88.9863 79.2584 88.9863 81.6057V88.4905" stroke="#F1592D" stroke-width="2.14104" /><path d="M1.64453 88.4922H120.65" stroke="#F1592D" stroke-width="2.14104" /><path d="M1.64453 49.5195H120.65" stroke="#F1592D" stroke-width="2.14104" /><path d="M122.474 14.0273C120.685 14.0273 119.109 15.0017 118.215 16.5327C117.321 15.0017 115.745 14.0273 113.956 14.0273C111.145 14.0273 108.845 16.5327 108.845 19.5949C108.845 25.116 118.215 30.7299 118.215 30.7299C118.215 30.7299 127.585 25.1624 127.585 19.5949C127.585 16.5327 125.285 14.0273 122.474 14.0273Z" stroke="#F1592D" stroke-width="2.14104" /></svg>`,
    },
    {
      title: 'Learn more about the feature’s',
      subtitle: "Dive deeper into the feature's details and backstory",
      figure: `<svg xmlns="http://www.w3.org/2000/svg" width="167" height="120" viewBox="0 0 167 120" fill="none"><rect x="1.80469" y="1.66797" width="163.387" height="116.584" rx="3.98955" stroke="#F1592D" stroke-width="2.60785" stroke-linejoin="round" /><ellipse cx="13.2929" cy="10.6034" rx="2.97841" ry="2.97841" fill="#F1592D" /><ellipse cx="22.6527" cy="10.6034" rx="2.97841" ry="2.97841" fill="#F1592D" /><ellipse cx="32.0165" cy="10.6034" rx="2.97841" ry="2.97841" fill="#F1592D" /><ellipse cx="71.1576" cy="88.8925" rx="2.97841" ry="2.97841" fill="#F1592D" /><ellipse cx="80.5194" cy="88.8925" rx="2.97841" ry="2.97841" fill="#F1592D" /><ellipse cx="89.8778" cy="88.8925" rx="2.97841" ry="2.97841" fill="#F1592D" /><path d="M62.3878 39.1133C59.0158 39.1133 56.0452 40.95 54.3592 43.8362C52.6732 40.95 49.7026 39.1133 46.3306 39.1133C41.0317 39.1133 36.6963 43.8362 36.6963 49.6086C36.6963 60.0165 54.3592 70.5994 54.3592 70.5994C54.3592 70.5994 72.0221 60.104 72.0221 49.6086C72.0221 43.8362 67.6867 39.1133 62.3878 39.1133Z" stroke="#F1592D" stroke-width="2.60785" stroke-linejoin="round" /><path d="M14.9971 88.8945H40.5263" stroke="#F1592D" stroke-width="2.60785" stroke-linecap="round" stroke-linejoin="round" /><rect x="106.476" y="26.3477" width="35.741" height="22.9763" rx="3.98955" stroke="#F1592D" stroke-width="2.60785" stroke-linejoin="round" /><rect x="106.476" y="55.2773" width="35.741" height="22.9763" rx="3.98955" stroke="#F1592D" stroke-width="2.60785" stroke-linejoin="round" /><rect x="106.476" y="84.2148" width="35.741" height="22.9763" rx="3.98955" stroke="#F1592D" stroke-width="2.60785" stroke-linejoin="round" /><path d="M155.832 26.7734V74.8536" stroke="#F1592D" stroke-width="2.60785" stroke-linecap="round" stroke-linejoin="round" /><rect x="15.4199" y="26.3477" width="77.4388" height="55.3134" rx="3.98955" stroke="#F1592D" stroke-width="2.60785" stroke-linejoin="round" /></svg>`,
    },
    {
      title: 'Engage with Film Community',
      subtitle:
        "Connect, share, and engage in a thriving film lover's community.",
      figure: `<svg xmlns="http://www.w3.org/2000/svg" width="103" height="114" viewBox="0 0 103 114" fill="none"><path d="M77.8816 51.7194C83.1521 47.4777 86.5236 40.9724 86.5236 33.6803C86.5236 20.8976 76.1612 10.5352 63.3766 10.5352C50.5919 10.5352 40.2314 20.8976 40.2314 33.6803C40.2314 46.4629 50.5939 56.8273 63.3766 56.8273" stroke="#F1592D" stroke-width="2.26616" stroke-linecap="round" stroke-linejoin="round" /><path d="M25.7368 43.6422C20.3455 39.3687 16.8867 32.7604 16.8867 25.3433C16.8867 12.4497 27.3384 2 40.232 2C44.6799 2 48.8364 3.24278 52.3724 5.40328" stroke="#F1592D" stroke-width="2.26616" stroke-linecap="round" stroke-linejoin="round" /><path d="M35.3853 48.6871H21.0269L25.7364 43.6406" stroke="#F1592D" stroke-width="2.26616" stroke-linecap="round" stroke-linejoin="round" /><path d="M51.2866 27.5156H68.6856" stroke="#F1592D" stroke-width="2.26616" stroke-linecap="round" stroke-linejoin="round" /><path d="M51.2866 35.9727H77.4069" stroke="#F1592D" stroke-width="2.26616" stroke-linecap="round" stroke-linejoin="round" /><path d="M61.8594 56.8325H63.3777H82.0313L77.8828 51.7227" stroke="#F1592D" stroke-width="2.26616" stroke-linecap="round" stroke-linejoin="round" /><path d="M30.7599 86.1541C32.7995 84.0293 34.0522 81.1433 34.0522 77.966C34.0522 71.431 28.754 66.1328 22.219 66.1328C15.684 66.1328 10.3838 71.431 10.3838 77.966C10.3838 84.501 15.682 89.7992 22.219 89.7992" stroke="#F1592D" stroke-width="2.26616" stroke-linecap="round" stroke-linejoin="round" /><path d="M5.90256 112.002H38.8789C41.4497 112.002 43.5329 109.814 43.5329 107.116C43.5329 106.587 43.4517 106.063 43.2911 105.562C42.528 103.181 40.5538 98.3708 35.8126 94.5592C30.5065 90.2918 24.9388 89.8498 22.8635 89.8061C22.7109 89.8022 22.5602 89.8061 22.4076 89.82C20.0152 90.0103 15.1769 90.7556 10.2236 94.2064C5.59533 97.4313 3.05228 101.497 1.79364 103.982C1.43488 104.69 1.24658 105.479 1.24658 106.281V107.114C1.24658 109.814 3.32978 112 5.90058 112L5.90256 112.002Z" stroke="#F1592D" stroke-width="2.26616" stroke-linecap="round" stroke-linejoin="round" /><path d="M80.7844 89.7992C87.3214 89.7992 92.6196 84.501 92.6196 77.966C92.6196 71.431 87.3214 66.1328 80.7844 66.1328C74.2494 66.1328 68.9512 71.431 68.9512 77.966C68.9512 81.1433 70.2039 84.0293 72.2435 86.1541" stroke="#F1592D" stroke-width="2.26616" stroke-linecap="round" stroke-linejoin="round" /><path d="M97.0977 112.002H64.1213C61.5505 112.002 59.4673 109.814 59.4673 107.116C59.4673 106.587 59.5486 106.063 59.7091 105.562C60.4722 103.181 62.4464 98.3708 67.1876 94.5592C72.4937 90.2918 78.0615 89.8498 80.1367 89.8061C80.2894 89.8022 80.44 89.8061 80.5926 89.82C82.985 90.0103 87.8234 90.7556 92.7767 94.2064C97.4049 97.4313 99.9479 101.497 101.207 103.982C101.565 104.69 101.754 105.479 101.754 106.281V107.114C101.754 109.814 99.6704 112 97.0996 112L97.0977 112.002Z" stroke="#F1592D" stroke-width="2.26616" stroke-linecap="round" stroke-linejoin="round" /></svg>`,
    },
    {
      title: 'Make a dream happen!',
      subtitle: 'Support filmmakers and reap exclusive rewards!',
      figure: `<svg xmlns="http://www.w3.org/2000/svg" width="136" height="119" viewBox="0 0 136 119" fill="none"><path d="M13.9907 67.2939V67.2939C19.9102 67.2939 24.7089 62.4952 24.7089 56.5758V2.28906" stroke="#F1592D" stroke-width="2.13314"/><path d="M125.462 67.2939H124.733C118.268 67.2939 113.027 62.0529 113.027 55.5878V2.28906" stroke="#F1592D" stroke-width="2.13314"/><path d="M18.8369 67.2939H22.6903C32.388 67.2939 40.2495 59.4324 40.2495 49.7347V2.28906" stroke="#F1592D" stroke-width="2.13314"/><path d="M124.492 67.2939H115.039C105.341 67.2939 97.48 59.4324 97.48 49.7347V2.28906" stroke="#F1592D" stroke-width="2.13314"/><rect x="7.04004" y="1.58203" width="122.237" height="65.7114" rx="3.26333" stroke="#F1592D" stroke-width="2.13314"/><path d="M76.2844 36.2034V31.615C76.2844 31.0272 75.808 30.5508 75.2202 30.5508H49.7922C49.2045 30.5508 48.728 31.0272 48.728 31.615V49.9772C48.728 50.565 49.2045 51.0414 49.7922 51.0414H75.2202C75.808 51.0414 76.2844 50.565 76.2844 49.9772V45.0356" stroke="#F1592D" stroke-width="2.13314" stroke-linecap="round"/><path d="M65.2701 30.549C62.5966 29.3201 60.7402 26.6185 60.7402 23.4833C60.7402 19.1907 64.22 15.7109 68.5126 15.7109C72.8051 15.7109 76.2849 19.1907 76.2849 23.4833C76.2849 26.6185 74.4285 29.3201 71.755 30.549" stroke="#F1592D" stroke-width="2.13314"/><path d="M76.2837 36.2057L87.5889 34.0859V48.5707L76.2837 45.0378" stroke="#F1592D" stroke-width="2.13314" stroke-linecap="round" stroke-linejoin="round"/><path d="M59.3271 99.5119V86.6292C59.3271 85.1599 58.1359 83.9688 56.6666 83.9688H41.4969C40.0276 83.9688 38.8364 85.1599 38.8364 86.6292V99.5119" stroke="#F1592D" stroke-width="2.13314"/><path d="M79.1147 99.5119V86.6292C79.1147 85.1599 77.9235 83.9688 76.4542 83.9688H61.2845C59.8152 83.9688 58.624 85.1599 58.624 86.6292V99.5119" stroke="#F1592D" stroke-width="2.13314"/><path d="M98.895 100.095V86.6292C98.895 85.1599 97.7038 83.9688 96.2345 83.9688H81.0648C79.5954 83.9688 78.4043 85.1599 78.4043 86.6292V100.095" stroke="#F1592D" stroke-width="2.13314"/><path d="M30.0114 101.043C30.0114 100.163 30.725 99.4494 31.6053 99.4494H46.775C47.6553 99.4494 48.3689 100.163 48.3689 101.043V117.1H30.0114V101.043Z" stroke="#F1592D" stroke-width="2.13314"/><path d="M49.798 101.043C49.798 100.163 50.5116 99.4494 51.3919 99.4494H66.5616C67.4419 99.4494 68.1555 100.163 68.1555 101.043V117.1H49.798V101.043Z" stroke="#F1592D" stroke-width="2.13314"/><path d="M69.5793 101.043C69.5793 100.163 70.2929 99.4494 71.1732 99.4494H86.3429C87.2232 99.4494 87.9368 100.163 87.9368 101.043V117.1H69.5793V101.043Z" stroke="#F1592D" stroke-width="2.13314"/><path d="M89.362 101.043C89.362 100.163 90.0756 99.4494 90.9559 99.4494H106.126C107.006 99.4494 107.719 100.163 107.719 101.043V117.1H89.362V101.043Z" stroke="#F1592D" stroke-width="2.13314"/><path d="M1.38916 117H134.578" stroke="#F1592D" stroke-width="2.13314" stroke-linecap="round"/></svg>`,
    },
  ];
  return (
    <div className="relative">
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
      <div className="w-[1250px] m-auto flex overflow-x-scroll hide-scroll-bar flex-nowrap gap-[24px] snap-mandatory snap-x">
        {trending.map((card) => {
          return (
            <div className="inline-block snap-center">
              <div className="relative w-[560px]">
                <TrendCard content={card} />
              </div>
            </div>
          );
        })}
      </div>
      <div className="text-gray2 text-4xl text-center font-bold mt-[100px] mb-[40px]">
        How it Works in IndieSouq
      </div>
      <div className="grid grid-cols-2 gap-[32px] h-[530px] max-w-[1140px] m-auto">
        {HowItWorks.map((card) => {
          return (
            <div className="bg-[#F6F6F6] rounded-[27px] flex gap-[40px]">
              <div
                dangerouslySetInnerHTML={{ __html: card.figure }}
                className="w-[164px]"
              ></div>
            </div>
          );
        })}
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
    </div>
  );
}
