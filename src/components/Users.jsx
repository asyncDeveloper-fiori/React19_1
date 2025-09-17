import User from './User';

function Users() {
  const users = [
    {
      name: 'user1',
      id: 'u1',
    },
    {
      name: 'user2',
      id: 'u2',
    },
    {
      name: 'user3',
      id: 'u3',
    },
  ];
  return (
    <div>
      {users.map((user, index) => (
        <User key={index} user={user} />
      ))}
    </div>
  );
}

export default Users;
