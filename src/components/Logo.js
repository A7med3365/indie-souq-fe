import React from 'react'

export default function Logo({className, onClick}) {
  return (
    <div className={className} onClick={onClick}>
      <img src="./logo.png" alt="logo" />
    </div>
  );
}
