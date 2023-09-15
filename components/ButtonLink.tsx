import Link from "next/link";
import { twMerge } from "tailwind-merge";

const ButtonLink = ({
  variant = "btn__primary",
  size = "btn__large",
  label = "Button Link",
  url = "#",
  btnType = "button",
  className = "",
  linkable,
  onClick,
}: {
  variant?: "btn__primary" | "btn__inverted";
  size?: "btn__small" | "btn__large";
  label?: string;
  url?: string;
  btnType?: "button" | "submit";
  className?: string;
  linkable?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}) => {
  return linkable ? (
    <Link href={url} className={twMerge("btn", variant, size, className)}>
      {label || <span>Link</span>}
    </Link>
  ) : (
    <button
      type={btnType}
      onClick={onClick}
      className={twMerge("btn", variant, size, className)}
    >
      {label || <span>Button</span>}
    </button>
  );
};

export default ButtonLink;
