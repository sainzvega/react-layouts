import React from "react";
import classNames from "classnames";
import "./Box.css";

export function Box({ children, invert, ...props }) {
  return (
    <div
      className={classNames({ box: true, "box--invert": invert && true })}
      {...props}
    >
      {children}
    </div>
  );
}
