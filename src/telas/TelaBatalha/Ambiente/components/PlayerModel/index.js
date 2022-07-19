import React from 'react'

import { Container } from './styles'

import { Modelo } from './styles';
import { useCharacter } from '../../../../../providers/ChosenCharacterProvider';

const Index = () => {

    const { getMyCharacter } = useCharacter();
    const character = getMyCharacter();

    console.log(character.modelo);
   
    return (
        <Container>
            <Modelo img={character.modelo} />
        </Container>
    )
}

export default Index;
