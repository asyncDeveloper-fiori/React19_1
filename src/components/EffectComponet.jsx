import { useEffect, useState } from 'react';

function EffectComponent() {
  var [count, setCount] = useState(0);

  // using the below code the function is only called once, no matter how may times the states or props are updated
  // useEffect(()=>{
  //   print();
  // },[])

  // this time print is called each time the count state is updated
  // useEffect(()=>{
  //   print();
  // },[count])

  function print() {
    console.log('External function');
  }

  // print(); this function will be called everytime the state updates
  return (
    <div className="flex gap-x-4">
      <p>{count}</p>
      <button
        className="bg-zinc-300"
        onClick={() => {
          setCount(++count);
        }}
      >
        Increase count
      </button>
    </div>
  );
}

export default EffectComponent;
