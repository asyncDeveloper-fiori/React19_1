function User(props) {
  const { user } = props;
  return (
    <div className="mx-auto flex gap-x-4">
      <h3>{user.name}</h3>
      <h3>{user.id}</h3>
    </div>
  );
}

export default User;
