import React from "react";
import classNames from "classnames";

import "./Cluster.css";

export const Cluster = ({ justify, align, space, children, ...props }) => {
  return (
    <div
      {...props}
      className={classNames({
        cluster: true,
        "cluster-space--smaller": space && space === "smaller",
        "cluster-space--small": space && space === "small",
        "cluster-space--big": space && space === "big",
        "cluster-space--bigger": space && space === "bigger",
        "cluster-justify--start": justify && justify === "start",
        "cluster-justify--end": justify && justify === "end",
        "cluster-justify--center": justify && justify === "center",
        "cluster-justify--between": justify && justify === "between",
        "cluster-justify--around": justify && justify === "around",
        "cluster-align--start": align && align === "start",
        "cluster-align--end": align && align === "end",
        "cluster-align--center": align && align === "center",
        "cluster-align--baseline": align && align === "baseline",
        "cluster-align--stretch": align && align === "strech",
        [props.className]: true
      })}
    >
      {children}
    </div>
  );
};
