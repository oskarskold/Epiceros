import { useState } from "react";
import UsersList from "../components/UsersList";
import UsersForm from "../components/UsersForm";

function Home() {
  const [namesArray, setNamesArray] = useState([]);

  const addName = (name) => {
    setNamesArray([...namesArray, name]);
  };

  return (
    <div className="flex w-screen min-h-screen">
      <UsersList names={namesArray} />
      <UsersForm addName={addName} />
    </div>
  );
}

export default Home;
