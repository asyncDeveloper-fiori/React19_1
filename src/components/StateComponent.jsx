import { useState } from 'react';

function StateComponent() {
  var [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(++count);
        }}
      >
        Increase count
      </button>
    </>
  );
}

export default StateComponent;
