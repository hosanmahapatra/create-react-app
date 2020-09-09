import React, { FC } from "react";
import "./App.css";
import { GitCompare } from "./features/gitCompare/GitCompare";
import "antd/dist/antd.css";
import {
  Route,
  Redirect,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";

const App: FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <GitCompare />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
