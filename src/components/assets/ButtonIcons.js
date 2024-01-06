import React from 'react';

export const EditIcon = () => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22H15C20 22 22 20 22 15V13"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M16.0379 3.02123L8.15793 10.9012C7.85793 11.2012 7.55793 11.7912 7.49793 12.2212L7.06793 15.2312C6.90793 16.3212 7.67793 17.0812 8.76793 16.9312L11.7779 16.5012C12.1979 16.4412 12.7879 16.1412 13.0979 15.8412L20.9779 7.96123C22.3379 6.60123 22.9779 5.02123 20.9779 3.02123C18.9779 1.02123 17.3979 1.66123 16.0379 3.02123Z"
      stroke="white"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.9102 4.15039C15.2417 5.32786 15.8701 6.40046 16.7351 7.26544C17.6001 8.13042 18.6727 8.7588 19.8502 9.09039"
      stroke="white"
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const AddIcon = () => (
  <svg
    width={27}
    height={26}
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.5586 2.75V23.7099"
      stroke="white"
      strokeWidth="4.38376"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M24.0391 13.2305L3.07919 13.2305"
      stroke="white"
      strokeWidth="4.38376"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseCircle = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      className=' fill-gray-600 hover:fill-red-600'
    >
      <path
        d="M10 0C4.49 0 0 4.49 0 10C0 15.51 4.49 20 10 20C15.51 20 20 15.51 20 10C20 4.49 15.51 0 10 0ZM13.36 12.3C13.65 12.59 13.65 13.07 13.36 13.36C13.21 13.51 13.02 13.58 12.83 13.58C12.64 13.58 12.45 13.51 12.3 13.36L10 11.06L7.7 13.36C7.55 13.51 7.36 13.58 7.17 13.58C6.98 13.58 6.79 13.51 6.64 13.36C6.35 13.07 6.35 12.59 6.64 12.3L8.94 10L6.64 7.7C6.35 7.41 6.35 6.93 6.64 6.64C6.93 6.35 7.41 6.35 7.7 6.64L10 8.94L12.3 6.64C12.59 6.35 13.07 6.35 13.36 6.64C13.65 6.93 13.65 7.41 13.36 7.7L11.06 10L13.36 12.3Z"
        // fill="#292D32"
      />
    </svg>
  );
}

const ButtonIcons = { EditIcon, AddIcon };

export default ButtonIcons;
