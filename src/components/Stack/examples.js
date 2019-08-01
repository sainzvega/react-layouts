import React from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { Stack } from "./Stack";
export function StackExampleBasic() {
  return (
    <div>
      <Stack>
        <Input placeholder="First name" label="First Name" />
        <Input placeholder="Last name" label="Last Name" />
        <Input placeholder="Email Address" type="email" label="Email Address" />
        <Button>Click Me</Button>
      </Stack>
    </div>
  );
}
