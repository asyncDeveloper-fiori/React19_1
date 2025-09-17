import { useState } from 'react';

const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (val) => {
    console.log(val);
    if (typeof(val) != 'boolean') {
      setValue(!value);
      debugger;
    } else {
      debugger ;
      setValue(val);
    }
  };
  return [value, toggleValue];
};

export default useToggle;
