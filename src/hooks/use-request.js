import axios from 'axios';
import { useState } from 'react';

export default function useRequest({ url, method, body, onSuccess }) {
  const [errors, setErrors] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(false);

  const doRequest = async (props = {}) => {
    try {
      console.log(
        `calling ${process.env.REACT_APP_BACKEND_URL}${url} using ${method}`
      );
      const response = await axios[method](
        `${process.env.REACT_APP_BACKEND_URL}${url}`,
        {
          ...body,
          ...props,
        },
        {
          withCredentials: true,
        }
      );
      setSuccess(true);
      if (onSuccess) {
        await onSuccess(response);
      }
      console.log('hook:', response.data);
    } catch (err) {
      console.log(err.response.data.errors);
      setErrors(err.response.data.errors);
    } finally {
      setLoading(false);
    }
  };

  return { doRequest, isLoading, isSuccess, errors };
}
