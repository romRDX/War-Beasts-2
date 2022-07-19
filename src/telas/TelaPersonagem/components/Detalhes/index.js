import React from 'react';
import { useCharacter } from '../../../../providers/ChosenCharacterProvider';

import { Box } from './styles';

const Detalhes = () => {
    const { getMyCharacter } = useCharacter();
    const myCharacter = getMyCharacter();

    return (
        <Box>
            <div>Nome: {myCharacter.nome}</div>
            <div>Change Titles</div>
            <div>Power: </div>
            <div>EXP: </div>
            <div>level: {myCharacter.nivel}</div>
            <div>{myCharacter.classe}</div>
            <div>Guild Name: </div>
        </Box>
    )                      
};

export default Detalhes;