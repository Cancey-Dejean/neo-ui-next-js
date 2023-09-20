import NavCompany from "@/components/NavCompany";
import NavFeatures from "@/components/NavFeatures";
import NavLearn from "@/components/NavLearn";
import NavProducts from "@/components/NavProducts";
import NavSupport from "@/components/NavSupport";

export const topBarMenuList = [
  { label: "For people", url: "/" },
  { label: "For business", url: "/for-business" },
];

export const navMenuListPeople = [
  {
    label: "Products",
    url: "/",
    dropdownMenu: false,
    megaMenu: true,
    content: <NavProducts />,
  },
  {
    label: "Features",
    url: "/",
    dropdownMenu: false,
    megaMenu: true,
    content: <NavFeatures />,
  },
  {
    label: "Learn",
    url: "/",
    dropdownMenu: true,
    megaMenu: false,
    content: <NavLearn />,
  },
  {
    label: "Company",
    url: "/",
    dropdownMenu: true,
    megaMenu: false,
    content: <NavCompany />,
  },
  {
    label: "Support",
    url: "/",
    dropdownMenu: true,
    megaMenu: false,
    content: <NavSupport />,
  },
];

export const navMenuListBusiness = [
  {
    label: "Platform",
    url: "/",
    subMenu: false,
    megaMenu: false,
    content: null,
  },
  {
    label: "Products",
    url: "/",
    subMenu: false,
    megaMenu: false,
    content: null,
  },
  {
    label: "Industries",
    url: "/",
    subMenu: true,
    megaMenu: false,
    content: null,
  },
  {
    label: "Resources",
    url: "/",
    subMenu: true,
    megaMenu: false,
    content: null,
  },
  {
    label: "Company",
    url: "/",
    subMenu: true,
    megaMenu: false,
    content: null,
  },
];
