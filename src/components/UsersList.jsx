import React, { useEffect, useState } from "react";
import { getUsers } from "../utils/api";
import "./UsersList.css";

const UsersList = ({ names }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers()
      .then((apiUsers) => {
        const mergedArray = [...apiUsers, ...names];
        setUsers(mergedArray);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, [names]);

  return (
    <div className="bg-cogs text-white flex flex-col items-center  py-8 px-14 ">
      <h1 className="flex flex-col text-4xl font-bold leading-snug  py-6">
        <span>Join</span> <span>the</span> <span>team</span>
      </h1>

      <ul className="list-disc pl-3 ">
        {users.map((user, index) => (
          <li className="text-white text-base" key={index}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
