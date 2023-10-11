import React from 'react';
import { useState } from 'react';

export default function DetailsPreview() {
  const [selected, setSelected] = useState(0);
  let images = [
    'https://s3-alpha-sig.figma.com/img/f66f/70eb/621bd388e6bf6d94b8f304458dd0389e?Expires=1698019200&Signature=XD~3FUYosCzcJg6oT1FAj76JFO03J91GP8~4GQGda4Cur-jTcEiaFpXEQCTrNWNzAsebtwPBBpBQrHsV41JTuU43xJD-D5gJMoi2m7GLvy2UVwGh83nRtNN-QbMVGNb03p-2XoHUGSrce-9eG-LAR~md2ARIj09p-Oi~NUEpYCSWb05UB6bap9Glcq3TjGR6yO62mvgUoWg-yiilMIPc3sLNMx7wlmOpUfn~yrqZF-YPb7nFhueHiQZbVz~XGLdT27LjGj6IY9OLzimFQOBRdEI9DWKIo4qqNc9m9yAAU15DatI3ADxrR2vugcZjVOmLZC5dr9SfRPmTYUL7Ofnbtg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/964f/81e0/3023bd2e42f41ccc6a9afbaea7ca9180?Expires=1698019200&Signature=O~aKMrUvIi~InQdBINoHiG8uGKPv2FbV5nFrzxMIEKPk0Eniz166T8fNxem8Lrsr24389HJAysNaQ1n3dqLMIVVWjVZGYOXT4O6B1zQ~frA102TAENJSUqrsAxzb0cNYccKwAoaMrECGkpioaTO3PHX8cR~WD529oeGs9e41QTjPpryOs64XCExYTmzzK71fIE6g7rfl9CMFnaW4xln2t-tTD04vYmooFI7izq6JaN8Q5jUPb8pBPv2RqSa5zPsDQ0w14PDG8aJxRfXzh378nXSRpYGIIWheiK30xbSY~alqvkVu9yAK2KFV73oglDuuRB44OKnijcb1UHbPaeaUlw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/b1e2/8870/d7bc2f309c4f3f0fb37f8ae1108c08b6?Expires=1698019200&Signature=Rz3XHITu9rSPBCjol7MGs0-rVDpbRLPqD~k9SKG2HfeOPL9IMgpcZeNJUwLRqIcbT99cdOPqm9XWEpA0KZUPjjRPoG9LvxFdRw9UPB1X2RurbX2n3q~KQfS5VsWCccYdtttyMiuNsco-Nfjo-IxdQATgJ0jtTW-eNLuHkes8ubVGT6AcSHGh1FlUv0gO8UFy7feq17jhUU50MGl8k2NVJ9T7RMEORu9Xj9Y15U9nqt6OdKHt7gj7Lp-jULEyh7i1WfgI3Uat1Jj1llVMao3oOnvhGQohfRiygs-MqCR5VGZyfNbG52hwr~iv~IBFSmfMMwJBLKGcYNFWjkUUgEgyEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/1c13/b959/5f0431d919410efe7c214c729e619808?Expires=1698019200&Signature=qBnjjlPs1BwvjGbM4WjLe7UX1zswH05CwsZ9P7LS8RlvYZEiWs05w1dYLvJLjvrdz-3InWWUhnNdnFm40EhvjP5xm3yP6s5q6kpfznAxfGoKd5WIrDRvpPTO32RLGG-e4M-hvWZopDyCP-bqRD8iz9quTxJmx5GTBD10ItWKiZ-bu7~3M2HONjE6fOOQiqSJ74cN6xGb9wwRPUMMCgPPhuP26ybKzd3QydMT1O35yTwFFwA68NlaK62C05rSPBTwxHbJbpPwyNxUnfSYW9YJH8MI786zOCngJ0suRNAaPC-LZeuxquRIjDgufZ4avpRLwv7yV3DCLeETieeA7YGguQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/17e8/ec55/d897af80686888da99801c14ce96ba11?Expires=1698019200&Signature=RNE-~mcCXZrTaOXVkg5V01kpOX2N75i6GJMOWZC~xZqrG6pj21ZCqmV9j8QJQLt9P7rbZ3KaaKdGmdWA9NX~uO3vEbaZL51xEc7z8gSsYhM98r~uYy33aFXoVIhKhdk5V7wsa-j0VwSShc9ijuPRoC64riqNAKk6lDyf~iBLY6CevuKeLpDwarpCFMy~zoSjjHHC4Mw687saJF-bU~bWvJYUY-BHJkeuuASg9Mkw44AgQU7M1h0L08VJnNYwgdDlbLWzpuytiJWEdmfNwGnrqfmHIaD02Q2hp4mBDG9l1QD5PUmrGrFfJWoxYhTzpQZPyI8pOeXZw0ecSMzhtmj66g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/fruit-4.jpeg',
    'https://s3-alpha-sig.figma.com/img/17e8/ec55/d897af80686888da99801c14ce96ba11?Expires=1698019200&Signature=RNE-~mcCXZrTaOXVkg5V01kpOX2N75i6GJMOWZC~xZqrG6pj21ZCqmV9j8QJQLt9P7rbZ3KaaKdGmdWA9NX~uO3vEbaZL51xEc7z8gSsYhM98r~uYy33aFXoVIhKhdk5V7wsa-j0VwSShc9ijuPRoC64riqNAKk6lDyf~iBLY6CevuKeLpDwarpCFMy~zoSjjHHC4Mw687saJF-bU~bWvJYUY-BHJkeuuASg9Mkw44AgQU7M1h0L08VJnNYwgdDlbLWzpuytiJWEdmfNwGnrqfmHIaD02Q2hp4mBDG9l1QD5PUmrGrFfJWoxYhTzpQZPyI8pOeXZw0ecSMzhtmj66g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    'https://s3-alpha-sig.figma.com/img/1c13/b959/5f0431d919410efe7c214c729e619808?Expires=1698019200&Signature=qBnjjlPs1BwvjGbM4WjLe7UX1zswH05CwsZ9P7LS8RlvYZEiWs05w1dYLvJLjvrdz-3InWWUhnNdnFm40EhvjP5xm3yP6s5q6kpfznAxfGoKd5WIrDRvpPTO32RLGG-e4M-hvWZopDyCP-bqRD8iz9quTxJmx5GTBD10ItWKiZ-bu7~3M2HONjE6fOOQiqSJ74cN6xGb9wwRPUMMCgPPhuP26ybKzd3QydMT1O35yTwFFwA68NlaK62C05rSPBTwxHbJbpPwyNxUnfSYW9YJH8MI786zOCngJ0suRNAaPC-LZeuxquRIjDgufZ4avpRLwv7yV3DCLeETieeA7YGguQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
  ];
  return (
    <div className="w-full relative flex flex-col gap-[42px]">
      <img
        className="rounded-[54px] w-[1000px] h-[420px] object-cover"
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
