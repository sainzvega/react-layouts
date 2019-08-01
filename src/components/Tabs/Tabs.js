import React, { useState, createContext, useContext, Children } from "react";
import classNames from "classnames";
import "./Tabs.css";

const TabsContext = createContext();
export function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <TabsContext.Provider value={{ activeIndex, setActiveIndex }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

const TabContext = createContext();
export function TabList({ children, wrap }) {
  const wrappedChildren = Children.map(children, (child, index) => (
    <TabContext.Provider value={index}>{child}</TabContext.Provider>
  ));
  return (
    <div
      className={classNames({
        tabs__list: true,
        "tabs__list--wrap": wrap
      })}
    >
      {wrappedChildren}
    </div>
  );
}

export function wrapEvent(externalHandler, internalHandler) {
  return event => {
    externalHandler && externalHandler(event);
    if (!event.defaultPrevented) {
      internalHandler(event);
    }
  };
}
export function Tab({ children, onClick, isDisabled, ...rest }) {
  const index = useContext(TabContext);
  const { activeIndex, setActiveIndex } = useContext(TabsContext);
  const isActive = index === activeIndex;

  function handleClick() {
    if (isDisabled) {
      return;
    }
    setActiveIndex(index);
  }

  return (
    <div
      className={classNames({
        tabs__tab: true,
        active: isActive,
        disabled: isDisabled
      })}
      onClick={wrapEvent(onClick, handleClick)}
      {...rest}
    >
      {children}
    </div>
  );
}

export function TabPanels({ children }) {
  const { activeIndex } = useContext(TabsContext);
  return <div className="tabs__panel">{children[activeIndex]}</div>;
}

export function TabPanel({ children }) {
  return children;
}
