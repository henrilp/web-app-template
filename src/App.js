import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home.js";
import Login from "./pages/login.js";
import SignUp from "./pages/signup.js";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </div>
      </Router>
    </div>
  );
}

export default App;
