import React, { useContext } from 'react';

import { Container } from './styles.js';
import ListaIcones from '../../../../../../globalComponents/ListaIcones';

import ItemsPersonagemContext from '../../../../context/ItemsPersonagemContext';
import { useCharacter } from '../../../../../../providers/ChosenCharacterProvider.js';

const Tracos = () => {
    const { getMyCharacter } = useCharacter();
    const character = getMyCharacter();
    const { setItemSelecionado } = useContext(ItemsPersonagemContext);

    return (
        <Container>
            <ListaIcones dados={character.items} selecionar={ setItemSelecionado } />
        </Container>
    ) 
}

export default Tracos;