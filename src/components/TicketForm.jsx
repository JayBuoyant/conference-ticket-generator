import React, { useState } from "react";
import UploadWidget from "./UploadWidget";

const TicketForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    avatar: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    localStorage.setItem("ticketForm", JSON.stringify(formData));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label>Full Name:</label>
      <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />

      <label>Email:</label>
      <input type="email" name="email" value={formData.email} onChange={handleChange} required />

      <label>Upload Avatar:</label>
      <UploadWidget setImageUrl={(url) => setFormData({ ...formData, avatar: url })} />

      <button type="submit">Generate Ticket</button>
    </form>
  );
};

export default TicketForm;