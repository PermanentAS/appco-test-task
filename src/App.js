import React from "react";
import "./App.scss";
import MainPage from "./pages/main-page";
import UserTable from "./pages/user-table";
import UserStats from "./pages/user-stats";

import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/users' component={UserTable} />
        <Route exact path='/user/:id' component={UserStats} />
      </Router>
    </div>
  );
}

export default App;
