// src/components/UsersTable.jsx
import React, { useEffect, useState } from 'react';
import { fetchAllUsers } from '../Services/userService';
import { HeaderComponent } from './HeaderComponent';
import { FooterComponent } from './FooterComponent';
import { BrowserRouter, Routes, Route,Link } from 'react-router-dom';

const UsersTable = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState('');

  const token =
    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEiLCJyb2xlIjoiUk9MRV9BRE1JTiIsImlhdCI6MTc0OTYzMDEyMywiZXhwIjoxNzQ5NjQ4MTIzfQ.SY-tcinzJj-6mOPF5AmIr2Wuckb5fXzNyR7-B-8t0K4'; // Replace with real token or get from localStorage

  useEffect(() => {
    const getUsers = async () => {
      try {
        const data = await fetchAllUsers(token);
        setUsers(data);
      } catch (err) {
        setError('Access denied or failed to fetch users.');
      }
    };
    getUsers();
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <HeaderComponent/>
      <h2>User List</h2>
      <Link to="Adduser" className='btn btn-primary'>AddNewUser</Link>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <FooterComponent/>
    </div>
  );
};

export default UsersTable;
