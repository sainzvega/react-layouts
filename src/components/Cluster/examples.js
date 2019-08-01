import React from "react";

import { Box } from "../Box";
import { Cluster } from "./Cluster";

const links = [
  { name: "Layout", href: "#" },
  { name: "CSS", href: "#" },
  { name: "Web Design", href: "#" },
  { name: "Code", href: "#" },
  { name: "Front-End", href: "#" },
  { name: "Development", href: "#" }
];

export function ClusterExampleBasic() {
  return (
    <Box>
      <Cluster justify="start" align="start">
        <ul>
          {links.map(link => (
            <Box>
              <li>
                <a href={link.href}>{link.name}</a>
              </li>
            </Box>
          ))}
        </ul>
      </Cluster>
    </Box>
  );
}
