// src/components/UserTable.jsx
import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const UserPage = ({ users, onEdit, onDelete }) => {
  return (
    <table className="table w-full min-w-max">
      <thead className="bg-gray-100 text-gray-700 text-sm uppercase font-semibold">
        <tr>
          <th className="px-4 py-3">S.No</th>
          <th className="px-4 py-3">Full Name</th>
          <th className="px-4 py-3">Username</th>
          <th className="px-4 py-3">Email</th>
          <th className="px-4 py-3">Phone</th>
          <th className="px-4 py-3">City</th>
          <th className="px-4 py-3">Address</th>
          <th className="px-4 py-3 text-center">Actions</th>
        </tr>
      </thead>
      <tbody className="text-sm text-gray-800">
        {Array.isArray(users) && users.length > 0 ? (
          users.map((user, index) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-4 py-3">{index + 1}</td>
              <td className="px-4 py-3">
                {user.name?.firstname} {user.name?.lastname}
              </td>
              <td className="px-4 py-3">{user.username}</td>
              <td className="px-4 py-3">{user.email}</td>
              <td className="px-4 py-3">{user.phone}</td>
              <td className="px-4 py-3 capitalize">{user.address?.city}</td>
              <td className="px-4 py-3">
                {user.address?.street} #{user.address?.number},{" "}
                {user.address?.zipcode}
              </td>
              <td className="px-4 py-3 text-center">
                <button
                  className="text-blue-500 hover:text-blue-700 mr-2"
                  onClick={() => onEdit(user)}
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-500 hover:text-red-700"
                  onClick={() => onDelete(user.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="8" className="text-center py-6 text-gray-500">
              No users found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserPage;
