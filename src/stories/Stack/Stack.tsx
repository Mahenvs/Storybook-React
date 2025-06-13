import "./stack.css";
export interface StackProps {
  orientation: "horizontal" | "vertical";
  stackLength: number;
  wrap: "wrap" | "no-wrap";
  gap: "2" | "3" | "4" | "5" | "6";
}
const Stack = ({
  orientation = "vertical",
  stackLength = 5,
  wrap = "no-wrap",
  gap = "2",
  ...props
}: StackProps) => {
  stackLength = stackLength < 0 ? 2 : stackLength;
  return (
    <div
      data-testid="stack-root"
      className={[
        orientation === "vertical" ? "stack-vertical" : "stack-horizontal",
        wrap === "wrap" ? "stack-wrap" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      style={{ gap: `${gap}px` }}
      {...props}
    >
      {Array.from({ length: stackLength }, (_, index) => (
        <span data-testid="stack-item" className="stack " key={index}></span>
      ))}
    </div>
  );
};

export default Stack;
