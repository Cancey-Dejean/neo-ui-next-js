import { twMerge } from "tailwind-merge";

type ContentContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const ContentContainer = ({
  children = <p>Place Content here</p>,
  className = "",
}: ContentContainerProps) => {
  return (
    <div className={twMerge("mx-auto w-full max-w-[1129px] px-8", className)}>
      {children}
    </div>
  );
};

export default ContentContainer;
