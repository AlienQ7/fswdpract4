
import React from 'react';                                        import UserCard from './UserCard';
import './App.css';

function App() {
  const users = [
    { id: 1, name: "Alien Q", age: 28, email: "alien@example.com">    { id: 2, name: "Roboto Qum", age: 34, email: "roboto@techcorp>
    { id: 3, name: "Yasuaka Kat", age: 22, email: "yasuaka.d@webm>
  ];

  return (                                                            <div className="app-container">                                     <h1>User Directory</h1>
      <div className="card-list">
        {users.map(user => (
          <UserCard
            key={user.id}
            name={user.name}
            age={user.age}                                                    email={user.email}                                              />                                                              ))}                                                             </div>
    </div>
  );
}

export default App;
