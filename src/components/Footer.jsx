import React from "react";
import "./../styles/App.css"; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Conference Ticket Generator. All rights reserved.</p>
      <div className="social-links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
