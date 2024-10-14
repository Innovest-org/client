import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { io } from 'socket.io-client';

export const AppContext = createContext();
const localHost = 'http://127.0.0.1:5000/';

export const AppProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const [user, setUser] = useState();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const autoLogin = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:5000/api/user/verify', {
          withCredentials: true,
        });
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (!user) {
      autoLogin();
    }
  }, [user]);

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
    <AppContext.Provider value={{activeComponent, setActiveComponent, socket, user, setUser}}>
      {children}
    </AppContext.Provider>
  )
}
