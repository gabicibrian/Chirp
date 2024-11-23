import React, { createContext, useState } from 'react';

const ChirpContext = createContext();

export const useChirpContext = () => {
  return useChirpContext(ChirpContext);  
};

export const ChirpContextProvider = ({ children }) => {
  const [selectedPanel, setSelectedPanel] = useState('para-ti-panel');
  
  return (
    <ChirpContext.Provider value={{ selectedPanel, setSelectedPanel }}>
      {children}
    </ChirpContext.Provider>
  );
};
