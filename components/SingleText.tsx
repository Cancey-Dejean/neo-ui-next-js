import { twMerge } from "tailwind-merge";
import ContentContainer from "./ContentContainer";
import Heading from "./Heading";

const SingleText = ({
  as: Element = "h1",
  children,
  headingClass = "",
  className = "",
}: {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  children: React.ReactNode;
  headingClass?: string;
  className?: string;
}) => {
  return (
    <section className={twMerge("py-[72px]", className)}>
      <ContentContainer>
        <Heading as={Element} children={children} className={headingClass} />
      </ContentContainer>
    </section>
  );
};

export default SingleText;
