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
  const [Dev, setDev] = useState({
    firstName: "",
    lastName: "",
    age: "",
    course: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDev((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/meelyzvk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Dev),
      });

      if (response.ok) {
        alert("Form submitted successfully!");
      } else {
        alert("Submission failed. Try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Network error. Check your connection.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="firstName"
        value={student.firstName}
        onChange={handleChange}
        placeholder="First Name"
      />
      <input
        name="lastName"
        value={student.lastName}
        onChange={handleChange}
        placeholder="Last Name"
      />
      <input
        name="age"
        value={student.age}
        onChange={handleChange}
        placeholder="Age"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
