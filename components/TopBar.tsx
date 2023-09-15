"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ContentContainer from "./ContentContainer";
import { twMerge } from "tailwind-merge";

const TopBar = ({
  topBarMenuList,
}: {
  topBarMenuList: {
    label: string;
    url: string;
  }[];
}) => {
  const path = usePathname();
  return (
    <div className="z-[100] hidden w-full justify-center bg-neoBlack/90 text-white lg:flex lg:justify-start">
      <ContentContainer>
        <nav role="navigation">
          <ul className="flex items-center justify-start gap-8">
            {topBarMenuList.map((item, index) => (
              <li key={index} className="relative">
                <Link
                  href={item.url}
                  className={twMerge(
                    "py-2 font-[500]",
                    path === item.url
                      ? "after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:bg-[#444]"
                      : "text-white",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </ContentContainer>
    </div>
  );
};

export default TopBar;
