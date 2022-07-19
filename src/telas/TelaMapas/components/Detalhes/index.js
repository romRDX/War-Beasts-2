import React, { Component, useCallback } from 'react';

import { Botao } from '../../../../globalComponents/Botoes/styles.js';

import { useNavigate } from 'react-router-dom';

import { Container, Portrait, Info } from './styles';
import { useSelectedMap } from '../../../../providers/SelectedMapProvider';

const Detalhes = ({ mapaSelecionado }) => {

    const navigate = useNavigate();

    const { setSelectedMap } = useSelectedMap();

    const entrarMapa = useCallback( (e)  => {
        e.preventDefault();

        if (!mapaSelecionado){
            return;
        }

        setSelectedMap(mapaSelecionado);
        navigate('/mapa');
    }, [mapaSelecionado]);

    const buttonStyle = {
        margin: ' 0 auto 15px',
        size: [60,6],
        fontSize: '20px',
    }

    return (
        <Container>
            <Portrait />
            <Info>
                <div>
                    {  mapaSelecionado.nome  && <h2>Estágio: {  mapaSelecionado.nome }</h2>}
                </div>
                <div>
                    {  mapaSelecionado.nivel  && <h2>Nível: {  mapaSelecionado.nivel }</h2>}
                </div>
                <div>
                    
                </div>
            </Info>
            <Botao theme={buttonStyle} onClick={ entrarMapa.bind(this)}> Entrar </Botao>
        </Container>
    )
    
};

export default Detalhes;