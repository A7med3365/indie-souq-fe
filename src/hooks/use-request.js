import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export default function useRequest({ url, method, body, onSuccess }) {
  const [errors, setErrors] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [isSuccess, setSuccess] = useState(false);

  const doRequest = async (props = {}) => {
    try {
      console.log(`calling ${url} using ${method}`);
      const response = await axios[method](
        `${url}`,
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

  return { doRequest, isLoading, isSuccess, errors };
}
