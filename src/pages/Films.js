import React from 'react';
import Search from '../components/Search';
import FilmCard from '../components/FilmCard';

export default function Films() {
  let films = [
    {
      name: 'Ziggy and Moon',
      by: 'Ahmed Al-Mansouri',
      type: 'Short',
      genre: ['Action', 'Adventure'],
      img: 'https://s3-alpha-sig.figma.com/img/69c4/6289/d851020acab2051ccbf43d558bf40678?Expires=1697414400&Signature=F2Lfn1Kn-Fj-Wymz~-6E~103dKRK8oof13xEhAhq4IWoQxX7ieen1ZcvAOT5P6b3n-bOcqMs4-lgSctjB-s2G~R~kdhE1SfHmGyjiqwvanY95eBScCyVM5Ekh~bsHYjmJltqgun3XvutCVWjji2EjreKFspRGTURAsEQPdQy9j3B8LQz2mAVk2ZxD8oo-R4Qc8TRRf2bF6frFTHgnjpd48Y8GiFayr8mpDK~JF6eqBssnXqsI62fsACObts6n5sjT00RLwRQTe~uEHwAH21dYA9geD6fxYKhfoY4oeehpeNQA3~iD5wxPSNkbiKVQZzpqZjd7Baf-8RC05Y2ET--1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Animal',
      by: 'Fatima Hassan',
      type: 'Short',
      genre: ['Horror', 'Crime'],
      img: 'https://s3-alpha-sig.figma.com/img/956d/d96f/862bc77223ba455cf9e72786d7732c82?Expires=1697414400&Signature=fZGy8PfXBv3fXRW9Y3e6Yyu5htnWRZpy7wpXlg1OV3~Uri1LBWW6o1m25F0jnsn2UX9WRdrO1-fTtDXikA~24XnLLDokRm2IV9LLNFVUvMF4Y6dTzJeEQ3zkbtyG6SFevKD5sU9IhKGj40E6DSuS1jF5tAOZvC3G88405Jz90~ibw7FGH6iUW9V6MurRUT4SZNYI3oQ-OiryUWpKhtxv1gYgw3AhIpBKJxE6pBKgb-rOzW6bwwMMJy8029x5Mfo1hSJqrGPPzxQxEmI-Fmg3zIMUyFYzprF5KKiwstgU2WXqge4IMe-qFpDMfX7V69oe2J7JFSGO4BKbR8-Hdvj8Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Claude',
      by: 'Khalid Abdel Rahman',
      type: 'Short',
      genre: ['Romantic', 'Drama'],
      img: 'https://s3-alpha-sig.figma.com/img/b19b/8e5a/f3c103e393f8da36418428b6b63c43c3?Expires=1697414400&Signature=Molns6uHfl7HXq6QmuShupZyPokByQ0HYro7tqywzMbr3awGUGjKvGkKlOQx5kKb9-a3p16UVBCsSBzGIEoL8VCPtyazFsIC08Adj3Kou1VqjY7bRkPGaTFwjXSiC9szKt49ZiezROA6nED1qT0odkFBvO2ERqWoehXzwwcfC6EF8y14FgCy5JRJxZO-2fuXJzr-AJuyy1AIHPA-oYZH9Y0NBgjVXLH1sPMnVduUEDuKZE4sWhzkZpSxDiV~4ecxr5-Z4xSdJIbz38Ckm0hGrH4~zK~zHn863cQPeFdHzPmWFyApvqW~b7V5JLu3BYXE4YjnSB-V9s9~R8~sSFVj0w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
  ];
  return (
    <div>
      <div className="flex justify-center my-[88px]">
        <Search />
      </div>
      <div class="flex flex-col bg-white w-full max-w-[1440px] m-auto relative gap-[36px]">
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap gap-[33px]">
            {films.map((film, i) => {
              return (
                <div key={i} class="inline-block">
                  <FilmCard film={film} />
                </div>
              );
            })}
          </div>
        </div>
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap gap-[33px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((s) => {
              return (
                <div key={s} class="inline-block">
                  <div class="w-[380px] h-[241px] max-w-xs overflow-hidden rounded-[59px] shadow-md bg-gray3 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-[100px] text-white text-center">
                    {s}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap gap-[33px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((s) => {
              return (
                <div key={s} class="inline-block">
                  <div class="w-[380px] h-[241px] max-w-xs overflow-hidden rounded-[59px] shadow-md bg-gray3 hover:shadow-2xl transition-shadow duration-300 ease-in-out text-[100px] text-white text-center">
                    {s}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
