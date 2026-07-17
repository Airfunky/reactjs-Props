import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>@{user.username}</p>
          <p>{user.email}</p>
          <p>{user.address.city}, {user.address.street}</p>
          <p>{user.company.name}</p>
        </div>
      ))}
    </div>
  );
}

export default App;