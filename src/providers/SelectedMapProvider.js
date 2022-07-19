import React, { createContext, useState, useContext, useCallback, useEffect } from 'react';

const SelectedMapContext = createContext();

export const SelectedMapProvider = ({ children }) => {
  const [ selectedMap, setSelectedMap] = useState(null);
  const [mapTokens, setMapTokens] = useState(0);
  const [ selectedStage, setSelectedStage] = useState(null);

  const handleReturnSelectedMap = useCallback(() => {
    if(!selectedMap){
      const map = localStorage.getItem("wb-map");
      
      if(map){
        setSelectedMap(JSON.parse(map));
        return JSON.parse(map);
      }
    }

    return selectedMap;
  }, [selectedMap]);

  const handleSetSelectedMap = useCallback((map) => {
    setSelectedMap(map);
    localStorage.setItem("wb-map", JSON.stringify(map));
  }, []);

  return (
    <SelectedMapContext.Provider
      value={{ selectedMap: handleReturnSelectedMap, setSelectedMap: handleSetSelectedMap, mapTokens, selectedStage, setSelectedStage }}
    >
      {children}
    </SelectedMapContext.Provider>
  );
};

export function useSelectedMap() {
  return useContext(SelectedMapContext);
}
