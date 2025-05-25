import Stack from "./Stack";

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
};
export const HorizontalStack = {
  args: {
    orientation: "horizontal",
    stackLength: 30,
    // wrap: "wrap",
    gap: "6",
  },
};
