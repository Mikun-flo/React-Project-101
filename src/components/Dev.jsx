import { useState } from "react";

export default function AddDev() {
  const [dev, setdev] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setdev((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/meelyzvk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dev),
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
        name="email"
        value={dev.email}
        onChange={handleChange}
        placeholder="Your email"
      />
      <input
        name="message"
        value={dev.message}
        onChange={handleChange}
        placeholder="Message"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
