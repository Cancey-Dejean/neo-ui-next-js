import Link from "next/link";
import React, { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu, Transition } from "@headlessui/react";
import ContentContainer from "./ContentContainer";

const NavMenu = ({
  navMenuList,
}: {
  navMenuList: {
    label: string;
    url: string;
    dropdownMenu?: boolean;
    megaMenu?: boolean;
    content: React.ReactNode;
  }[];
}) => {
  return (
    <nav>
      <ul className="flex items-center gap-2">
        {navMenuList.map((item, index) => (
          <li key={index}>
            {item.dropdownMenu ? (
              <Menu as="div" className="relative inline-block">
                <Menu.Button className="flex items-center gap-2 p-2 font-normal">
                  {item.label}
                  <ChevronDownIcon
                    className="flex h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-full bg-neoBlack/90">
                    <div className="px-1 py-1">{item.content}</div>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : item.megaMenu ? (
              <Menu as="div" className="inline-block">
                <Menu.Button className="flex items-center gap-2 p-2 font-medium">
                  {item.label}
                  <ChevronDownIcon
                    className="flex h-5 w-5"
                    aria-hidden="true"
                  />
                </Menu.Button>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Menu.Items className="absolute right-0 mt-2 w-full bg-neoBlack/90">
                    <ContentContainer>{item.content}</ContentContainer>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Link className="p-2 font-medium" href={item.label}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavMenu;
