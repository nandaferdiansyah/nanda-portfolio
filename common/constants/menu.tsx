import {
  BiHomeCircle as HomeIcon,
  BiUser as AboutIcon,
  BiCollection as ProjectIcon,
  BiBook as ContactIcon,
} from "react-icons/bi";
import { IoBriefcaseOutline as CareerIcon } from "react-icons/io5";
import { BiImages as PortfolioIcon } from "react-icons/bi";
import { PiCertificate as AchievementIcon } from "react-icons/pi";
import { IoPhonePortraitOutline as CreationIcon } from "react-icons/io5";

import type { MenuItemProps } from "../types";

const iconSize = 20;

export const MENU_ITEMS: MenuItemProps[] = [
  {
    title: "Home",
    href: "/",
    icon: <HomeIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "About",
    href: "/about",
    icon: <AboutIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Career",
    href: "/career",
    icon: <CareerIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Projects",
    href: "/projects",
    icon: <ProjectIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    icon: <PortfolioIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Achievements",
    href: "/achievements",
    icon: <AchievementIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Creations",
    href: "/creations",
    icon: <CreationIcon size={iconSize} />,
    isShow: true,
  },
  {
    title: "Contact",
    href: "/contact",
    icon: <ContactIcon size={iconSize} />,
    isShow: true,
  },
];
