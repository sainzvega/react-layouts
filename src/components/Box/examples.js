import React from "react";
import { Stack } from "../Stack";
import { Input } from "../Input";
import { Button } from "../Button";
import { Box } from "./Box";

export function BoxExampleBasic() {
  return (
    <Box>
      <Stack>
        <Input placeholder="First name" label="First Name" />
        <Input placeholder="Last name" label="Last Name" />
        <Input placeholder="Email Address" type="email" label="Email Address" />
        <Button>Click Me</Button>
      </Stack>
    </Box>
  );
}

export function BoxExampleInverted() {
  return (
    <Box invert>
      <Stack>
        <Input placeholder="First name" label="First Name" />
        <Input placeholder="Last name" label="Last Name" />
        <Input placeholder="Email Address" type="email" label="Email Address" />
        <Button>Click Me</Button>
      </Stack>
    </Box>
  );
}
