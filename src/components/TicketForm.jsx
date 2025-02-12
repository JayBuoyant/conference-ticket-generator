import React, { useState } from "react";
import UploadWidget from "./UploadWidget";

const TicketForm = () => {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <form>
      <label>Full Name:</label>
      <input type="text" required />

      <label>Email:</label>
      <input type="email" required />

      <label>Upload Avatar:</label>
      <UploadWidget setImageUrl={setImageUrl} />

      <button type="submit">Generate Ticket</button>
    </form>
  );
};

export default TicketForm;
