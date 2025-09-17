function PropComponent({ user , color }) {
  return (
    <>
      <h1 style={{color:color}}>{user}</h1>
    </>
  );
}

export default PropComponent;
