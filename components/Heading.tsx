import { twMerge } from "tailwind-merge";

const Heading = ({
  as: Element = "h1",
  children = "Heading goes here",
  className = "",
}: {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <Element className={twMerge("font-title", className)}>{children}</Element>
  );
};

export default Heading;
