import { useState, useEffect } from 'react';

export const useFetchData = (url) => {
  const [data, setData] = useState('');

  useEffect(() => {
    const doFetch = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    doFetch();
  }, [url]);

  return { data };
}