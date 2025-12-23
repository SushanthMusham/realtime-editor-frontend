import { io } from "socket.io-client";

export const socket = io("https://realtime-editor-backend-h48m.onrender.com", {
  autoConnect: false,
  transports: ["websocket"], 
});
