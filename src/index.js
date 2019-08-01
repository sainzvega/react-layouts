import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { NavTabs } from "./components/NavTabs";
import { StackExampleBasic } from "./components/Stack/examples";
import { BoxExampleBasic, BoxExampleInverted } from "./components/Box/examples";

const routerTable = {
  Stack: {
    routeName: "stack",
    description: "This example demonstrates Stack Component",
    example: StackExampleBasic
  },
  Box: {
    routeName: "box",
    description: "This example demonstrates Box Component",
    example: BoxExampleBasic
  },
  BoxInverted: {
    routeName: "box-inverted",
    description: "This example demonstrates Box Inverted Component",
    example: BoxExampleInverted
  }
};

function App() {
  const [currentRouteData, setCurrentRouteData] = useState(
    routerTable["Stack"]
  );

  const routes = Object.keys(routerTable);
  const CurrentRouteComponent = currentRouteData.example;

  function handleNavClick(routeName) {
    setCurrentRouteData(routerTable[routeName]);
  }

  return (
    <div className="App">
      <NavTabs routes={routes} onClick={handleNavClick} />
      <div className="Description">
        <p>{currentRouteData.description}</p>
      </div>
      <div className="Example">
        {CurrentRouteComponent && <CurrentRouteComponent />}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
