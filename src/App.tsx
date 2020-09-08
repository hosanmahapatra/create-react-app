import React, { FC } from "react";
import "./App.css";
import { GitCompare } from "./features/gitCompare/GitCompare";
import "antd/dist/antd.css";

const App: FC = () => {
  return (
    <div className="App">
      <GitCompare />
    </div>
  );
};

export default App;
