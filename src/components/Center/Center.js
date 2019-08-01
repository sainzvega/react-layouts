import React from "react";
import classNames from "classnames";

import "./Center.css";

export const Center = ({
  size,
  centerText,
  gutterSize,
  intrinsic,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className={classNames({
        center: true,
        "center--intrinsic": intrinsic && true,
        "center--narrower": size && size === "narrower",
        "center--narrow": size && size === "narrow",
        "center--wide": size && size === "wide",
        "center--wider": size && size === "wider",
        "center-gutter--narrower": gutterSize && gutterSize === "narrower",
        "center-gutter--narrow": gutterSize && gutterSize === "narrow",
        "center-gutter--wide": gutterSize && gutterSize === "wide",
        "center-gutter--wider": gutterSize && gutterSize === "wider",
        "text-align:center": centerText && true,
        [props.className]: true
      })}
    >
      {children}
    </div>
  );
};
