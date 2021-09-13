import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home/';
import { Menu } from './components/Menu';

import { Cliente } from './pages/Cliente/Cliente';
import { VisualizarCliente } from './pages/Cliente/VisualizarCliente';
import { CadastrarCliente } from './pages/Cliente/CadastrarCliente';
import { EditarCliente } from './pages/Cliente/EditarCliente';

import { Servico } from './pages/Servico/Servico';
import { VisualizarServico } from './pages/Servico/VisualizarServico';
import { CadastrarServico } from './pages/Servico/CadastrarServico';
import { EditarServico } from './pages/Servico/EditarServico';

import { Pedido } from './pages/Pedido/Pedido';
import { VisualizarPedido } from './pages/Pedido/VisualizarPedido';
import { CadastrarPedido } from './pages/Pedido/CadastrarPedido';
import { EditarPedido } from './pages/Pedido/EditarPedido';

function App() {
  return (
    <div>
      <Menu />
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route path="/cliente/:id" component={Cliente} />
          <Route path="/visualizarcliente" component={VisualizarCliente} />
          <Route path="/cadastrarcliente" component={CadastrarCliente} />
          <Route path="/editarcliente/:id" component={EditarCliente} />

          <Route path="/servico/:id" component={Servico} />
          <Route path="/visualizarservico" component={VisualizarServico} />
          <Route path="/cadastrarservico" component={CadastrarServico} />
          <Route path="/editarservico/:id" component={EditarServico} />

          <Route path="/pedido/:id" component={Pedido} />
          <Route path="/visualizarpedido" component={VisualizarPedido} />
          <Route path="/cadastrarpedido" component={CadastrarPedido} />
          <Route path="/editarpedido/:id" component={EditarPedido} />

        </Switch>
      </Router>
    </div>
  );
}
export default App;
