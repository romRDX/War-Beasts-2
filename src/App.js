import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import TelaInicial from './telas/TelaInicial';
// import TelaRegistro from './telas/TelaRegistro';
import TelaLogin from './telas/TelaLogin';
import TelaPersonagens from './telas/TelaPersonagens';
import TelaPersonagensNovo from './telas/TelaPersonagensNovo';
import TelaMenu from './telas/TelaMenu';
// import TelaArena from './telas/TelaArena';
import TelaPersonagem from './telas/TelaPersonagem';
// import TelaPersonagemHabilidades from './telas/TelaPersonagemHabilidades';
// import TelaPersonagemTracos from './telas/TelaPersonagemTracos';
import TelaPersonagemItems from './telas/TelaPersonagemItems';
import TelaMapa from './telas/TelaMapa';
import TelaMapas from './telas/TelaMapas';
import TelaBatalha_A from './telas/TelaBatalha/Ambiente';
import NotFound from './telas/NotFound';

// import history from './services/history';

// import { Provider } from 'react-redux';
// import store from './store';
import AppProvider from "./providers/AppProvider";

import './global.css';

export default class App extends Component {
  render() {
    return (
      <Router>
          <div id="RDX">
            <AppProvider>
              <Routes>
                <Route path="/" element={<TelaInicial />} exact />
                {/* <Route path="/registro" component={TelaRegistro} exact /> */}
                <Route path="/login" element={<TelaLogin />} exact />
                <Route path="/personagens" element={<TelaPersonagens />}  exact />
                <Route path="/personagens/novo" element={<TelaPersonagensNovo />} exact />
                <Route path="/principal" element={<TelaMenu />} exact />
                <Route path="/personagem" element={<TelaPersonagem />} exact />
                  {/* <Route path="/personagem/habilidades" component={TelaPersonagemHabilidades} exact /> */}
                <Route path="/personagem/items" element={<TelaPersonagemItems />} exact />
                  {/* <Route path="/personagem/tracos" component={TelaPersonagemTracos} exact /> */}
                <Route path="/mapa" element={<TelaMapa />} exact />
                <Route path="/mapas" element={<TelaMapas />} exact />
                <Route path="/batalha-A" element={<TelaBatalha_A />} exact />
                {/* <Route path="/arena" component={TelaArena} exact /> */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </AppProvider>
          </div>
      </Router>
    )
  }
}

