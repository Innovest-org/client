import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [activeComponent, setActiveComponent] = useState('Dashboard');


  return (
    <AppContext.Provider value={{activeComponent, setActiveComponent}}>
      {children}
    </AppContext.Provider>
  )
}
