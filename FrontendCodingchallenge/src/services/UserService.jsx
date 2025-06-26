// src/services/UserService.js
export const fetchUsers = async () => {
  const res = await fetch("https://fakestoreapi.com/users");
  return res.json();
};
