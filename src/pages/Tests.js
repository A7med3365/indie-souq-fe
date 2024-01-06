// ts-check
import axios from 'axios';
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Test() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);

  if (query.get('tap_id')) {
    axios
      .get(`/api/charge/${query.get('tap_id')}`)
      .then((response) => console.log(response.data))
      .catch((error) => console.error(error));
  }

  const createCharge = async () => {

    axios.post('/api/charge', { amount: 2500, redirect: 'http://localhost:3000/t'  })
      .then((response) => window.location.replace(response.data.url))
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <button onClick={createCharge}>Click me</button>
    </div>
  );
}
