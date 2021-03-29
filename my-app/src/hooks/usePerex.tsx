import { useState } from 'react';

interface IUsePerex {
  value: string;
  setValue: (perex: string) => void;
  setPartOfPerex: () => void;
  setWholePerex: () => void;
}

const usePerex = (txt: string): IUsePerex => {
  const storage = txt;
  const [value, setValue] = useState<string>(txt);
  return {
    value,
    setValue,
    setPartOfPerex: () => setValue(storage.substr(0, 155)),
    setWholePerex: () => setValue(storage),
  };
};

export default usePerex;
