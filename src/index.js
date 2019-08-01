import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.css";

import { NavTabs } from "./components/NavTabs";
import { StackExampleBasic } from "./components/Stack/examples";
import { BoxExampleBasic, BoxExampleInverted } from "./components/Box/examples";
import {
  CenterExampleBasic,
  CenterExampleNarrow,
  CenterExampleWide,
  CenterExampleNarrowGutters,
  CenterExampleWideGutters,
  CenterExampleIntrinsic
} from "./components/Center/examples";

import { ClusterExampleBasic } from "./components/Cluster/examples";

// TODO: Figure out how to generate this auto
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
  },
  Center: {
    routeName: "center",
    description: "This example demonstrates Center Component",
    example: CenterExampleBasic
  },
  CenterNarrow: {
    routeName: "center-narrow",
    description: "This example demonstrates Center Narrow Component",
    example: CenterExampleNarrow
  },
  CenterWide: {
    routeName: "center-wide",
    description: "This example demonstrates Center Wide Component",
    example: CenterExampleWide
  },
  CenterGutterNarrow: {
    routeName: "center-gutter-narrow",
    description: "This example demonstrates Center Narrow Gutter Component",
    example: CenterExampleNarrowGutters
  },
  CenterGutterWide: {
    routeName: "center-gutter-wide",
    description: "This example demonstrates Center Wide Gutter Component",
    example: CenterExampleWideGutters
  },
  CenterIntrinsic: {
    routeName: "center-intrinsic",
    description: "This example demonstrates Center Intrinsic Component",
    example: CenterExampleIntrinsic
  },
  Cluster: {
    routeName: "cluster",
    description: "This example demonstrates Cluster Component",
    example: ClusterExampleBasic
  }
};

function App() {
  const [currentRouteData, setCurrentRouteData] = useState(
    routerTable["Cluster"]
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
