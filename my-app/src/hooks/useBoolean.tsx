import { useState } from 'react';

interface IUseBolean {
  value: boolean;
  setValue: (value: boolean) => void;
  setFalse: () => void;
  setTrue: () => void;
  toggle: () => void;
}

const useBoolean = (state?: boolean): IUseBolean => {
  const [value, setValue] = useState<boolean>(state || !!state);

  return {
    value,
    setValue,
    setFalse: () => setValue(false),
    setTrue: () => setValue(true),
    toggle: () => setValue(!value),
  };
};

export default useBoolean;
