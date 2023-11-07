import axios from 'axios';
import { useState } from 'react';

export default function useRequest({ url, method, body, onSuccess }) {
  const [errors, setErrors] = useState(null);

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
        }
      );
      if (onSuccess) {
        await onSuccess(response);
      }
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data.errors);
      setErrors(err.response.data.errors);
    }
  };

  return { doRequest, errors };
}
