import React from 'react'
import { Link } from 'react-router-dom';

import { Botao } from '../../globalComponents/Botoes/styles';

import { Menu, Background } from "./styles.js";

const TelaMenu = (props) => {
    const buttonStyle = {
        fontSize: '30px',
        size: [75],
        margin: '15px auto'
    };

    return (
        <>
            <Menu>
                <h1>WAR BEAST</h1>
               <Botao theme={buttonStyle} ><Link to="/personagem">Personagem</Link></Botao>
               <Botao theme={buttonStyle} ><Link to="/mapas">Carreira</Link></Botao>
               <Botao theme={buttonStyle} >Dungeons</Botao>
               <Botao theme={buttonStyle} ><Link to="/arena">Arena</Link></Botao>
               <Botao theme={buttonStyle} ><Link to="/personagens">Escolher Personagens</Link></Botao>
            </Menu>
            <Background>
            </Background>
        </>
    )
};

export default TelaMenu;