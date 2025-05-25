import "./input.css";
export interface InputProps {
  inputType: "text" | "email" | "password" | "radio" | "tel";
  onClick: () => void;
  size: "small" | "large" | "medium";
}
export const Input = ({ inputType = "text", ...props }: InputProps) => {
  const { size = "medium", ...rest } = props;
  return (
    <div>
      <input
        type={inputType}
        placeholder={`Enter ${inputType}`}
        className={`input-storybook input-storybook-${size}`}
        {...rest}
      />
    </div>
  );
};

// export default Input;
