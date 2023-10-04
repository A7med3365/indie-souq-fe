import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function Rewards() {
  const Modal = () => (
    <Popup trigger={<button className="button"> Open Modal </button>} modal>
      <span> Modal content </span>
    </Popup>
  );
  return (
    // <div className="absolute top-0 w-full h-full">
    //   <div className="bg-black opacity-50 absolute z-40 top-0 w-full h-full"></div>
    //   <div className="flex justify-center content-center gap-[75px] z-50 w-full h-full">
    //     <div className="w-[367px] h-[671px] rounded-[61px] bg-white"></div>
    //     <div className="w-[367px] h-[671px] rounded-[61px] bg-white"></div>
    //     <div className="w-[367px] h-[671px] rounded-[61px] bg-white"></div>
    //   </div>
    // </div>
    <Popup
      trigger={<button className="button"> Open Modal </button>}
      modal
      nested
      contentStyle={{
        background: 'rgb(0,0,0,0)',
        border: '0',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {(close) => (
        <div className="text-black">
          <div
            className="text-white text-4xl absolute top-12 right-14 max-w-screen-2xl 2xl:top-20 2xl:right-60 align-middle pb-3"
            onClick={close}
          >
            x
          </div>
          <div className="flex justify-center content-center gap-[75px] w-full h-full">
            <div className="w-[367px] h-[671px] rounded-[61px] bg-white"></div>
            <div className="w-[367px] h-[671px] rounded-[61px] bg-white"></div>
            <div className="w-[367px] h-[671px] rounded-[61px] bg-white"></div>
          </div>
        </div>
      )}
    </Popup>
  );
}
