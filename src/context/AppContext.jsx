import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { io } from 'socket.io-client';

export const AppContext = createContext();
const localHost = 'https://server-production-82fc.up.railway.app/';

export const AppProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const [user, setUser] = useState();
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const autoLogin = async () => {
      try {
        const response = await axios.get('https://server-production-82fc.up.railway.app/api/user/verify', {
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
    const socket = io(localHost);
    setSocket(socket);

    if (socket) {
      socket.emit('joinCommunity', '203e0ff0-7077-4171-8bd8-a19e556a123c');
    }

    return () => {
      socket.disconnect();
    }
  },[])


  return (
    <AppContext.Provider value={{activeComponent, setActiveComponent, socket, user, setUser}}>
      {children}
    </AppContext.Provider>
  )
}
