import React, { createContext, useState, useEffect } from "react";

const StatsContext = createContext({
  stats: {},
  setStats: () => {}
});

export const StatsProvider = ({ children }) => {
  const [stats, setStats] = useState({});


  useEffect(() => {
    const savedStats = localStorage.getItem("stats");
    if (savedStats) {
      setStats(JSON.parse(savedStats));
    }
  }, []);

  
  useEffect(() => {
    if (stats) {
        localStorage.setItem("stats", JSON.stringify(stats));
      }
    }, [stats]);

  return (
    <StatsContext.Provider value={{ stats, setStats }}>
      {children}
    </StatsContext.Provider>
  );
};

export const useStats = () => {
  return React.useContext(StatsContext);
};

export default StatsContext;
