import React from "react";
import classNames from "classnames";

import "./Stack.css";

export const Stack = ({ children, recursive, space = "" }) => {
  return (
    <div
      className={classNames({
        stack: true,
        "stack-small": space === "small" && true,
        "stack-large": space === "large" && true,
        "stack-recursive": recursive && true,
        "stack-recursive-small": recursive && space === "small" && true,
        "stack-recursive-large": recursive && space === "large" && true
      })}
    >
      {children}
    </div>
  );
};
