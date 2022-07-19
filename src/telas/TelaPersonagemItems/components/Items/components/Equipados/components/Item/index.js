import React, { useContext } from 'react';
import items from '../../../../../../../../Data/Itens-exemplo';
import ItemsPersonagemContext from '../../../../../../context/ItemsPersonagemContext';
import { CustomLi } from "./styles";

const Item = ({item}) => {

    const { itemSelecionado, setItemSelecionado } = useContext(ItemsPersonagemContext);

    return (
        <CustomLi isSelected={ itemSelecionado.nome == item.nome } onClick={() => setItemSelecionado(item)}>
            <img src={item.icone} />
            <p>{item.nome}</p>
        </CustomLi>
    ) 
}

export default Item