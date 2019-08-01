import React from "react";
import { Input } from "../Input";
import { Button } from "../Button";
import { Stack } from "../Stack";

import { Center } from "./Center";

export function CenterExampleBasic() {
  return (
    <Center>
      <Stack>
        <Input placeholder="First name" label="First Name" />
        <Input placeholder="Last name" label="Last Name" />
        <Input placeholder="Email Address" type="email" label="Email Address" />
        <Button>Click Me</Button>
      </Stack>
    </Center>
  );
}

/* Proptype size */
export function CenterExampleNarrow() {
  return (
    <Center size="narrow">
      <Stack>
        <Input placeholder="First name" label="First Name" />
        <Input placeholder="Last name" label="Last Name" />
        <Input placeholder="Email Address" type="email" label="Email Address" />
        <Button>Click Me</Button>
      </Stack>
    </Center>
  );
}

export function CenterExampleWide() {
  return (
    <Center size="wide">
      <Stack>
        <Input placeholder="First name" label="First Name" />
        <Input placeholder="Last name" label="Last Name" />
        <Input placeholder="Email Address" type="email" label="Email Address" />
        <Button>Click Me</Button>
      </Stack>
    </Center>
  );
}

/* Proptype gutterSize */
export function CenterExampleNarrowGutters() {
  return (
    <Center gutterSize="narrow">
      <Stack>
        <Input placeholder="First name" label="First Name" />
        <Input placeholder="Last name" label="Last Name" />
        <Input placeholder="Email Address" type="email" label="Email Address" />
        <Button>Click Me</Button>
      </Stack>
    </Center>
  );
}

export function CenterExampleWideGutters() {
  return (
    <Center gutterSize="wider">
      <Stack>
        <Input placeholder="First name" label="First Name" />
        <Input placeholder="Last name" label="Last Name" />
        <Input placeholder="Email Address" type="email" label="Email Address" />
        <Button>Click Me</Button>
      </Stack>
    </Center>
  );
}

export function CenterExampleIntrinsic() {
  return (
    <Center intrinsic>
      <Stack>
        <Input placeholder="First name" label="First Name" />
        <Input placeholder="Last name" label="Last Name" />
        <Input placeholder="Email Address" type="email" label="Email Address" />
        <Button>Click Me</Button>
      </Stack>
    </Center>
  );
}
