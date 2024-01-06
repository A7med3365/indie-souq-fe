import React from "react";
import { Button } from "@nextui-org/button";

export default function HomeNews() {
  let image = [
    "https://s3-alpha-sig.figma.com/img/fd6a/f577/0f687dbd1560fc77656414727dd534e6?Expires=1698019200&Signature=XmMof2BamtmvXz1wMdrvmA4mG822eyQZ6gCr5cy9QoH8Y5TdH1eh4eV0tILccHdohG6MQO9DBc07eq6b14vzFJd3y0dxU56ZtX4s2KOMuWThE2VS~OdleKkumGLfiwZdTMfLYsz-BlkL7G9e3ThlLd2qOo1~TvCgGWio762Tn5GmwlepfQ-~Si9kHT9tpEHxElkykP0ItSVZCxcauOtaamiZVF6B~XxKvXCwBSUOwedzJrhfDwAa7nnYpEtj9kR8~Z1bfNM02j0EB~sGOgLulgCEtnoUyQMEq30D0Szjm8ZpGel~OQAVupcaFHhDzKuWQxEhUxRAgHmjk3-fRosNyg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/69b3/f679/5acfa618ea3b672919013a69a1b9a5de?Expires=1698019200&Signature=pgQF7ijt1CbPVhVaXvwuAdTV9psmurUJaP2ENlDpN6P3kTEyBfwoQPObmtJHt76TCTKgbcHwI1VmbEKDAgPcnIlgVockpQKb5Xsr6mJflgufEZUnhK2NQ4iuSFiwymhnIxoaleIi9YAWT85MTv-toA~VepXMqTfoXme-mhR14XFSEzStt4MevXsKwbZCdZCkoAwmANfsUpuOZBRHgHhDyE4352MHzUeF2o8vmVxIkxeyGrL-aEN1h0VoNElV~8vkzWYXR0e3xY-TXZ4yqkEv5j7bfU19tQMp3Uu3BzxGM4AwAXZtwW6yLDrguHStHGqsScKQ5fAsSaxryEvKJGXvkg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/9947/4f77/c59e3e63247b1b9e6b65e45c9896af3f?Expires=1698019200&Signature=a98IQQR2XXlg72JYVBqkBK4CJ2zHJMv-o6eVuQIe32k8vbOTC1f-eN~3UC36mn~-LloS9xVCaDHqOIYHs8-Fw-rihrrhmCljSE~5SUh4WiQ8WPGGpddCgPUEv7GeqYvVboVbg9iSp8Xsuc2zXYAxwFXRzk9FvbGHXph2UKsxky6uxTb-Xj56OIIPSbHdtvLlosFY6eiXeLfLbvCfgXUACZ~83XMPjR~-4j4~MTb8uP4CX2YxE1TwHThAyhJZ8-UsqZiXpY0vhtxJXy4cTk6YrcaS0KjjMrUq14LgyJhINXyMGNGXJuuQ4MCqcum1CYo7dKoiBIFONeh-CW1iR~moeA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/02eb/f740/cd626df90dd9b12e17dc1c22013c89e3?Expires=1698019200&Signature=MYadAGx865d8lOmDGlVxXf36e25ajZ~Fx65dVnQeamX79Ef3~Rs1Hh1L-Exw1NOpWBkZq1U6dIkO-V20~S1fn1MMOi1BvtbQmKE4owwdkYwBQv9MV4z1PhUPtaOQpK~yKLebye1wz6vWpI9gIqTx3jYjKy2fb6TjewMm3yyf3422~F3xIoQhEWX9fGWMcmF0u0MZikugXFyndlKZYVPC9-zcJaFDl-H7bqj4QdWrPlyFG2XPPsq7jo0zVFEKyh-kckP2QmvjZN7OqN7I0~Fu7ISTWzUlFCH13kQ~oD5ngbnRC03R~f3vHqe0aM9zhQA3cbINsCJwORpeZR3Y7bSF5Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
    "https://s3-alpha-sig.figma.com/img/d149/aeab/dfe685bb5e35c413920f09987bdf8bf2?Expires=1698019200&Signature=c7NKKfEXLENncdztvr7JRXDpGM~2ZpCwK1fKiDg6udcxCUUnyZeL-staXkK5ituF4wsX4ylzkB9QYB65h5I~ptH7nUGcnzpiGN6Av1T0vSe4wOP9GpFWW1j9uQ2MMy-0aCQN9gy3GWbNsu8PWBWQnjKFryJ8PkZVq4wCx5IvXOT0BdMfJeaBtOB~4C8~F058-ZxgjV8lTr9nC9JSZgJEcvvsINxRML6HSDgH67XeKjX9Gn9HVybEoRHS2wk55FZXfbUEkdujK9uQK0vny9c6ThR43xjdIB~f5Wl67TleOltV2fTPOdh8NuTBpuexulnJDRFraCR8wCiFnA7IZQWyNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
  ];
  return (
    <div className="flex gap-[26px] w-[935px] m-auto">
      <div className="w-[614px] h-[692px] grid grid-rows-9 grid-flow-row gap-[26px] m-auto">
        <div className="relative overflow-hidden h-[452px] bg-gray1 rounded-[18px] col-start-1 col-span-2 row-start-1 row-end-7">
          <img
            alt="news"
            src={image[0]}
            className="object-cover w-[614px] h-[452px]"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black opacity-90 transition duration-300 ease-in-out"></div>
        </div>
        <div className="relative overflow-hidden bg-gray1 rounded-[18px] col-start-1 col-span-1 row-start-7 row-span-3">
          <img
            alt="news"
            src={image[1]}
            className="object-cover w-[294px] h-[213px]"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black opacity-90 transition duration-300 ease-in-out"></div>
        </div>
        <div className="relative overflow-hidden bg-gray1 rounded-[18px] col-start-2 col-span-1 row-start-7 row-span-3">
          <img
            alt="news"
            src={image[2]}
            className="object-cover w-[294px] h-[213px]"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black opacity-90 transition duration-300 ease-in-out"></div>
        </div>
      </div>
      <div className="w-[294px] h-[692px] flex flex-col gap-[26px]">
        <div className="relative overflow-hidden rounded-[18px] h-[283px] w-[294px] bg-gray1">
          <img
            alt="news"
            src={image[3]}
            className="object-cover w-[294px] h-[283px]"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black opacity-90 transition duration-300 ease-in-out"></div>
        </div>
        <div className="relative overflow-hidden rounded-[18px] h-[283px] w-[294px] bg-gray1">
          <img
            alt="news"
            src={image[4]}
            className="object-cover w-[294px] h-[283px]"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-black opacity-90 transition duration-300 ease-in-out"></div>
        </div>
        <Button className="rounded-[18px] h-[74px] bg-[rgb(0,0,0,0)] border-[1px] border-orange text-orange text-[24px] font-bold">
          Check Other News
        </Button>
      </div>
    </div>
  );
}
