import React from 'react';

import { Container, Container_2 } from './styles';
import ListaIcones from '../../../../globalComponents/ListaIcones';
import ListaItems from '../../../../globalComponents/ListaItems';
import { useNavigate } from 'react-router-dom';
import { useCharacter } from '../../../../providers/ChosenCharacterProvider';

const Caracteristicas = () => {

    const { getMyCharacter } = useCharacter();
    const myCharacter = getMyCharacter();

    const navigate = useNavigate();

    const goToDetails = (screen) => {
        navigate(`/personagem/${screen}`);
    };

    console.log("ZZZ: ", myCharacter.items);

    return (
        <Container>
            <Container_2 onClick={ () => goToDetails('items')} >
                <ListaIcones dados={ myCharacter.items }/>
            </Container_2>
            <Container_2 onClick={() => goToDetails('habilidades')} >
                <ListaIcones dados={ myCharacter.habilidades}/>
            </Container_2>
            <Container_2 onClick={() => goToDetails('tracos')} >
                <ListaIcones dados={ myCharacter.tracos}/>
            </Container_2>
        </Container>
    )
    
};

export default Caracteristicas;