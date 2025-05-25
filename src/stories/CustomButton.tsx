import React from "react";
import "./CustomButton.css";
export interface CustomButtonProps {
  size?: "small" | "medium" | "large";
  label: string;
  backgroundColor?: string;
  mode?: "success" | "warning" | "info";
  onClick?: () => void;
}
const CustomButton = ({
  size = "medium",
  label = "Button",
  // backgroundColor = "skyBlue",
  mode = "info",
  ...props
}: CustomButtonProps) => {
  // const { color, size } = props;

  return (
    <button
      type="button"
      // style={{ backgroundColor }}
      className={[
        "storybook-custom-button",
        `storybook-custom-button-${size}`,
        `storybook-custom-button-${mode}`,
      ].join(" ")}
      {...props}
    >
      {label}
    </button>
  );
};

export default CustomButton;
