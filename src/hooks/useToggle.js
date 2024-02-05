import { useState } from 'react';

function useToggle(initialValue = false) {
  const [toggleValue, setToggleValue] = useState(initialValue);

  const updateToggleValue = () => setToggleValue((t) => !t);

  return [toggleValue, updateToggleValue];
}

export default useToggle;

export function useToggleByValues(initialValue = [true, false]) {
  const [toggleValue, setToggleValue] = useState(initialValue[0]);

  const changeToggleValue = () => {
    setToggleValue((t) =>
      t === initialValue[0] ? initialValue[1] : initialValue[0]
    );
  };

  return [toggleValue, changeToggleValue];
}