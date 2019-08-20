import React from "react";
import classNames from "classnames";
import "./Input.css";
import { Stack } from "../Stack";
import { useUniqueId } from "../hooks/useUniqueId";

export const Input = ({
  label,
  error,
  spacing,
  className,
  ...restInputProps
}) => {
  const inputId = `input:${useUniqueId()}`;

  return (
    <Stack space={spacing || "small"}>
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        {...restInputProps}
        id={inputId}
        className={classNames({
          input: true,
          "input--error": error && true,
          [className]: className && className
        })}
      />
      {error && <small class="input__error">{error}</small>}
    </Stack>
  );
};
