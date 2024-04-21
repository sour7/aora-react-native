import { useEffect, useState } from "react";

const useAppwrite = (fun) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = async () => {
    setLoading(false);
    try {
      const res = await fun();
      setData(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetchData = () => fetchData();

  return {
    loading,
    data,
    refetchData,
  };
};

export default useAppwrite;
