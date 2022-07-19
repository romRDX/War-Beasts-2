import React, { createContext, useState, useContext, useCallback } from 'react';

const ChosenCharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [ chosenCharacter, setChosenCharacter] = useState(null);

  const handleReturnChosenCharacter = useCallback(() => {
    if(!chosenCharacter){
      const character = localStorage.getItem("wb-character");
      
      if(character){
        setChosenCharacter(JSON.parse(character));
        return JSON.parse(character);
      }
    }

    return chosenCharacter;
  }, [chosenCharacter]);

  const handleSetChosenCharacter = useCallback((character) => {
    setChosenCharacter(character);
    localStorage.setItem("wb-character", JSON.stringify(character));
  }, []);

  return (
    <ChosenCharacterContext.Provider
      value={{ getMyCharacter: handleReturnChosenCharacter, setChosenCharacter: handleSetChosenCharacter }}
    >
      {children}
    </ChosenCharacterContext.Provider>
  );
};

export function useCharacter() {
  return useContext(ChosenCharacterContext);
}
