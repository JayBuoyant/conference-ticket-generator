import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Conference Ticket Generator</h1>
      <button onClick={() => navigate("/ticket")} className="generate-button">
        🎟️ Generate Ticket
      </button>
    </div>
  );
};

export default Home;
