import Link from "next/link";
import React from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const NavMenu = ({
  navMenuList,
}: {
  navMenuList: {
    label: string;
    url: string;
    subMenu?: boolean;
  }[];
}) => {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        {navMenuList.map((item, index) => (
          <li key={index}>
            {item.subMenu ? (
              <button className="flex items-center gap-2 border-2 border-transparent p-2">
                <span>{item.label}</span>
                <ChevronDownIcon className="flex h-5 w-5" aria-hidden="true" />
              </button>
            ) : (
              <Link href={item.label}>{item.label}</Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
