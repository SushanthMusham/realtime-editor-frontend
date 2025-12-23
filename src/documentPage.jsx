import { useState, useEffect } from "react";
import { socket } from "./socket";

export default function DocumentPage({ docId }) {
  const [document, setDocument] = useState("");

  useEffect(() => {
    socket.connect();

    socket.emit("join-document", docId);


    socket.on("load-document", (data) => {
      setDocument(data);
    });



    socket.on("receive-changes", (content) => {
      setDocument(content);
    });

    return () => {
      socket.off("receive-changes");
      socket.disconnect();
    };
  }, [docId]);

  const handleChange = (e) => {
    const value = e.target.value;
    setDocument(value);

    socket.emit("send-changes", {
      docId,
      content: value,
    });
  };

  useEffect(() => {
  const interval = setInterval(() => {
    socket.emit("save-document", { docId, content: document });
  }, 2000);

  return () => clearInterval(interval);
}, [document]);





  return (
    <textarea
      value={document}
      onChange={handleChange}
      style={{ width: "400px", height: "300px" }}
    />
  );
}
