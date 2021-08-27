import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorege = ({ children }) => {
  const [nightMode, setNightMode] = React.useState(false);
  const [typeMode, setTypeMode] = React.useState(0);
  function handleNightMode() {
    setNightMode(!nightMode);
  }
  function handleTypeMode(i) {
    setTypeMode(i);
  }

  return (
    <GlobalContext.Provider
      value={{ nightMode, handleNightMode, typeMode, handleTypeMode }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
