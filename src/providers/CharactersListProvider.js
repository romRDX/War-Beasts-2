import React, { createContext, useState, useContext, useCallback } from 'react';

import { personagens } from "../Data/SandBox/Personagens";

const CharactersListContext = createContext();

export const CharactersListProvider = ({ children }) => {
  const [ charactersList, setCharactersList] = useState(personagens);

  const addToList = useCallback((character) => {
    setCharactersList(prev => [...prev, character])
  }, []);

  return (
    <CharactersListContext.Provider
      value={{ charactersList, setCharactersList, addToList }}
    >
      {children}
    </CharactersListContext.Provider>
  );
};

export function useCharactersList() {
  return useContext(CharactersListContext);
}
