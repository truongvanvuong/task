import { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (url, initialData = []) => {
  const [data, setData] = useState(initialData);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(url);
        const result = res.data;
        setData(result.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);
  const mutate = (newData) => {
    setData(newData);
  };
  return { data, loading, error, mutate };
};

export default useFetch;
