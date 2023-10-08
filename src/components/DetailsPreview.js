import React from 'react';
import { useState } from 'react';

export default function DetailsPreview() {
  const [selected, setSelected] = useState(0);
  let images = [
    'https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg',
    'https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg',
    'https://s3-alpha-sig.figma.com/img/69c4/6289/d851020acab2051ccbf43d558bf40678?Expires=1697414400&Signature=F2Lfn1Kn-Fj-Wymz~-6E~103dKRK8oof13xEhAhq4IWoQxX7ieen1ZcvAOT5P6b3n-bOcqMs4-lgSctjB-s2G~R~kdhE1SfHmGyjiqwvanY95eBScCyVM5Ekh~bsHYjmJltqgun3XvutCVWjji2EjreKFspRGTURAsEQPdQy9j3B8LQz2mAVk2ZxD8oo-R4Qc8TRRf2bF6frFTHgnjpd48Y8GiFayr8mpDK~JF6eqBssnXqsI62fsACObts6n5sjT00RLwRQTe~uEHwAH21dYA9geD6fxYKhfoY4oeehpeNQA3~iD5wxPSNkbiKVQZzpqZjd7Baf-8RC05Y2ET--1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/956d/d96f/862bc77223ba455cf9e72786d7732c82?Expires=1697414400&Signature=fZGy8PfXBv3fXRW9Y3e6Yyu5htnWRZpy7wpXlg1OV3~Uri1LBWW6o1m25F0jnsn2UX9WRdrO1-fTtDXikA~24XnLLDokRm2IV9LLNFVUvMF4Y6dTzJeEQ3zkbtyG6SFevKD5sU9IhKGj40E6DSuS1jF5tAOZvC3G88405Jz90~ibw7FGH6iUW9V6MurRUT4SZNYI3oQ-OiryUWpKhtxv1gYgw3AhIpBKJxE6pBKgb-rOzW6bwwMMJy8029x5Mfo1hSJqrGPPzxQxEmI-Fmg3zIMUyFYzprF5KKiwstgU2WXqge4IMe-qFpDMfX7V69oe2J7JFSGO4BKbR8-Hdvj8Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg',
    'https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg',
    'https://s3-alpha-sig.figma.com/img/69c4/6289/d851020acab2051ccbf43d558bf40678?Expires=1697414400&Signature=F2Lfn1Kn-Fj-Wymz~-6E~103dKRK8oof13xEhAhq4IWoQxX7ieen1ZcvAOT5P6b3n-bOcqMs4-lgSctjB-s2G~R~kdhE1SfHmGyjiqwvanY95eBScCyVM5Ekh~bsHYjmJltqgun3XvutCVWjji2EjreKFspRGTURAsEQPdQy9j3B8LQz2mAVk2ZxD8oo-R4Qc8TRRf2bF6frFTHgnjpd48Y8GiFayr8mpDK~JF6eqBssnXqsI62fsACObts6n5sjT00RLwRQTe~uEHwAH21dYA9geD6fxYKhfoY4oeehpeNQA3~iD5wxPSNkbiKVQZzpqZjd7Baf-8RC05Y2ET--1g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/956d/d96f/862bc77223ba455cf9e72786d7732c82?Expires=1697414400&Signature=fZGy8PfXBv3fXRW9Y3e6Yyu5htnWRZpy7wpXlg1OV3~Uri1LBWW6o1m25F0jnsn2UX9WRdrO1-fTtDXikA~24XnLLDokRm2IV9LLNFVUvMF4Y6dTzJeEQ3zkbtyG6SFevKD5sU9IhKGj40E6DSuS1jF5tAOZvC3G88405Jz90~ibw7FGH6iUW9V6MurRUT4SZNYI3oQ-OiryUWpKhtxv1gYgw3AhIpBKJxE6pBKgb-rOzW6bwwMMJy8029x5Mfo1hSJqrGPPzxQxEmI-Fmg3zIMUyFYzprF5KKiwstgU2WXqge4IMe-qFpDMfX7V69oe2J7JFSGO4BKbR8-Hdvj8Ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  ];
  return (
    <div className="w-full relative flex flex-col gap-[42px]">
      <img
        className="rounded-[54px] w-[1000px]"
        alt="previewed"
        src={images[selected]}
      />
      <div class="flex flex-col bg-white w-full relative">
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap gap-[20px]">
            {images.map((image, i) => {
              return (
                <div key={i} class="inline-block">
                  <div
                    class="w-[158px] h-[118px] max-w-xs overflow-hidden rounded-[25px] shadow-md bg-gray1 hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    onClick={() => {
                      setSelected(i);
                    }}
                  >
                    <img
                      alt={i}
                      src={image}
                      className="object-cover h-[118px]"
                    />
                  </div>
                </div>
              );
            })}
            <div className="h-full w-[158px]"></div>
          </div>
        </div>
        <div className="h-full w-[158px] absolute right-0 bg-gradient-to-l from-white"></div>
      </div>
    </div>
  );
}
