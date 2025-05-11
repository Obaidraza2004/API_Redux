// components/Users.jsx
import React from "react";

const Users = ({ item }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p>{item.price}</p>
    </div>
  );
};

export default Users;
