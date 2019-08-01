import { useState, useEffect } from "react";

let id = 0;
const genId = () => ++id;

export const useUniqueId = () => {
  const [id, setId] = useState(null);
  useEffect(() => setId(genId()), []);
  return id;
};
