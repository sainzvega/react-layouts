import { StackExampleBasic } from "./components/Stack/examples";
import { BoxExampleBasic, BoxExampleInverted } from "./components/Box/examples";
import {
  CenterExampleBasic,
  CenterExampleNarrow,
  CenterExampleWide,
  CenterExampleNarrowGutters,
  CenterExampleWideGutters,
  CenterExampleIntrinsic
} from "./components/Center/examples";

// TODO: Figure out how to generate this auto
// TODO: Figure out how to nest routes
export const routes = {
  Stack: {
    routeName: "stack",
    description: "This example demonstrates Stack Component",
    example: StackExampleBasic
  },
  Box: {
    Default: {
      routeName: "box",
      description: "This example demonstrates Box Component",
      example: BoxExampleBasic
    },
    Inverted: {
      routeName: "box-inverted",
      description: "This example demonstrates Box Inverted Component",
      example: BoxExampleInverted
    }
  },
  Center: {
    Default: {
      routeName: "center",
      description: "This example demonstrates Center Component",
      example: CenterExampleBasic
    },
    SizeNarrow: {
      routeName: "center-narrow",
      description: "This example demonstrates Center Narrow Component",
      example: CenterExampleNarrow
    },
    SizeWide: {
      routeName: "center-wide",
      description: "This example demonstrates Center Wide Component",
      example: CenterExampleWide
    },
    GutterSizeNarrow: {
      routeName: "center-gutter-narrow",
      description: "This example demonstrates Center Narrow Gutters Component",
      example: CenterExampleNarrowGutters
    },
    GutterSizeWide: {
      routeName: "center-gutter-wide",
      description: "This example demonstrates Center Wide Gutters Component",
      example: CenterExampleWideGutters
    },
    Intrinsic: {
      routeName: "center-intrinsic",
      description: "This example demonstrates Center Intrinsic Component",
      example: CenterExampleIntrinsic
    }
  }
};
