import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { io } from 'socket.io-client';
import { DOMAIN } from "../Api/Config/config";

export const AppContext = createContext();
const localHost = DOMAIN;

export const AppProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');
  const [user, setUser] = useState();
  const [socket, setSocket] = useState(null);
  const [editingMember, setEditingMember] = useState(null);
  const [communities, setCommunities] = useState([]);
  const [members, setMembers] = useState([]);
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    const autoLogin = async () => {
      try {
        const response = await axios.get(`${DOMAIN}/api/user/verify`, {
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
  }, [])


  return (
    <AppContext.Provider value={{
      activeComponent,
      setActiveComponent,
      socket, setMembers, members,
      admins, setAdmins, user,
      setUser, editingMember, setEditingMember,
      communities, setCommunities
    }}>
      {children}
    </AppContext.Provider>
  )
}
