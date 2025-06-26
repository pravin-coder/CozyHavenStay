import React, { useState } from 'react';
import { registerUser } from '../Services/userService';

export const AddUser = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');

  const saveUser = async (e) => {
    e.preventDefault();

    const userData = { username, email, name, password, role };

    try {
      await registerUser(userData);
      setMessage('User added successfully!');
      setUsername('');
      setEmail('');
      setName('');
      setPassword('');
      setRole('');
    } catch (error) {
      console.error('Error saving user:', error);
      setMessage('Error adding user.');
    }
  };

  return (
    <div className="container mt-4">
      <div className="card col-md-6 offset-md-3">
        <h2 className="text-center mt-3">ADD USER</h2>
        <div className="card-body">
          {message && <div className="alert alert-info">{message}</div>}
          <form onSubmit={saveUser}>
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInputUsername" placeholder="UserName"
                value={username} onChange={(e) => setUsername(e.target.value)} required />
              <label htmlFor="floatingInputUsername">UserName</label>
            </div>

            <div className="form-floating mb-3">
              <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com"
                value={email} onChange={(e) => setEmail(e.target.value)} required />
              <label htmlFor="floatingEmail">Email address</label>
            </div>

            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingName" placeholder="FullName"
                value={name} onChange={(e) => setName(e.target.value)} required />
              <label htmlFor="floatingName">Full Name</label>
            </div>

            <div className="form-floating mb-3">
              <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                value={password} onChange={(e) => setPassword(e.target.value)} required />
              <label htmlFor="floatingPassword">Password</label>
            </div>

            <div className="form-floating mb-3">
              <select className="form-select" id="floatingSelect" value={role} onChange={(e) => setRole(e.target.value)} required>
                <option value="">Select your role</option>
                <option value="USER">User</option>
                <option value="HOTEL_OWNER">Hotel Owner</option>
              </select>
              <label htmlFor="floatingSelect">Which account you want</label>
            </div>

            <div className="d-grid mt-3">
              <button type="submit" className="btn btn-primary">Save User</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
