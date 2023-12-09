import React, { useEffect, useState } from 'react';
import {
  Input,
  Select,
  SelectItem,
  Textarea,
  Chip,
  Button,
} from '@nextui-org/react';
import useRequest from '../../hooks/use-request';
import { toast } from 'react-toastify';
import DropzoneInputMulti from '../DropzoneInputMulti';
import axios from 'axios';

export default function DetailsForm({
  title,
  type,
  genre,
  story,
  media,
  setComplete,
  id,
}) {
  const [details, setDetails] = useState({
    title: title || '',
    type: type || '',
    genre: genre || [],
    story: story || '',
    media: media || [],
  });
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [selectedGenres, setSelected] = useState(new Set(genre || []));
  const [selectedType, setSelectedType] = useState(new Set([type] || ['']));

  const genres = [
    'Action',
    'Adventure',
    'Anime',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Fantasy',
    'History',
    'Horror',
    'Music',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Thriller',
  ];

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const images = files.map((file) => URL.createObjectURL(file));

    setImages(images);
    setFiles(files);
  };

  const uploadImages = async () => {
    if (files.length === 0) return;
    
    const uploadPromises = files.map(file => {
      const formData = new FormData();
      formData.append('file', file, file.name);

      return axios
        .post('/api/upload', formData)
        .then((res) =>
          updateDetails('media', [...details.media, res.data.url])
        );
    })

    return Promise.all(uploadPromises);
  }

  const updateGenre = (genre) => {
    let temp = { ...details };
    temp.genre = genre.split(',');
    setSelected(new Set(temp.genre));
    setDetails(temp);
  };

  const updateType = (type) => {
    let temp = { ...details };
    temp.type = type;
    setSelectedType(new Set([type]));
    setDetails(temp);
  };

  const updateDetails = (field, value) => {
    let temp = { ...details };
    temp[field] = value;
    setDetails(temp);
  };

  useEffect(() => console.log(details), [details]);

  useEffect(() => {
    if (
      details.title.length > 0 &&
      details.type.length > 0 &&
      details.story.length > 0 &&
      details.genre.length > 0
    ) {
      setComplete((prev) => {
        let temp = [...prev];
        temp[0] = true;
        return temp;
      });
    } else {
      setComplete((prev) => {
        let temp = [...prev];
        temp[0] = false;
        return temp;
      });
    }
  }, [details]);

  const { doRequest, isLoading, errors } = useRequest({
    url: `/api/projects/${id}`,
    method: 'put',
  });

  useEffect(() => {
    if (errors) {
      errors.map((e) =>
        toast.error(e.message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
        })
      );
    }
  }, [errors]);

  return (
    <div className="flex flex-col gap-14 mt-24 mb-12">
      <div className="text-[#f15a2b] text-lg font-medium leading-[normal] flex flex-col">
        Project details
        <span className="w-[700px] border border-orange mt-[13px]"></span>
      </div>
      <div className="flex flex-col gap-5">
        <div className="relative w-full inline-flex tap-highlight-transparent shadow-sm px-3 bg-default-100 min-h-unit-10 rounded-medium flex-col items-start justify-center gap-0 h-14 py-2 hover:bg-gray-200 cursor-pointer">
          Add Video
        </div>
        {/* upload photos section */}
        <div className="flex flex-col gap-5">
          <DropzoneInputMulti handleImageChange={handleImageChange} />
          <div className="flex flex-col bg-white w-full relative">
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
        </div>
        {/* title */}
        <Input
          type="text"
          label="Title"
          size="lg"
          value={details.title}
          onChange={(e) => updateDetails('title', e.target.value)}
        />
        {/* type */}
        <Select
          label="Film type"
          size="lg"
          value={details.type}
          onChange={(e) => updateType(e.target.value)}
          selectedKeys={selectedType}
          // className="max-w-xs"
        >
          {[
            { value: 'short', label: 'Short' },
            { value: 'feature', label: 'Feature' },
          ].map((type) => (
            <SelectItem key={type.value} value={type.value} onChange={() => {}}>
              {type.label}
            </SelectItem>
          ))}
        </Select>
        {/* genre */}
        <Select
          label="Genre"
          items={genres}
          isMultiline={true}
          size="lg"
          selectionMode="multiple"
          placeholder="Select a Genre"
          selectedKeys={selectedGenres}
          renderValue={(items) => {
            return (
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <Chip
                    variant="bordered"
                    key={item.key}
                    classNames={{
                      base: 'border-orange',
                    }}
                  >
                    {item.props.value}
                  </Chip>
                ))}
              </div>
            );
          }}
          // className="max-w-xs"
          onChange={(e) => updateGenre(e.target.value)}
        >
          {genres.map((g) => (
            <SelectItem key={g} value={g}>
              {g}
            </SelectItem>
          ))}
        </Select>
        {/* story */}
        <Textarea
          label="Story"
          size="lg"
          placeholder="Enter your story"
          onChange={(e) => updateDetails('story', e.target.value)}
          value={details.story}
          // className="max-w-xs"
        />
      </div>
      {/* action buttons */}
      <div className="flex gap-5 mx-auto mb-11">
        <Button
          className="border border-orange bg-[rgb(0,0,0,0)] w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
          variant="flat"
          onClick={async (e) => {
            await uploadImages();
            const p = doRequest({
              title: details.title,
              type: details.type,
              genre: details.genre,
              details: {
                story: details.story,
                media: details.media,
              },
            });
            toast.promise(p, {
              pending: 'Saving...',
              success: 'Saved successfully',
              error: 'Error while saving',
            });
          }}
        >
          <p className="text-orange text-base font-semibold px-2">Save</p>
        </Button>
        <Button
          className="bg-orange w-[163px] h-[44.13px] p-[12.56px] rounded-xl"
          variant="flat"
        >
          <p className="text-white text-base font-semibold px-2">Next</p>
        </Button>
      </div>
    </div>
  );
}
