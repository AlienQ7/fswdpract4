// UserCard.jsx
import React from 'react';                                                  
function UserCard({ name, age, email }) {
  return (
    <div className="user-card">
      <h2>{name}</h2>                                                             <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default UserCard;
