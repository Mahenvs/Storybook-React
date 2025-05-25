import type { Meta } from "@storybook/react";
import { fn } from "@storybook/test";

import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  title: "Custom Input",
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],

  args: { onClick: fn() },
} satisfies Meta<typeof Input>;

export default meta;

export const SmallInput = {
  args: {
    size: "small",
  },
};

export const MediumInput = {
  args: {
    size: "medium",
  },
};

export const LargeInput = {
  args: {
    size: "large",
  },
};
