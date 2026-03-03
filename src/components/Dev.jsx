function Dev(props) {
  return (
    <div>
      <p>Name: {props.name}</p>
      <p>Role: {props.role}</p>
      <p>Skills: {props.skills}</p>
      <p>Dev: {props.isDev ? "Yes" : "No"}</p>
    </div>
  );
}

//export default Dev;

import { useState } from "react";

export default function AddDev() {
  const [dev, setDev] = useState({
    firstName: "",
    lastName: "",
    age: "",
    courses: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDev((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Collected dev data:", dev);
  };

  return (
    <div>
      <input
        name="firstName"
        value={dev.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        name="lastName"
        value={dev.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        name="age"
        value={dev.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
