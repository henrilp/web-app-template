import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import SignUp from "./pages/signup.js";
import Categories from "./pages/Categories.js";
import VentesFlash from "./pages/ventesflash.js";
import Vendre from "./pages/vendre.js";
import VotreCompte from "./pages/votrecompte.js";
import Panier from "./pages/panier.js";
import Admin from "./pages/admin.js";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/Categories" component={Categories} />
          <Route path="/ventesflash" component={VentesFlash} />
          <Route path="/vendre" component={Vendre} />
          <Route path="/votrecompte" component={VotreCompte} />
          <Route path="/panier" component={Panier} />
          <Route path="/admin" component={Admin} />

        </div>
      </Router>
    </div>
  );
}

export default App;
