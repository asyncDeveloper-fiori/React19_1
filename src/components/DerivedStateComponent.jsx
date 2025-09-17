import { useState } from 'react';

const DerivedStateComponent = () => {
  var [users, setUsers] = useState([]);
  var [user, setUser] = useState('');

  const handleAddUser = () => {
    setUsers([...users, user]);
    setUser('');
  };

  const totalUsers = users.length;
  const uniqueUsers = [...new Set(users)].length;

  return (
    <div>
      <h2>Total users : {totalUsers}</h2>
      <h2>Unique users : {uniqueUsers}</h2>
      <input
        placeholder="Enter username"
        className="bg-zinc-600"
        value={user}
        onChange={(event) => setUser(event.target.value)}
      />
      <button
        onClick={handleAddUser}
        className="m-1 p-1 rounded-sm bg-purple-500"
      >
        Add user
      </button>
      {users.map((user, index) => (
        <h3 key={index}>{user}</h3>
      ))}
    </div>
  );
};

export default DerivedStateComponent;
