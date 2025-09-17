import { useState } from 'react';

export function ConditionalRendering() {
  var [show, setShow] = useState(true);
  var [count, setCount] = useState(0);
  return (
    <>
      {/* single condtion */}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Say Hi
      </button>
      {show ? <h1>Hi there</h1> : null}

      {/* if we need to show multiple conditions */}
      <button
        onClick={() => {
          if (count > 3) {
            setCount(0);
          } else {
            setCount(++count);
          }
        }}
      >
        Say Hi with number
      </button>
      {count === 1 ? (
        <h1>Hi 1</h1>
      ) : count === 2 ? (
        <h1>Hi 2</h1>
      ) : count === 3 ? (
        <h1>Hi 3</h1>
      ) : null}
    </>
  );
}

// in place of tags we can also put components to render them based on some conditon
