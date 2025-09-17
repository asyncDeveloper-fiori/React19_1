const FwdRefComponent = (props) => {
  return (
    <>
      <input placeholder="Enter name" ref={props.ref} />
    </>
  );
};

export default FwdRefComponent;
