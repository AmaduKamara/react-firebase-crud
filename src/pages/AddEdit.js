import { useState } from "react";

const initialState = {
  name: "",
  email: "",
  contact: "",
};

const AddEdit = () => {
  const [state, setState] = useState(initialState);
  const [data, setDate] = useState({});

  const { name, email, contact } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDate({ ...state, [name]: value });
  };

  return (
    <div className="container mx-auto flex justify-center items-center my-16">
      <div className="w-2/4 box-shadow p-12">
        <h2 className="text-2xl font-semibold">Add Contact</h2>
        <form className="p-4 mt-2" onSubmit={handleSubmit}>
          <div className="w-full mb-5">
            <label htmlFor="name" className="mb-1 block text-lg">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter name"
              className="border p-3 w-full focus:outline-teal-300"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full mb-5">
            <label htmlFor="email" className="mb-1 block text-lg">
              Email
            </label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter email"
              className="border p-3 w-full focus:outline-teal-300"
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-full mb-5">
            <label htmlFor="phone" className="mb-1 block text-lg">
              Contact
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Enter phone contact"
              className="border p-3 w-full focus:outline-teal-300"
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-teal py-3 px-16 w-full bg-teal-500 text-white text-xl hover:bg-teal-700 outline-none"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEdit;
