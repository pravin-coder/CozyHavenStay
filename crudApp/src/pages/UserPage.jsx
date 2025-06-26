import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import UserNavbar from "../component/UserNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserPage.css"; 

const UserPage = () => {
const [users, setUsers] = useState([]);
const [filteredUsers, setFilteredUsers] = useState([]);
const [sortOption, setSortOption] = useState("");
const [showForm, setShowForm] = useState(false);
const [newUser, setNewUser] = useState({firstname: "",lastname: "",username: "",email: "",phone: "",city: "",street: "",zipcode: "",});

useEffect(() => {
const saved = localStorage.getItem("userData");
if (saved) {
      const parsed = JSON.parse(saved);
      setUsers(parsed);
      setFilteredUsers(parsed);
} else {
    fetch("https://fakestoreapi.com/users")
        .then((res) => res.json())
        .then((data) => {
          setUsers(data);
          setFilteredUsers(data);
        })
   .catch((err) => console.error("Failed to fetch users:", err));
    }
  }, []);

  const handleSort = (option) => {
    let sorted = [...filteredUsers];
if (option==="name-asc") {
      sorted.sort((a, b) => a.name.firstname.localeCompare(b.name.firstname));
} else if (option==="name-desc") {
      sorted.sort((a, b)=>b.name.firstname.localeCompare(a.name.firstname));
} else if (option==="city") {
      sorted.sort((a, b)=>a.address.city.localeCompare(b.address.city));
}
setSortOption(option);
setFilteredUsers(sorted);
  };

const handleDelete = (id) => {
const updated = filteredUsers.filter((u)=>u.id!==id);
setUsers(updated);
setFilteredUsers(updated);
localStorage.setItem("userData",JSON.stringify(updated));
  };

  const handleAdd = () => {
    const id = Math.max(...users.map((u) => u.id), 0) + 1;
    const added = {
      id,
      name: {firstname: newUser.firstname,lastname: newUser.lastname,
      },
      username: newUser.username,email: newUser.email,phone: newUser.phone,
      address: {city: newUser.city,street: newUser.street,zipcode: newUser.zipcode,
      },
    };
    const updated = [...users, added];
    setUsers(updated);
    setFilteredUsers(updated);
     localStorage.setItem("userData", JSON.stringify(updated));
    setShowForm(false);
    setNewUser({
      firstname: "",lastname: "",username: "",email: "",phone: "",city: "",street: "",zipcode: "",
    });
  };
  return (
    <>
     <div className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 backdrop-blur-lg shadow-xl">
        <UserNavbar />
      </div>
    <div className="user-page-container">
        
      <div className="container bg-white p-4 rounded shadow">
        
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button className="btn btn-primary" onClick={() => setShowForm(true)}>
            Add User
          </button>

          <h3 className="text-center flex-grow-1">CUSTOMERS INFORMATION</h3>

          <select
            className="form-select w-auto"
            value={sortOption}
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="">Sort by</option>
            <option value="name-asc">Name: A to Z</option>
            <option value="name-desc">Name: Z to A</option>
            <option value="city">City</option>
          </select>
        </div>

<div className="table-responsive">
         <table className="table table-bordered text-center table-hover">
                      <thead className="table-light">
                          <tr>
        <th>S.No</th>
        <th>Full Name</th>
                    <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
                <th>City</th>
                <th>Street</th>
                <th>Zip Code</th>
                <th>Actions</th>
              </tr>
            </thead>
     <tbody>
        {filteredUsers.length > 0 ? (
            filteredUsers.map((user, index) => (
        <tr key={user.id}>
                    <td>{index + 1}</td>
                    <td>{user.name.firstname} {user.name.lastname}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.address.city}</td>
                    <td>{user.address.street}</td>
                    <td>{user.address.zipcode}</td>
                    <td>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>
                        <FaTrash />
                      </button>
                    </td>
        </tr>
  ))
) : (
                <tr>
                  <td colSpan="9">No users found.</td>
             </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Modal for Add User */}
        {showForm && (
          <div className="modal show fade d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add New User</h5>
                  <button type="button" className="btn-close" onClick={() => setShowForm(false)}></button>
                </div>
                <div className="modal-body">
                  <div className="row g-3">
                    {[
                      ["First Name", "firstname"],
                      ["Last Name", "lastname"],
                      ["Username", "username"],
                      ["Email", "email"],
                      ["Phone", "phone"],
                      ["City", "city"],
                      ["Street", "street"],
                      ["Zip Code", "zipcode"],
                    ].map(([placeholder, key], i) => (
                      <div className="col-md-6" key={i}>
                        <input
                          type="text"
                          className="form-control"
                          placeholder={placeholder}
                          value={newUser[key]}
                          onChange={(e) => setNewUser({ ...newUser, [key]: e.target.value })}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="modal-footer">
                  <button className="btn btn-secondary" onClick={() => setShowForm(false)}>
                    Cancel
                  </button>
                  <button className="btn btn-primary" onClick={handleAdd}>
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};


export default UserPage;
