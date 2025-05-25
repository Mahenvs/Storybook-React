import { fn } from "@storybook/test";
import CustomButton from "./CustomButton";

export default {
  title: "Custom Button",
  component: CustomButton,
  args: { onClick: fn() },
};

export const customPrimary = {
  args: {
    size: "Large",
    mode: "info",
    backgroundColor: "skyblue",
  },
};
export const CustomSuccess = {
  args: {
    size: "large",
    mode: "success",
    backgroundColor: "green",
  },
};
export const CustomWarning = {
  args: {
    size: "Large",
    mode: "warning",
    backgroundColor: "orange",
  },
};

export const CustomButtonSmall = {
  args: {
    size: "small",
  },
};

export const CustomButtonMedium = {
  args: {
    size: "medium",
    mode: "warning",
  },
};

export const CustomButtonLarge = {
  args: {
    size: "large",
    mode: "info",
  },
};

export const SuccessLargeButton = {
  args: {
    size: "medium",
    mode: "success",
  },
};
