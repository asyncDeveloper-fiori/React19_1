import useToggle from './useToggle';

export const CustomHookComponent = () => {
  const [value, toggleValue] = useToggle(false);
  return (
    <>
      <button onClick={toggleValue} className="m-1 p-1 rounded-sm bg-blue-500">
        Toggle
      </button>
      <button
        onClick={() => {
          toggleValue(false);
        }}
        className="m-1 p-1 rounded-sm bg-red-500"
      >
        Hide
      </button>
      <button
        onClick={() => {
          toggleValue(true);
        }}
        className="m-1 p-1 rounded-sm bg-green-500"
      >
        Show
      </button>
      {value ? <h1>header</h1> : null}
    </>
  );
};
