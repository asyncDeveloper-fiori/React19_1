function FunctionCall() {
  function myfunction() {
    alert('function called');
  }

  function sayName(name) {
    alert(name);
  }
  return (
    <>
      <button onClick={myfunction}>Click Me</button>
      {/* to pass paramteres */}
      <button
        onClick={() => {
          sayName('satyam');
        }}
      >
        Say name
      </button>
    </>
  );
}

export default FunctionCall;

// react doesn't take function call like this onClick={myfunction()} in this case automatic calling happens
// react takes function definition means all the code of the function in the braces
// like this onClick={function myfunction(){
//   alert("function called");
// }}

// so we write it as onClick={myfuncton}
