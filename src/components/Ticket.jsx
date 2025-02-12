import { useNavigate } from "react-router-dom";

const Ticket = () => {
  const navigate = useNavigate();

  return (
    <div className="ticket-container">
      <h2>🎟️ Your Ticket</h2>
      <p>No Avatar Uploaded</p>
      <p>Name: [User Name]</p>
      <p>Email: [User Email]</p>

      {/* Back to Home Button */}
      <button onClick={() => navigate("/")} className="back-button">
        ⬅️ Back to Home
      </button>
    </div>
  );
};

export default Ticket;