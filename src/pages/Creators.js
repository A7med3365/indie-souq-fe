import React from 'react';
import Search from '../components/Search';
import Creator from '../components/Creator';
import { useNavigate } from 'react-router-dom';

export default function Creators() {
  const navigate = useNavigate();
  let creators = [
    {
      name: 'Omar Farooq',
      role: 'Film Maker',
      image:
        'https://s3-alpha-sig.figma.com/img/9235/036a/4db88ef28a25d29dd12e714a7f44d39c?Expires=1698019200&Signature=F9GUh7p7OLw7P3YwNcBkJ~yOnLPjXWscdhTbwscYowu7Oj1xdxpislxMsd4Yk-kUrd2p-B6xizaTV7PW8tpduZ6yR-Pn7FIPmm3xOK~vgQeZqch0X3~CIqUvIXzLVgvVOVBPE~Z30jL8froBfxhhMW-6gtVaM19162RyGJWPEv0B9BcS3DiVQlQGuuFb~wRUnhpEfPZqZkjfS1x2wHF~MjdN-wHzF9eurj9xyYl~p1bETqDTI5iFrpDZjLk7Tf6ko-7c5tzH9YaLNciLckA6HmVMJ~EKD6884u71Sw45cQnkGAPsr8mfBwMHhyJrUE4gyWJAb~NRXR0ZyX63RcJ6-Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Salah Abdulmajeed',
      role: 'Actor',
      image:
        'https://s3-alpha-sig.figma.com/img/f20c/e157/ab9fb5c40a450ab06263dc11aef6f428?Expires=1698019200&Signature=Pmmkqxxi6nckQI1OdrKD~S0kThDMVwHD3HKptBFOMoJO~wLr~v416iiQW8I6kIAXmin23DwRROsFyq63wg3b8d-NcFI5nYsJ4Hc8LG3Vp1Gdy1EdAVRQLKJEtm0eiFDkSE-Fjc3uu9MMLmQ~lwi2oULE9T2yQ6yzVg-MSsuShXxVjdeis0Tw1Z0fB5LIBPuqsi3~6lnCQr-Q4zP832fIYDUd6Qts7pkvqOUqGt6eLjVhnVzrm8bSj89px0ITyn60MBifs6KRnYiyMaAwEFJbR2bvvSAUWxIicaZk2A3IBTdk51uSQmggGASqboOF5kRmrAIv~C2xwwGYT5hhmELgHA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Sami Rashdan',
      role: 'Film Producer',
      image:
        'https://s3-alpha-sig.figma.com/img/821d/1d04/7f6d58a748ffa632159944311cbbba65?Expires=1698019200&Signature=fOz0xTVjqxHNAzUFm-gIiExNzsmgN3aaOhUdKC3FI91uBVjzPwlG~5JDdhyclOiQ9uRHMN~P0sOxhbYhVpRb18w3-VZhF2M9ylBeBEqL1nBpku6dhxwUk7zQ9Cf-E2qX9C6J2PIdgWKZyFbN0o7gyE0VcI2XHg4ytTDQ1QbO0r4r4udWXSplLcQ~tIo5DPq89jK64m2yPN3P3HnpQP0RRUFLqYXq7hD7Wq6zKMiv~2M6w2KF3ow5wgDHvKYjTKu~GP~c~cgtVLsMHGuJDnyw-IZ5z4tLtvyukPlTLayLQ3cpDFYlDmnqY1vPx5n8s2GtamIKk3QoFYPPsZAREMYoiw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Ahmed Sharif',
      role: 'Film Producer',
      image:
        'https://s3-alpha-sig.figma.com/img/84fe/8d78/ac4191f087dbcdb8045605105a41521b?Expires=1698019200&Signature=Akrdv8qX0QkyuDaqTd9XwXRPhDaLhUq1jY2NMmmhMy7C1Oxwq1kYwZIJWJZqaiEv0ne73kx-flMQMPj3G9g1HV6Hrj0lJTbr5ybqp2wQGg8UJB~2OQz3aYMMe9tSq46Caj78oWEfdZ51mjtnpSHZFH53MymNJ15roOpaQ9E1PsM8t5SdY6XnTmyKcTPJzS0VdaiBFXgy0jrEtBS84oJ8C3dJ6xHMnL2loc59nGNOR1yADX3pJay6KEhrIUbdsG0SjwuGuRXfZvHONlWLac7UXTRY7ugd7Ztf~UgERpv-8UNP7tm1ci5hIUMyftUvNSXeCYUOD3Mb52E9g08B9RU4zg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Ali Alnajjar',
      role: 'Film Director',
      image:
        'https://s3-alpha-sig.figma.com/img/d823/55ae/fcdea021324bfe7bbcff48925da880d2?Expires=1698019200&Signature=aDBUKSXubmJ5Z~s2y1tnf~vHiANbVCG~dzxLbVQaoqhhc0ZIxjKQa0egiX4qOa7JZAoehhANIaOIDEPjg8WXN9asYfFF56JJ5m6AVMVLXFnV95qC5BLMi2HDUsZHnzghtY59EZIgZG~ubwuEZxLDFFnnQjgjqbFL9V-7WPvgJUjVkKNqa2olvBz9GyQNVqrUCD0Qitt2TMhM-6Fe~fogQ3PQCd0ceOdjqvPXHWiFe~iqqkIyHpYW4cmZ69jeAPCAMtBlfvEeOawo3C5MNTM8nn3a9XK6cpUXxXojpbHkoAJcX2gh1OTBkBhtv~YqtB0-bTP39-h3I3tvVtI~7qoOlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Khaled Janahi',
      role: 'Actor',
      image:
        'https://s3-alpha-sig.figma.com/img/4277/6a70/d28e0713e0af57da6ed45a2292e9c76a?Expires=1698019200&Signature=E4buKSdXm6~37ghO9elS08XkSNLUnwWI7mEI-C~MO7K1q~tF1eLV8ztEDba9~UbQEASAUEsrfmjEOl~P3oKJ1FLHzfk9~7nj07bV-W8M-RkCV971OhWdysX3HuFLM6oS0vLIhKJHSedvIGqWwo4XYwXLHU8-an0IInW5p-hOlyjTrUf-GMazwFFzhFDNonh7cTr8Ly9cbHsy6YGSnAS7SlgA1XL8EV3rSGeOrq2Q5pUs2DQC1iglfnjv-2h4rIRQHKD5WzVEx1-UpXVcwWDuAWcS2PNIrzKk4Sbw7SHDyJ-Hz6o~oI-m1NS3UkJtLf9f5SHx0yEeY~besuGvmgMj0A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Ahmed Rasheed',
      role: 'Actor',
      image:
        'https://s3-alpha-sig.figma.com/img/b1df/945d/370ccc7589f85256bdb41cf8e07c423f?Expires=1698019200&Signature=G98yFoGjSn9Kd8gvFF6FhFBOIBmgwkdXaX2jk4AeCZPmsWYOxyU7lNyWA1gqEy9FmUh2Zmy47XLPswluM~ZI2MHBqMtB1wz3-4JR2I0~S3ty5mDCnG-XKAETPsXoCdFMX~Og1fNOBNnbjfDe2kE-iLllZz~ngQ1Jp~yG0~iZP5-KEWDEln4bGszxu~f072rD7SNOgckW47NLqkkw0qUbyici~Yc5LHwW1IfJLIq8Yys7MMwsNIEB9Gz9mVoXP01i5bz6H7WDr-ktfTi8JmS5qp-YcUvnzwwb2l8MVr7qDQKIgX8kR1SUXvnDIibbOIrgIYreRr3wQ6TRjlDYJR6A2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Noah Walker',
      role: 'Screen Writer',
      image: './noah.png',
    },
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
  return (
    <div>
      <div className="flex justify-center my-[88px]">
        <Search />
      </div>
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-x-[20px] gap-y-[36px] max-w-[1140px] m-auto pb-[70px]">
        {creators.map((creator) => {
          return (
            <Creator
              creator={creator}
              onClick={() => {
                navigate('/profile');
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
