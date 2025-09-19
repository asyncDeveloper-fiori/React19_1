import React, { useState } from "react";

function UserComponent() {
  const getUserData = async () => {
    const url = "https://dummyjson.com/users";
    const response = await fetch(url);
    let data = await response.json();
    setUsers([...data.users]);
  };
  const [users, setUsers] = useState([]);
  return (
    <div>
      <button
        onClick={getUserData}
        className="m-1 p-1 bg-blue-400 rounded-sm hover:bg-blue-800 text-white-100"
      >
        Get users
      </button>

      <div>
        <table>
          <tr>
            <th className="px-10">FirstName</th>
            <th className="px-10">Username</th>
            <th className="px-10">Email</th>
          </tr>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="text-zinc-400 px-10">{user.firstName}</td>
              <td className="text-zinc-400 px-10">{user.username}</td>
              <td className="text-zinc-400 px-10">{user.email}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default UserComponent;
