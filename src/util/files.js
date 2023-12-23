//ts-check

import axios from 'axios';
import { toast } from 'react-toastify';

export const fetchFile = async (file) => {
  const response = await fetch(file);
  return await response.blob();
};

export const createFormData = (blob, fileName) => {
  const formData = new FormData();
  formData.append('file', blob, fileName);
  return formData;
};

export const uploadFile = async (formData) => {
  const toastId = toast.loading(`Uploading file...`);
  const response = await axios.post('/api/upload', formData);
  toast.update(toastId, {
    render: 'File uploaded!',
    type: 'success',
    isLoading: false,
    autoClose: 5000,
  });
  return response.data;
};

export const uploadBase64Files = async (files) => {
    const urls = {};
    
    for (const key in files) {
        if (files[key].file === '' || files[key].fileName === '') continue;
        const blobFile = await fetchFile(files[key].file);
        const formData = createFormData(blobFile, files[key].fileName);
        const res = await uploadFile(formData);
        urls[key] = res.url;
    }

    return urls;
};
