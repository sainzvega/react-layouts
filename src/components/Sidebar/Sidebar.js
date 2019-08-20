import React from "react";
import classNames from "classnames";
import "./Sidebar.css";

export function Sidebar({ children, side, ...props }) {
  const classes = classNames({
    sidebar: true
  });
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
}
