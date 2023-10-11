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
      name: 'Oliver Schmidt',
      role: 'Screen Writer',
      image:
        'https://s3-alpha-sig.figma.com/img/d70d/0ab6/354b90f5e825c78649ecba266a8c754c?Expires=1698019200&Signature=BaD4YaMg9mdLQxlNWPxJwn0LNe94-s9Dkfnq5ER1jBtMdRHYS3kLgY0c5JFA2u6mAsVbyMcyIpo-vxcS6LZ10MMY63jQiViDgVJem3olM3Qe05ZKw0q7LTeNHoyzOXeo7yQ3VbJvRIECRPOBHfXQ~x4AJAE5jVox03HLuTWiR5-t9bIEXBDiIOpkQUf4kbOnAhgT~j0hWA-hS~X8QWxLLwz5R1bE4RZl4axImblRUqY81IGh7qlCuwStdwdFr7EiKf6IgPNJYlYgXdM6mpdKxZx2FmYgu89reJIvmC24BxYpzQkGxKdpNIReY3110WUM-ZxXHiGURQKaD~pyxU7hzg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Robert Johnson',
      role: 'Film Maker',
      image: './noah.png',
    },
    {
      name: 'Nora Chang',
      role: 'Director',
      image:
        'https://s3-alpha-sig.figma.com/img/c82d/92fb/643b2292420865593037cb057f7e8452?Expires=1698019200&Signature=Ef0c03gNA12bdipeDK6GgCzzHAyoqOOQfK5mFERLlQ92CE7TOv1Wlr6XeVtNQfCF8nlx3q2wUg~m09D9TvSsCZz8~3nPNcInLWyVOh-mylCb7-yoROsg3XJbgCwZfakF-xplPS8GQTHbcz9ZxfAPIx03Q-2fInr7Syttuz0sQojqYe2S3mtChKoNNnh1jdxLsvSLe9a7bVdcY-kBcrJseMozT3NeTiYx2wNgFRASGiXPjt~Kb3mBZgHG8l2NUIDcBHj-ZAgW7C2rV8n~HQjn3e~fctOLiXnc47wu0yPJ2JxsyEcI8RE0oVjlWnvaD-onR1xaKKl8Dbk733XX2NJbUA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Lucas Martinez',
      role: 'Film Producer',
      image:
        'https://s3-alpha-sig.figma.com/img/4e71/7af3/8b7fae899176c3f936de9355631a81e3?Expires=1698019200&Signature=SwfUMuUg~6ETAU8VcyknboDq~0J-hwUm3A2YSLylQ9illhp7gQdezT2QuRfMdmqeZGrtA-kCORHbKktU1CugvSTkg1ilnmnFQIgxG30Yk64dIBHPoaaeWQ40tGp5AplgvjrvLOreJZ8sszNb689gem6JDB3FITHDWmUwzbxMfpZzKf~mLouzK2fa1~1aKa73lYab9C8U-mk1QR869I7vLUotu~BPOmxX51zDWrgMGl3xT1m4JFjMYMftcO15waraO9IagtbOIlP54IQIB4roHo7a~9kDFoHZccRBKoDbvk0axj5ZJlNf-ff-MibAj6W52Y2wYMUlTO3KO3zmcGEW3w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Jonathan Smith',
      role: 'Screen Writer',
      image:
        'https://s3-alpha-sig.figma.com/img/5d41/e6df/5b1e2630843d19286f983ac27e227514?Expires=1698019200&Signature=ZswzE9NjmDll3mLYrho-oKUOqBQws5I9HTE7hYwPDWo4Xl2mADINm-ykMAcgZNvDC104px7bMcVWJKMYQ6OKtQF2jAX6Auf3RzuyXqPjk4br6ZmN6m5YnyCTO8lpi4AJTOW0gky5F4tJDbMDTxHKLjI8Xhxe62j4ztMp5pyG~WejXx2haJ9kfhC1PALmILUSHBkmyupT8abcsF9ZLvt1kuzW8zLNH~pNuAO3OrLtYYxpBcfnyS-qGQeDArY3YJPil9yWJmWEEtXBK91ZuxqnVlmxzQegcHTloNTTK~-1RV1B9mkXNdfVJHSWktD64fNQbfXm49wfR~edEbV9UpkxyQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Mia Anderson',
      role: 'Director',
      image:
        'https://s3-alpha-sig.figma.com/img/8504/0ab7/d73f4b8c7ba004701bbf401d1111feec?Expires=1698019200&Signature=HRmtVVHlG-HZGLWdzdJpKB8rusF2jlxjlRJ9UR~nMLbD9KPqMy1i4K3SmnYMlXE-VuVSPponYNjAvgo9An19DGyuG~M6YT26xM64OoT14q4-Hc-r8TPPxNdOFdoIY5p7UVBg6hY-lEAa8w3PPc8PXnqlk4eo0dX3MoZA2MLlhcpKdp0-AgpeaKdUIvdeUWJPC5bQ6Epw7BKT040STtF7BsxKxSTXsYpgf3F9xugaETJjnmtSMSBhneQZLa4wWDb45n2ogzG4tXKu7JJoaHMdCrCgDm3e2ErP-BtQIOLuTxcAm7nn298FehM4Ibyc6HLrK9CQ-aSfsz6TRebJU1OFGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'William Carter',
      role: 'Film Producer',
      image:
        'https://s3-alpha-sig.figma.com/img/17c0/60fd/9735e4d98524d948bf554629111f926f?Expires=1698019200&Signature=aL2QA~4iLkda5E~hdvJJ-w2o57w740d7mfpdPWPiX3rG1YlaiBXOJUuk54stFGKTJBRxr8Y7OwEimSYcpX4N8VkNKw9yrcMXiCvvmyOKRn2UrRcFnp8Hbiz5Hxb~WBxSlIPWMEX5lsp2SS75D~3pRsJQHZW7nbP9iKkyMYmm1czoijZsMedb1DJG6hQwHrrPLX2s86Vc4mKqla7LFM7bkaiiNj5Wck-mHCdOtdb4sRRkgnJyb612eS0g6SzQI8IYKzrMhHX0USDGVyC6~jGNeAzxf9Wakz3YorwYu6vZlNz~7DqBlkStvdL-bIA~LrssHNSZP7IwSnKZXwUA-k0Gyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'John Taylor',
      role: 'Screen Writer',
      image:
        'https://s3-alpha-sig.figma.com/img/9765/4222/914952ecb2cdd0df8a7dbe93f7150a21?Expires=1698019200&Signature=n1D6RQIrDY-K4J0jgnkGHehsEOSV~Ps18AdWG7qscs4WtzxxJisz1PoatkwQH~FZYa~4JduLKriCQ-qZasmJ2iNYwpiWZkm3RVbNeojFDyRL3o0wTJicbEk~MoAXALVZ7NHsWRTKIkWA4tTxUio~pm8RpuM2vIrVZsHz~MC61mHZ8fAq-eIThlQMC5jSZmC1F15yngvIvO75B9-zJzew8B9PmM~~nCgfXNLc5eUq~Aephm46SRdMc1O3Vn8m9ci8cnzFCE6XFWpGMb3LvEyTdKt4GLYsnL-uFE0-WNv9e9C2gm1PWpzyw1vwB1CLD1omK5mUNnVhB5zgxNcgh0Uh7A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    },
    {
      name: 'Sophie Martin',
      role: 'Film Maker',
      image:
        'https://s3-alpha-sig.figma.com/img/e83c/f0a6/35b86aeece247398a8b8f35b39cfb658?Expires=1698019200&Signature=FwuRtOk0B2NJMm-ShvhaqG6BzGwVPhobC0fBX1stLXSXzHg5RFt0zv93JQ0MTLEVqarQF7k0lRDt2WgULjv7QDiSnEY80YGfh004TXyn-gBMnKaJjeApPBUGfE2E6irHU6vHYEMHt010ycOqfKgkCWNM9XbtizyYZLkvx2weBPUWa276own3~E8ZsStVqsSMSwhiXUgZw2b-5RaIpfwUzVq~fzVBs2yZcflc1qdaqKV4oU83RlTMKn9fsZVSMSzA7wQVR4izsWLVjKQ-TtMtdeFRI~X97x7dCt5HvLuZ4Er0UpRhQUrMm1mQ2FItqEvq~OiVktVafQ6qUminVx7HDg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
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
