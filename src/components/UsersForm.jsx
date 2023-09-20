import { useState } from "react";

const UsersForm = ({ addName }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [terms, setTerms] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addName(name);
    setName("");
    setEmail("");
    setTerms(false);
  };

  return (
    <div className=" pl-10 pr-3 py-10 max-w-md  flex flex-col">
      <h2 className="text-sky-950 text-2xl my-6 font-bold tracking-wide ">
        Register
      </h2>
      <h3 className="text-sky-950 text-xl font-bold">
        Team player - Be positive - Beat yesterday
      </h3>

      <p className=" text-gray-400 text-base my-5">
        Together we re-define the experience of online gaming through
        gamification and novel technical solutions.
      </p>
      <form className="" onSubmit={handleSubmit}>
        <input
          className="border border-gray-300 mb-2 p-1 w-full block"
          id="name"
          name="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          maxLength={15}
        />

        <input
          className="border border-gray-300 p-1 w-full block"
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <div className="flex flex-row mt-2">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            value={terms}
            className="border border-gray-300 mr-2"
            onChange={(e) => setTerms(e.target.checked)}
            required
          />
          <label htmlFor="terms">I agree to the terms</label>
        </div>

        <button className="bg-blue-500 text-white px-4 py-2 rounded-s mt-5 hover:scale-125 duration-300 cursor-pointer">
          I'm in, sign me up!
        </button>
      </form>
    </div>
  );
};

export default UsersForm;
