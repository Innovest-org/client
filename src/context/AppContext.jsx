import React, { createContext, useEffect, useState } from "react";
import { io } from 'socket.io-client';

export const AppContext = createContext();
const localHost = 'http://127.0.0.1:5000/';

export const AppProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');

  const [socket, setSocket] = useState(null);

  useEffect(() => {
    // Connect tp socket
    const socket = io(localHost);
    setSocket(socket);

    if (socket) {
      socket.emit('joinCommunity', '203e0ff0-7077-4171-8bd8-a19e556a123c');
    }

    return () => {
      // Disconnect from socket
      socket.disconnect();
    }
  },[])


  return (
    <AppContext.Provider value={{activeComponent, setActiveComponent, socket}}>
      {children}
    </AppContext.Provider>
  )
}
