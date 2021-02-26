import logo from './logo.svg';
import './App.css';

import Button from 'react-bootstrap/Button'

import { Home } from "./components/Home";
import { Department } from "./components/Department";
import { Employee } from "./components/Employee";

import { BrowserRouter, Route, Switch, Swoitch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
        <Route path= '/' component={Home} exact />
        <Route path='/Department' component={Department} />
        <Route path='/Employee' component={Employee}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
