import Image from "next/image";
import ContentContainer from "./ContentContainer";
import TextBlock from "./TextBlock";
import React from "react";

const IMAGE_WIDTH = 463;
const IMAGE_HEIGHT = 680;

const Hero = ({
  title = "The modern way to money",
  description = "We're reinventing how Canadians spend, save, and grow their money—all together, in one place. Join us as we set the new standard.",
  imgSrc = "/images/hero-img.png",
  imgAlt = "Phone & Card",
  priority = true,
}: {
  title: string;
  description?: string;
  imgSrc?: string;
  imgAlt?: string;
  priority?: boolean;
}) => {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center justify-center pt-12 md:pb-24 lg:flex-row">
      <ContentContainer className="flex items-center gap-24">
        <div className="w-full max-w-[573px] text-left text-white">
          <TextBlock>
            <h1 className="font-title text-[72px] font-normal leading-[86px] tracking-[-0.5px]">
              {title}
            </h1>

            <p>{description}</p>
          </TextBlock>
        </div>

        <div className="flex w-full max-w-[463px]">
          <Image
            src={imgSrc}
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            alt={imgAlt}
            className="mx-auto h-auto w-full"
            priority={priority}
          />
        </div>
      </ContentContainer>
    </section>
  );
};

export default Hero;
