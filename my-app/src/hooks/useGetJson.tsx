import { useEffect, useState } from 'react';
import { IJson } from '../types/searchField';
import { getJson } from '../utils/promise';
import useBoolean from './useBoolean';

const useGetJson = (url = '') => {
  const [data, setData] = useState<IJson>();
  const isLoading = useBoolean(false);

  useEffect(() => {
    const getData = async () => {
      isLoading.setTrue();
      const res = await getJson(url);
      isLoading.setFalse();
      //   setData({ obj: res.obj, state: { value: res.state.value, msg: res.state.msg } });
    };
    getData();
  }, []);

  return { jsonData: data, isLoading };
};

export default useGetJson;
