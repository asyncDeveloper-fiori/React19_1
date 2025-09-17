import { useState } from 'react';

function InputComponent() {
  var [name, setName] = useState('');
  function clear() {
    setName('');
  }
  return (
    <>
      <input className="bg-zinc-500"
        onChange={(event) => {
          setName(event.target.value);
        }}
        placeholder="Enter name"
        value={name}
      />

      {name ? <h1>{name}</h1> : null}

      <button onClick={clear}>Clear</button>
    </>
  );
}

export default InputComponent;
