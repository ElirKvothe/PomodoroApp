import React, { createContext, useState } from 'react';

export const PomodoroContext = createContext();

export const PomodoroProvider = ({ children }) => {
  const [focusTime, setFocusTime] = useState(25); // Sadece odak süresi (dakika cinsinden)

  return (
    <PomodoroContext.Provider
      value={{
        focusTime,
        setFocusTime,
      }}
    >
      {children}
    </PomodoroContext.Provider>
  );
};
