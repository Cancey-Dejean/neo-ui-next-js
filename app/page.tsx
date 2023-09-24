import Features from "@/components/Features";
import Hero from "@/components/Hero";
import SingleText from "@/components/SingleText";

export default function HomePeople() {
  return (
    <main className="flex-1">
      <Hero
        title="The modern way to money"
        description="We’re reinventing how Canadians spend, save, and grow their money—all together, in one place. Join us as we set the new standard."
      />
      <SingleText
        as="h2"
        className="px-[340px] text-center"
        headingClass="font-title text-[40px] leading-[42px]"
      >
        Products that talk to each other and work seamlessly together—that’s
        Neo.
      </SingleText>

      <Features />
    </main>
  );
}
