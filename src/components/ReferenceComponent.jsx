import { useRef } from 'react';
import Button from 'react-bootstrap/Button';

function ReferenceComponent() {
  const inputRef = useRef(null);
  function focusInput() {
    inputRef.current.focus();
    console.log(inputRef.current.value);
  }
  return (
    <>
      <div>
        <input ref={inputRef} placeholder="Enter password" type="password" />
        <Button onClick={focusInput}>Focus</Button>
      </div>
    </>
  );
}

export default ReferenceComponent;
