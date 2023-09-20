import axios from "axios";
import React, { useEffect, useState } from "react";
import "./UsersList.css";

const UsersList = ({ names }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6")
      .then((res) => {
        setUsers(res.data.team);
      });
  }, []);

  const mergedArray = [...users, ...names];

  console.log(mergedArray);

  return (
    <div className="bg-cogs text-white flex flex-col items-center  py-8 px-14 ">
      <h1 className="flex flex-col text-4xl font-bold leading-snug  py-6">
        <span>Join</span> <span>the</span> <span>team</span>
      </h1>

      <ul className="list-disc pl-3 ">
        {mergedArray.map((user, index) => (
          <li className="text-white text-base" key={index}>
            {user}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
