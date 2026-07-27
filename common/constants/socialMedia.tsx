import { SiInstagram, SiWhatsapp } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

import { PROFILE } from "./profile";
import type { SocialMediaProps } from "../types";

const iconSize = 20;

export const SOCIAL_MEDIA: SocialMediaProps[] = [
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/nanda-ferdiansyah-77640b121/",
    icon: <FaLinkedinIn size={iconSize} />,
    isShow: true,
    className: "hover:text-[#0a66c2]",
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/e_techstudio/",
    icon: <SiInstagram size={iconSize} />,
    isShow: true,
    className: "hover:text-[#e1306c]",
  },
  {
    title: "Email",
    href: `mailto:${PROFILE.email}`,
    icon: <MdOutlineEmail size={iconSize} />,
    isShow: true,
    className: "hover:text-[#ea4335]",
  },
  {
    title: "WhatsApp",
    href: `https://wa.me/${PROFILE.phone_raw}`,
    icon: <SiWhatsapp size={iconSize} />,
    isShow: true,
    className: "hover:text-[#25d366]",
  },
  {
    title: "Portfolio",
    href: "https://desty.page/etechstudio",
    icon: <TbWorld size={iconSize} />,
    isShow: true,
    className: "hover:text-primary",
  },
];
