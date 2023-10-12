import React from "react";
import GenericLabel1 from "../components/GenericLabel1";
import { Button, useDisclosure } from "@nextui-org/react";
import ProgressPar from "../components/ProgressPar";
import Rewards from "./Rewards";

export default function DetailsCards({ data }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div>
      <div className="flex flex-col w-[405px] gap-[19px]">
        {/* <div className="h-[82px] flex justify-center gap-[29px] py-7 border-[1px] border-[#D9D9D9] rounded-[27px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="22"
            viewBox="0 0 28 22"
            fill="none"
            className="transition hover:scale-125"
          >
            <path
              d="M26.7896 4.94803C23.9859 -2.49928 14.8739 0.830106 14.0416 4.55376C12.9026 0.611068 4.00959 -2.32405 1.29351 4.94803C-1.72923 13.0525 12.9902 20.3246 14.0416 21.5074C15.0929 20.5436 29.8123 12.921 26.7896 4.94803Z"
              fill="#FF5A79"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            className="transition hover:scale-125"
          >
            <path
              d="M26.5104 14.0001C26.5104 21.2799 20.6339 27.1564 13.3541 27.1564C6.07424 27.1564 0.197754 21.2799 0.197754 14.0001C0.197754 6.72023 6.07424 0.84375 13.3541 0.84375C20.6339 0.84375 26.5104 6.72023 26.5104 14.0001Z"
              fill="#FFDD67"
            />
            <path
              d="M20.8089 16.6317C20.8089 16.2808 20.5896 15.8423 20.0195 15.7107C18.4846 15.4038 16.2481 15.1406 13.3537 15.1406C10.4593 15.1406 8.22272 15.4476 6.68782 15.7107C6.11771 15.8423 5.89844 16.2808 5.89844 16.6317C5.89844 19.833 8.35428 23.0344 13.3537 23.0344C18.3531 23.0344 20.8089 19.833 20.8089 16.6317Z"
              fill="#664E27"
            />
            <path
              d="M11.8191 11.7635C10.9859 9.52693 9.75793 8.38672 8.53001 8.38672C7.30209 8.38672 6.07416 9.52693 5.24093 11.7635C5.15322 11.9828 5.59177 12.3775 5.81104 12.1582C6.60042 11.325 7.56521 10.9741 8.53001 10.9741C9.4948 10.9741 10.4596 11.325 11.249 12.1582C11.5121 12.3775 11.9068 11.9828 11.8191 11.7635Z"
              fill="#664E27"
            />
            <path
              d="M21.4231 11.7635C20.5899 9.52693 19.3619 8.38672 18.134 8.38672C16.9061 8.38672 15.6782 9.52693 14.8449 11.7635C14.7572 11.9828 15.1958 12.3775 15.415 12.1582C16.2044 11.325 17.1692 10.9741 18.134 10.9741C19.1427 10.9741 20.0636 11.325 20.853 12.1582C21.0723 12.3775 21.5108 11.9828 21.4231 11.7635Z"
              fill="#664E27"
            />
            <path
              d="M18.9229 16.7628C17.9581 16.5873 15.9408 16.3242 13.3534 16.3242C10.766 16.3242 8.74869 16.5873 7.78389 16.7628C7.21379 16.8505 7.16993 17.0697 7.21379 17.4206C7.25764 17.596 7.25764 17.8591 7.34535 18.1222C7.3892 18.3854 7.47691 18.5169 7.91546 18.4731C8.74869 18.3854 18.002 18.3854 18.8352 18.4731C19.2737 18.5169 19.3176 18.3854 19.4053 18.1222C19.4492 17.8591 19.493 17.6398 19.5369 17.4206C19.5369 17.0697 19.493 16.8505 18.9229 16.7628Z"
              fill="white"
            />
            <path
              d="M26.5104 14.0001C26.5104 21.2799 20.6339 27.1564 13.3541 27.1564C6.07424 27.1564 0.197754 21.2799 0.197754 14.0001C0.197754 6.72023 6.07424 0.84375 13.3541 0.84375C20.6339 0.84375 26.5104 6.72023 26.5104 14.0001Z"
              fill="#FFDD67"
            />
            <path
              d="M20.8089 16.6317C20.8089 16.2808 20.5896 15.8423 20.0195 15.7107C18.4846 15.4038 16.2481 15.1406 13.3537 15.1406C10.4593 15.1406 8.22272 15.4476 6.68782 15.7107C6.11771 15.8423 5.89844 16.2808 5.89844 16.6317C5.89844 19.833 8.35428 23.0344 13.3537 23.0344C18.3531 23.0344 20.8089 19.833 20.8089 16.6317Z"
              fill="#664E27"
            />
            <path
              d="M11.8191 11.7635C10.9859 9.52693 9.75793 8.38672 8.53001 8.38672C7.30209 8.38672 6.07416 9.52693 5.24093 11.7635C5.15322 11.9828 5.59177 12.3775 5.81104 12.1582C6.60042 11.325 7.56521 10.9741 8.53001 10.9741C9.4948 10.9741 10.4596 11.325 11.249 12.1582C11.5121 12.3775 11.9068 11.9828 11.8191 11.7635Z"
              fill="#664E27"
            />
            <path
              d="M21.4231 11.7635C20.5899 9.52693 19.3619 8.38672 18.134 8.38672C16.9061 8.38672 15.6782 9.52693 14.8449 11.7635C14.7572 11.9828 15.1958 12.3775 15.415 12.1582C16.2044 11.325 17.1692 10.9741 18.134 10.9741C19.1427 10.9741 20.0636 11.325 20.853 12.1582C21.0723 12.3775 21.5108 11.9828 21.4231 11.7635Z"
              fill="#664E27"
            />
            <path
              d="M18.9229 16.7628C17.9581 16.5873 15.9408 16.3242 13.3534 16.3242C10.766 16.3242 8.74869 16.5873 7.78389 16.7628C7.21379 16.8505 7.16993 17.0697 7.21379 17.4206C7.25764 17.596 7.25764 17.8591 7.34535 18.1222C7.3892 18.3854 7.47691 18.4731 7.91546 18.4731H18.8352C19.2737 18.4731 19.3176 18.3854 19.4053 18.1222C19.4492 17.8591 19.493 17.6398 19.5369 17.4206C19.5369 17.0697 19.493 16.8505 18.9229 16.7628Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="30"
            viewBox="0 0 27 30"
            fill="none"
            className="transition hover:scale-125"
          >
            <path
              d="M0.510254 14.0352C0.510254 21.3182 6.38361 27.1915 13.6666 27.1915C20.9495 27.1915 26.8229 21.3182 26.8229 14.0352C26.8229 6.75226 20.9495 0.878906 13.6666 0.878906C6.38361 0.878906 0.510254 6.75226 0.510254 14.0352Z"
              fill="#FFDD67"
            />
            <path
              d="M5.30332 5.57456C6.90087 4.63482 8.82733 4.49386 10.6128 5.10469C10.8478 5.19866 11.2237 4.30591 10.9417 4.21194C8.9213 3.46015 6.71292 3.6481 4.83345 4.72879C4.55153 4.86975 5.06838 5.71552 5.30332 5.57456ZM16.5802 6.98416C18.1777 6.04442 20.1042 5.90346 21.8897 6.51429C22.1246 6.60827 22.5005 5.71552 22.2186 5.62154C20.1981 4.86975 17.9898 5.0577 16.1103 6.1384C15.8284 6.27936 16.3452 7.07813 16.5802 6.98416Z"
              fill="#917524"
            />
            <path
              d="M9.95511 16.2446C12.3514 15.6338 14.9827 16.0566 17.0031 17.4662C17.52 17.7952 16.5803 19.1108 16.0634 18.7349C14.7008 17.8421 12.5864 17.1843 10.378 17.7482C9.81415 17.8891 9.34428 16.4325 9.95511 16.2446Z"
              fill="#664E27"
            />
            <path
              d="M18.7418 13.6119C16.8153 13.6119 15.2178 12.0143 15.2178 10.0878C15.2178 9.28907 15.4997 8.53728 15.9226 7.97344C16.7214 7.73851 17.6141 7.64453 18.5538 7.64453C19.6815 7.64453 20.7622 7.83248 21.702 8.16139C22.0778 8.72523 22.3128 9.38304 22.3128 10.1348C22.2658 12.0613 20.7152 13.6119 18.7418 13.6119Z"
              fill="white"
            />
            <path
              d="M19.2107 7.64453C19.3987 7.92645 19.5396 8.25536 19.5396 8.63125C19.5396 9.61798 18.7409 10.4168 17.7541 10.4168C16.7674 10.4168 16.0156 9.61798 16.0156 8.67824C16.0156 8.39632 16.0626 8.16139 16.2036 7.92645C16.9084 7.73851 17.7072 7.64453 18.5529 7.64453H19.2107Z"
              fill="#664E27"
            />
            <path
              d="M8.59237 13.6119C6.66591 13.6119 5.06836 12.0143 5.06836 10.0878C5.06836 9.28907 5.35028 8.53728 5.77316 7.97344C6.57194 7.73851 7.46469 7.64453 8.40442 7.64453C9.53211 7.64453 10.6128 7.83248 11.5525 8.16139C11.9284 8.72523 12.1634 9.38304 12.1634 10.1348C12.1164 12.0613 10.5188 13.6119 8.59237 13.6119Z"
              fill="white"
            />
            <path
              d="M9.06191 7.64464C9.24986 7.92656 9.39082 8.25547 9.39082 8.63137C9.39082 9.61809 8.59205 10.4169 7.60532 10.4169C6.6186 10.4169 5.81982 9.61809 5.81982 8.63137C5.81982 8.34945 5.86681 8.11451 6.00777 7.87958C6.71257 7.69163 7.51135 7.59766 8.35711 7.59766C8.63903 7.64464 8.82698 7.64464 9.06191 7.64464Z"
              fill="#664E27"
            />
            <path
              d="M13.9485 20.6129C11.975 21.0827 6.94745 21.6935 6.0547 20.7538C5.63182 20.3309 5.72579 19.7201 5.86675 18.6394C6.00771 17.5587 4.974 16.431 4.22221 16.3371C3.32946 16.2431 2.81261 16.9009 3.14151 17.8406C3.79933 19.955 2.4837 20.6129 2.38973 22.1634C2.34274 23.0562 2.06082 24.5597 3.42343 26.4862C4.974 28.6476 7.65225 28.6946 8.59199 28.6476C9.67268 28.6006 10.1425 28.5536 10.3775 28.0838C10.6594 27.5199 10.5184 27.379 10.6594 27.191C10.8943 26.7681 11.0353 26.8151 11.1763 26.2983C11.3172 25.7814 10.9413 25.4525 11.0353 25.2176C11.2232 24.6537 11.6931 24.7477 11.2232 23.4321C12.8208 23.1971 13.8545 22.9622 14.7942 22.3984C16.5328 21.4586 15.0292 20.3779 13.9485 20.6129Z"
              fill="white"
            />
            <path
              d="M6.85361 28.9301C5.25606 28.6481 3.94043 27.8494 3.09467 26.6747C1.77904 24.8422 1.87301 23.3856 1.96698 22.3989V22.07C2.01397 21.4122 2.20192 20.8953 2.43685 20.3785C2.76576 19.6267 3.04768 19.0158 2.67179 17.8882C2.48384 17.3243 2.53083 16.7605 2.90672 16.3846C3.23563 16.0557 3.7055 15.8677 4.26934 15.9617H4.31633C5.30305 16.1496 6.43073 17.4653 6.28977 18.7339C6.14881 19.7676 6.10182 20.2375 6.38375 20.5194C6.43073 20.5664 6.57169 20.7074 7.08855 20.7543C8.87405 21.0833 12.3981 20.5664 13.8546 20.2375C14.0896 20.1905 14.3715 20.1905 14.6534 20.2375C15.3582 20.3785 15.8751 20.8013 16.016 21.3182C16.063 21.6471 16.063 22.2579 15.0763 22.8218C14.1366 23.3386 13.1498 23.6205 11.7872 23.8085C12.1631 24.7482 11.2704 25.0771 11.4583 25.453C11.6933 25.9699 11.6463 26.3928 11.1294 26.9096C10.7535 27.2385 11.2234 27.6614 10.8475 28.3192C10.4246 29.024 9.71981 29.071 8.6861 29.118C7.9813 29.071 7.41746 29.071 6.85361 28.9301ZM3.28262 17.4183C3.61152 18.9688 3.7055 19.5327 3.14166 20.8013C2.29589 22.4929 1.96698 27.2855 6.99457 28.1783C10.0487 28.7421 10.5186 27.9903 10.3776 27.1915C10.2837 26.6747 10.7065 26.4867 10.8475 26.2988C11.1764 25.7349 10.7065 25.453 10.7065 25.2181C10.7065 24.7952 11.1294 24.7952 11.2234 24.3723C11.3643 23.6205 10.4246 23.3386 11.2234 23.2916C12.774 23.1977 13.8077 22.9157 14.7004 22.3049C15.5462 21.7411 14.9353 20.5664 13.8077 20.8013C11.1764 21.3652 7.22951 22.023 5.91388 20.8013C5.30305 20.2375 5.77292 19.5797 5.72593 18.311C5.63196 16.6195 2.95371 15.9617 3.28262 17.4183Z"
              fill="#CCCFD4"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            className="transition hover:scale-125"
          >
            <path
              d="M27.1346 14.0058C27.1346 21.278 21.2643 27.1483 13.9921 27.1483C6.71993 27.1483 0.849609 21.278 0.849609 14.0058C0.849609 6.7336 6.71993 0.863281 13.9921 0.863281C21.2643 0.863281 27.1346 6.7336 27.1346 14.0058Z"
              fill="#FFDD67"
            />
            <path
              d="M27.0478 5.77035C26.8287 4.58753 26.1716 3.62374 25.0764 3.31709C23.8936 3.01043 22.8422 3.44851 21.8346 4.49991C21.2651 2.92281 20.3889 1.73999 18.987 1.12667C17.5851 0.513352 16.1833 0.951435 15.3071 2.04664C14.3871 3.18566 14.0367 4.9818 15.0005 7.30365C15.9204 9.49406 19.9946 13.8749 20.126 14.0063C20.3013 13.9187 24.8573 11.0712 25.9525 9.6693C27.0478 8.31124 27.2668 6.95318 27.0478 5.77035ZM12.6786 2.04664C11.8024 0.951435 10.4006 0.513352 8.99871 1.12667C7.59685 1.73999 6.72068 2.92281 6.15117 4.49991C5.09977 3.49232 4.04837 3.01043 2.86554 3.36089C1.81414 3.66755 1.11321 4.63134 0.894169 5.81416C0.675128 6.95318 0.937978 8.35505 1.98938 9.7131C3.12839 11.0712 7.68446 13.9187 7.8597 14.0063C7.99112 13.8749 12.0653 9.49406 12.9853 7.30365C13.9491 4.9818 13.5986 3.22947 12.6786 2.04664Z"
              fill="#F46767"
            />
            <path
              d="M21.4412 16.677C21.4412 16.3265 21.2222 15.8884 20.6527 15.757C19.1194 15.4503 16.8852 15.1875 13.9938 15.1875C11.1025 15.1875 8.86823 15.4942 7.33494 15.757C6.72162 15.8884 6.54639 16.3265 6.54639 16.677C6.54639 19.875 8.99965 23.073 13.9938 23.073C18.988 23.0292 21.4412 19.8312 21.4412 16.677Z"
              fill="#664E27"
            />
            <path
              d="M19.5566 16.7662C18.5928 16.591 16.5776 16.3281 13.9929 16.3281C11.4082 16.3281 9.39306 16.591 8.42928 16.7662C7.85977 16.8538 7.81596 17.0729 7.85977 17.4233C7.90358 17.5986 7.90358 17.8614 7.99119 18.1243C8.035 18.3871 8.12262 18.5185 8.5607 18.4747C9.39306 18.3871 18.6366 18.3871 19.469 18.4747C19.9071 18.5185 19.9509 18.3871 20.0385 18.1243C20.0823 17.8614 20.1261 17.6424 20.1699 17.4233C20.1699 17.0729 20.1261 16.8538 19.5566 16.7662Z"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="27"
            height="28"
            viewBox="0 0 27 28"
            fill="none"
            className="transition hover:scale-125"
          >
            <path
              d="M13.2916 27.1564C20.5576 27.1564 26.4479 21.2661 26.4479 14.0001C26.4479 6.73403 20.5576 0.84375 13.2916 0.84375C6.02553 0.84375 0.135254 6.73403 0.135254 14.0001C0.135254 21.2661 6.02553 27.1564 13.2916 27.1564Z"
              fill="#FFDD67"
            />
            <path
              d="M8.24985 13.8268C9.46085 13.8268 10.4426 12.8451 10.4426 11.6341C10.4426 10.4231 9.46085 9.44141 8.24985 9.44141C7.03884 9.44141 6.05713 10.4231 6.05713 11.6341C6.05713 12.8451 7.03884 13.8268 8.24985 13.8268Z"
              fill="#664E27"
            />
            <path
              d="M18.3368 13.8268C19.5478 13.8268 20.5295 12.8451 20.5295 11.6341C20.5295 10.4231 19.5478 9.44141 18.3368 9.44141C17.1258 9.44141 16.144 10.4231 16.144 11.6341C16.144 12.8451 17.1258 13.8268 18.3368 13.8268Z"
              fill="#664E27"
            />
            <path
              d="M18.8186 17.6421C15.2664 20.1418 11.3195 20.0979 7.76728 17.6421C7.32873 17.3351 6.9779 17.8614 7.24103 18.3438C8.33739 20.0979 10.4862 21.7205 13.2929 21.7205C16.0996 21.7205 18.2485 20.1418 19.3448 18.3438C19.608 17.8614 19.2571 17.3351 18.8186 17.6421Z"
              fill="#664E27"
            />
          </svg>
          <div className="rounded-full w-[26.6px] h-[26.6px] bg-[#F5F5F5] py-2 flex justify-center transition hover:scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M4.38584 11.5184V0.480469H7.1765V11.5184H4.38584ZM0.262207 7.39476V4.6041H11.3001V7.39476H0.262207Z"
                fill="#F15A2B"
              />
            </svg>
          </div>
        </div> */}
        <div className="rounded-[27px] w-full h-[164px] border-[1px] border-[#D9D9D9]">
          <div className="px-[38px] py-[25px] flex justify-between">
            <div className="rounded-full w-[116.5px] h-[116.5px] overflow-hidden">
              <img
                alt="profile pic"
                src="./details-profile-pic-example.png"
                className="w-[116.5px] h-[116.5px] object-cover"
              />
            </div>
            <div className="my-auto flex flex-col gap-[10px]">
              <div>
                <div className="text-[#656565] text-[24px] font-bold">
                  {data.name}
                </div>
                <div className="text-[#A5A5A5] text-[16px] font-medium">
                  {data.role + " | " + data.location}
                </div>
              </div>
              <div className="flex justify-between">
                <Button className="w-[88.2px] h-[39px] bg-orange text-white text-[14px] font-medium">
                  Follow
                </Button>
                <Button className="w-[88.2px] h-[39px] bg-white border-[1px] border-orange">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="17"
                    viewBox="0 0 18 17"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_769_1933)">
                      <path
                        d="M7.69971 15.9727H10.041"
                        stroke="#F15A2B"
                        stroke-width="1.17067"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.553 7.19196C13.553 5.95003 13.0597 4.75898 12.1815 3.8808C11.3033 3.00263 10.1123 2.50928 8.87032 2.50928C7.6284 2.50928 6.43734 3.00263 5.55917 3.8808C4.681 4.75898 4.18765 5.95003 4.18765 7.19196V11.2893C4.18765 11.755 4.00263 12.2017 3.67332 12.531C3.34401 12.8603 2.89736 13.0453 2.43164 13.0453H15.309C14.8433 13.0453 14.3966 12.8603 14.0673 12.531C13.738 12.2017 13.553 11.755 13.553 11.2893V7.19196Z"
                        stroke="#F15A2B"
                        stroke-width="1.17067"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M1.26123 7.04003C1.26186 5.92572 1.5276 4.82755 2.03649 3.83622C2.54539 2.8449 3.28283 1.98888 4.1879 1.33887"
                        stroke="#F15A2B"
                        stroke-width="1.17067"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.4797 7.04003C16.4791 5.92572 16.2133 4.82755 15.7044 3.83622C15.1955 2.8449 14.458 1.98888 13.553 1.33887"
                        stroke="#F15A2B"
                        stroke-width="1.17067"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_769_1933">
                        <rect
                          width="16.3894"
                          height="16.3894"
                          fill="white"
                          transform="translate(0.676758 0.461914)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-[27px] w-full h-[241px] border-[1px] border-[#D9D9D9]">
          <div className="px-[38px] py-[24px]">
            <div className="flex gap-[75px] mb-[20px]">
              <GenericLabel1 label={"Film Type"} value={data.filmType} />
              <GenericLabel1 label={"Genre"} value={data.genre} />
            </div>
            <div className="text-[#A5A5A5] text-[18px] leading-[22px] font-medium mb-[10px]">
              Donation Progress
            </div>
            <div className="flex justify-between mb-[13px]">
              <div>
                <p className="text-[#656565] text-[18px] leading-[22px] font-light">
                  Raised
                </p>
                <p className="text-[#656565] text-[16px] leading-[19px] font-bold">
                  {"BD " + data.fundRaised}
                </p>
              </div>
              <div>
                <p className="text-end text-[#656565] text-[18px] leading-[22px] font-light">
                  Goal
                </p>
                <p className="text-[#656565] text-[16px] leading-[19px] font-bold">
                  {"BD " + data.fundGoal}
                </p>
              </div>
            </div>
            <div className="w-full">
              <ProgressPar p={(data.fundRaised / data.fundGoal) * 100} />
            </div>
          </div>
        </div>

        <div className="rounded-[27px] w-full h-[433px] border-[1px] border-[#D9D9D9]">
          <div className="px-[38px] py-[24px]">
            <div className="grid grid-cols-2 gap-x-[40px] gap-y-[40px] mb-[39px]">
              <GenericLabel1 label={"Fund Purpose"} value={data.fundPurpose} />
              <GenericLabel1 label={"Deadline"} value={data.Deadline} />
              <GenericLabel1 label={"Fund Type"} value={data.type} />
              <GenericLabel1 label={"Rewards"} value={data.rewards} />
            </div>
            <div className="mb-[27px]">
              <div className="text-[18px] text-[#656565] leading-[22px] font-medium flex justify-between">
                <div>Film Enthusiast</div>
                <div className="font-semibold">20 BD</div>
              </div>
              <div className="w-full border-[1px] border-orange my-[13px]"></div>
              <div className="text-[18px] text-[#656565] leading-[22px] font-medium flex justify-between">
                <div>Producer's Circle</div>
                <div className="font-semibold">100 BD</div>
              </div>
              <div className="w-full border-[1px] border-orange my-[13px]"></div>
              <div className="text-[18px] text-[#656565] leading-[22px] font-medium flex justify-between">
                <div>Executive Producer</div>
                <div className="font-semibold">1000 BD</div>
              </div>
            </div>
            <div className="text-center">
              <Button className="bg-orange" onPress={onOpen} variant="flat">
                <p className="text-white text-xl px-2">View Rewards</p>
              </Button>
              <Rewards isOpen={isOpen} onOpenChange={onOpenChange} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
