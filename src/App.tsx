import React, { FC } from "react";
import "./App.css";
import { GitCompare } from "./features/gitCompare/GitCompare";

const App: FC = () => {
  return (
    <div className="App">
      <GitCompare />
    </div>
  );
};

export default App;
