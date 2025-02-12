import { useState, useEffect } from "react";

const usePersistedForm = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("ticketForm");
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    if (data) {
      localStorage.setItem("ticketForm", JSON.stringify(data));
    }
  }, [data]);

  return data;
};

export default usePersistedForm;
