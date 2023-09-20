import React, { useEffect, useState, useRef, useMemo } from "react";
import Link from "next/link";

// Generative Code Assistance

const MobileMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);

  const menuData = useMemo(
    () => [
      {
        label: "Home",
        href: "/",
        children: [
          {
            label: "Page 1",
            href: "/page-1",
          },
          {
            label: "Page 2",
            href: "/page-2",
          },
        ],
      },
      {
        label: "About",
        href: "/about",
        children: [
          {
            label: "Our Story",
            href: "/our-story",
          },
          {
            label: "Our Team",
            href: "/our-team",
          },
        ],
      },
    ],
    [],
  );

  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="mobile-menu">
      <button onClick={() => setOpen(!isOpen)}>
        {isOpen ? "Close" : "Menu"}
      </button>
      <ul className={isOpen ? "open" : "closed"}>
        {menuData.map((item) => (
          <li key={item.label}>
            <Link href={item.href}>{item.label}</Link>
            {item.children && (
              <ul>
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link href={child.href}>{child.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MobileMenu;
