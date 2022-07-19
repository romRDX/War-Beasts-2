import React from 'react';

import SkillsButtons from './components/SkillsButtons';
import Detalhes from './components/Detalhes';

import { Container } from './styles';
import { useCharacter } from '../../../../../providers/ChosenCharacterProvider';

const PlayerCard = () => {

    const { getMyCharacter } = useCharacter();
    const character = getMyCharacter();
    
    return (
        <Container>
            <Detalhes character={character} />
            <SkillsButtons character={character} />
        </Container>
    )
}

export default PlayerCard;