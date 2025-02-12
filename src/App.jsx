import { useState } from "react";
import TicketForm from "./components/TicketForm";
import Ticket from "./components/Ticket";
import usePersistedForm from "./hooks/usePersistedForm";

const App = () => {
  const [ticketData, setTicketData] = useState(null);
  const persistedData = usePersistedForm();

  return (
    <div>
      <h1>Conference Ticket Generator</h1>
      {!ticketData && !persistedData ? (
        <TicketForm onSubmit={setTicketData} />
      ) : (
        <Ticket data={ticketData || persistedData} />
      )}
    </div>
  );
};

export default App;