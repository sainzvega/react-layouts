import React from "react";
import { Stack } from "../Stack";
import { Box } from "../Box";
import { Sidebar } from "./Sidebar";

const links = [
  { name: "Layout", href: "#" },
  { name: "CSS", href: "#" },
  { name: "Web Design", href: "#" },
  { name: "Code", href: "#" },
  { name: "Front-End", href: "#" },
  { name: "Development", href: "#" }
];

export function SidebarExampleBasic() {
  return (
    <Sidebar>
      <div>
        <Stack>
          <Box>
            <ul>
              {links.map(link => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </Box>
        </Stack>
        <Box>
          <div style={{ width: 400 }}>This is where the content goes</div>
        </Box>
      </div>
    </Sidebar>
  );
}
