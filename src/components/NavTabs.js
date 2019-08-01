import React from "react";
import { Tabs, TabList, Tab } from "./Tabs/Tabs";

export function NavTabs({ routes, onClick }) {
  return (
    <Tabs>
      <TabList wrap>
        {routes.map(route => (
          <Tab onClick={() => onClick(route)}>{route}</Tab>
        ))}
      </TabList>
    </Tabs>
  );
}
