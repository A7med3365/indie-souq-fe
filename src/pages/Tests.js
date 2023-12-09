import React from 'react';
import ReactPlayer from 'react-player';
import DetailsPreview from '../components/DetailsPreview';
import DropzoneInputMulti from '../components/DropzoneInputMulti';

export default function Test() {
  const [images, setImages] = React.useState([]);
  const [files, setFiles] = React.useState([]);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map((file) => URL.createObjectURL(file));

    setImages(images);
    setFiles(files);
  };

  const handleSubmit = (e) => {
    const formData = new FormData();
    files.forEach((file) => {
      formData.append('file', file, file.name);
    });
    console.log(formData.values());
  };
  // return <DetailsPreview />;
  return (
    <>
      <DropzoneInputMulti handleImageChange={handleImageChange} />
      <div class="flex flex-col bg-white w-full relative">
        <div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
          <div class="flex flex-nowrap gap-[20px]">
            {images.map((image, i) => {
              return (
                <div key={i} class="inline-block">
                  <div
                    class="w-[158px] h-[118px] max-w-xs overflow-hidden rounded-[25px] shadow-md bg-gray1 hover:shadow-xl transition-shadow duration-300 ease-in-out"
                    // onClick={() => {
                    //   setSelected(i);
                    // }}
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
          </div>
        </div>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </>
  );
}

