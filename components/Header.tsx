import React from "react";
import ContentContainer from "./ContentContainer";
import Image from "next/image";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { navMenuList } from "@/constants";
import ButtonLink from "./ButtonLink";

const Header = () => {
  return (
    <header className="sticky left-0 top-0 z-50 flex w-full justify-center bg-black py-4">
      <ContentContainer className="flex items-center gap-10">
        <Link href="/">
          <Image src={"/images/logo.svg"} width={66} height={22} alt="logo" />
        </Link>

        <div className="flex-1">
          <NavMenu navMenuList={navMenuList} />
        </div>

        <div>
          <Link href="/">Link</Link>
          <ButtonLink linkable />
        </div>
      </ContentContainer>
    </header>
  );
};

export default Header;
