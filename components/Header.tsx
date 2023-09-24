"use client";
import ContentContainer from "./ContentContainer";
import Link from "next/link";
import NavMenu from "./NavMenu";
import { navMenuListBusiness, navMenuListPeople } from "@/constants";
import Button from "./Button";
import { Logo } from "./Icons";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const path = usePathname();
  return (
    <header className="sticky left-0 top-0 z-50 flex w-full justify-center bg-black py-4">
      <ContentContainer className="flex items-center gap-10">
        <Link href="/">
          {path === "/for-business" ? <p>business logo</p> : <Logo />}
        </Link>

        <div className="hidden lg:flex lg:flex-1">
          {path === "/for-business" ? (
            <NavMenu navMenuList={navMenuListBusiness} />
          ) : (
            <NavMenu navMenuList={navMenuListPeople} />
          )}
        </div>

        <div className="hidden lg:flex lg:items-center lg:gap-2">
          {path === "/for-business" ? (
            <Button variant="btn__white" label="Let's Talk" linkable />
          ) : (
            <>
              <Button variant="btn__borderless" label="Log In" linkable />
              <Button variant="btn__white" label="Sign Up" linkable />
            </>
          )}
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <MobileMenu />
        </div>
      </ContentContainer>

      {/* Skip to content */}
      <Link
        href="#main"
        className="absolute left-[-900px] top-20 bg-black p-4 py-4 text-xl focus-visible:left-10 focus-visible:border focus-visible:border-white focus-visible:outline-none"
      >
        Skip to main content
      </Link>
    </header>
  );
};

export default Header;
