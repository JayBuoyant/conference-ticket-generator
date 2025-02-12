const Ticket = ({ data }) => {
    return (
      <div className="ticket">
        <h2>📰 Conference Ticket</h2>
        <p><strong>Name:</strong> {data.fullName}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <img src={data.avatar} alt="Avatar" className="avatar" />
      </div>
    );
  };
  
  export default Ticket;
  