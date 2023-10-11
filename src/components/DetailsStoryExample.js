import React from 'react';

export default function DetailsStoryExample() {
  const text = 'text-[24px] leading-[29px] text-[#656565] font-normal';
  const heading =
    'text-[32px] leading-[39px] text-[#656565] font-bold mb-[33px]';
  return (
    <div className="flex flex-col gap-[74px]">
      <div className="w-[690px] h-[207px] px-[92px] py-[52px] rounded-[25px] bg-[#F3F3F3] mt-[70px]">
        <p className="text-[24px] leading-[29px] text-[#656565] font-semibold">
          “The world dies over and over again, but the skeleton always gets up
          and walks.”
        </p>
        <p className="text-[24px] leading-[29px] text-[#656565] font-normal mt-[16px]">
          - Henry Miller
        </p>
      </div>
      <div>
        <h1 className={heading}>The Concept</h1>
        <p className={text}>
          When Mariam discovers a talking skeleton whale, she must journey
          across a desolate Arabia with her companions to save the Whale, her
          home and everyone in it
        </p>
      </div>
      <div>
        <h1 className={heading}>The Characters</h1>
        <p className={text}>
          When Mariam discovers a talking skeleton whale, she must journey
          across a desolate Arabia with her companions to save the Whale, her
          home and everyone in it
        </p>
      </div>
      <div>
        <h1 className={heading}>
          The Feeling
          <br />
          <br />
          Dusty, Barren, Inhospitable
          <br />
          <br />
          <h2 className="font-normal">
            The dusty post-apocalyptic setting of MAD MAX meets the mythical
            monsters of GUILLERMO DEL TORO’s films
          </h2>
        </h1>
        <p className={text}>
          A world suffering from climate change, limited resources, and all that
          we fear. This destruction has brought mythical creatures out of
          hiding, fighting humans for survival. Most humans have retreated to
          the Dome, the only habitable structure in the region. Everyone else
          lives on the Fringe.
        </p>
      </div>
      <img
        alt="concept"
        src="https://s3-alpha-sig.figma.com/img/a724/a3d5/4c6a4aa17f08f7a038d45e49cd0a7022?Expires=1698019200&Signature=DCSGw~2U99Gw19qilJXU6ZdRThYTjibrAZEOGPxWsgL7cj9KjCGaQhlWOETe4ahdWOyHLkNvwEmfcBTCVaGuU8msHecP0tozi7GNcp5Wg8w5LTCLVax8wm2MKjTnjepxdsUc7Ie3phqo5iTvuiIV9yhUne86YxalqdspCzWJ7kVM2cTS~Z4f-m4Mrz4vIqE76ClTCXY03PNHjLY3EQNUhTjmM5rX5pYkh0hjH3BCThVRbhuXrXSXJfRHvndf5Tp~7qTDN7oWnpNJwmzd-hxROTg-wfoxYNYVnOdVfT~rQ1kG1gxbNYANZTkzrt6zlJwPuGqRBBc2sZ75ukz2rIFTHw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
      />
      <div>
        <h1 className={heading}>Initial Renders</h1>
        <p className={text}>
          When Mariam discovers a talking skeleton whale, she must journey
          across a desolate Arabia with her companions to save the Whale, her
          home and everyone in it
        </p>
      </div>
      <div>
        <h1 className={heading}>The Concept</h1>
        <p className={text}>
          When Mariam discovers a talking skeleton whale, she must journey
          across a desolate Arabia with her companions to save the Whale, her
          home and everyone in it
        </p>
      </div>
      <div>
        <h1 className={heading}>The Story</h1>
        <p className={text}>
          In a post-apocalyptic world, The Skeleton Whale follows Mariam, a girl
          who lives on a desolate island, where demons and creatures have come
          out of hiding. When the sea dries up completely, she discovers the
          remnants of the sea, its spirit, in the form of a talking skeleton
          whale. To save the village that shunned her, she must journey with her
          companions through a wasteland filled with creatures and humans
          hellbent on stopping her. She must return a skeleton whale to its
          original form and find faith when there’s no hope.
        </p>
        <ul className="text-[24px] leading-[29px] text-[#656565] font-normal mt-[33px] list-disc list-outside pl-[38px]">
          <li>
            How do we cultivate a home when our natural environment lays in
            ruins?
          </li>
          <li>
            What is our duty towards our land, and our ancestors that used it
            before us?
          </li>
          <li>
            How can we save others, when we don’t have the will to save
            ourselves?
          </li>
        </ul>
      </div>
    </div>
  );
}
