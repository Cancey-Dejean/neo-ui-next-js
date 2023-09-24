import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { ArrowRight } from "./Icons";

const Button = ({
  variant = "btn__primary",
  size = "",
  label = "Button Link",
  url = "#",
  btnType = "button",
  className = "",
  linkable,
  icon = false,
  onClick,
}: {
  variant?: "btn__primary" | "btn__white" | "btn__borderless";
  size?: string;
  label?: string;
  url?: string;
  btnType?: "button" | "submit";
  className?: string;
  linkable?: boolean;
  icon?: boolean | React.ReactNode;
  onClick?: () => void;
}) => {
  return linkable ? (
    <Link href={url} className={twMerge("btn", variant, size, className)}>
      {label || <span>Link</span>} {icon ? <span>{icon}</span> : null}
    </Link>
  ) : (
    <button
      type={btnType}
      onClick={onClick}
      className={twMerge("btn", variant, size, className)}
    >
      {label || <span>Button</span>} {icon ? <span>{icon}</span> : null}
    </button>
  );
};

export default Button;
