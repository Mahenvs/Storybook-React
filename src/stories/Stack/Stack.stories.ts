import Stack from "./Stack";
import { within, expect } from "@storybook/test";

const meta = {
  title: "Stack",
  component: Stack,
  tags: ["autodocs"],
  argTypes: {
    gap: {
      control: { type: "select" },
      options: ["2", "3", "4", "5", "6"],
    },
    stackLength: {
      control: { type: "number", min: 2 },
      defaultValue: 5,
    },
  },
};
export default meta;
export const VerticalStack = {
  args: {
    orientation: "vertical",
    stackLength: 5,
    wrap: "wrap",
    gap: "5",
  },
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    // Check that the Stack renders the correct number of children
    const stackItems = canvas.getAllByTestId("stack-item");
    expect(stackItems.length).toBe(args.stackLength);

    const stack = canvas.getByTestId("stack-root");
    expect(stack).toHaveClass("stack-vertical");
    expect(stack).toHaveClass("stack-wrap");
  },
};
export const HorizontalStack = {
  args: {
    orientation: "horizontal",
    stackLength: 30,
    // wrap: "wrap",
    gap: "6",
  },
};
