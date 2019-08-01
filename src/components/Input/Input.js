import React from "react";
import "./Input.css";
import { Stack } from "../Stack";
import { useUniqueId } from "../hooks/useUniqueId";

export const Input = ({
  type,
  label,
  error,
  placeholder,
  ...restInputProps
}) => {
  const inputId = `input:${useUniqueId()}`;

  return (
    <Stack space="small">
      {label && <label htmlFor={inputId}>{label}</label>}
      <input
        {...restInputProps}
        id={inputId}
        className="input"
        type={type}
        placeholder={placeholder}
      />
      {error && <div>Error</div>}
    </Stack>
  );
};
