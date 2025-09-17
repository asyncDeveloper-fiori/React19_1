import { use, useState } from 'react';

function ConditionalStyling() {
  var [color, setColor] = useState('black');
  var [bg, setBg] = useState('bg-white');
  function changeTheme() {
    if (color === 'black' && bg === 'bg-white') {
      setBg('bg-zinc-500');
      setColor('white');
    } else {
      setBg('bg-white');
      setColor('black');
    }
  }
  return (
    <>
      <div>
        <button className={`${bg} text-${color}`} onClick={changeTheme}>
          change theme
        </button>
      </div>
    </>
  );
}

export default ConditionalStyling;
