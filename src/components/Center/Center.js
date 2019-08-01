import React from "react";
import classNames from "classnames";

import "./Center.css";

export const Center = ({ children, intrinsic, ...props }) => {
  return (
    <div
      {...props}
      className={classNames({
        center: true,
        "center--intrinsic": intrinsic && true,
        [props.className]: true
      })}
    >
      {children}
    </div>
  );
};
