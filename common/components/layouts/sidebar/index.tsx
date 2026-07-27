import { MENU_ITEMS } from "@/common/constants/menu";
import { SOCIAL_MEDIA } from "@/common/constants/socialMedia";

import Breakline from "../../elements/Breakline";
import Copyright from "../../elements/Copyright";
import Menu from "./Menu";
import Profile from "./Profile";

const Sidebar = () => {
  const filteredMenu = MENU_ITEMS.filter((item) => item.isShow);

  return (
    <header className="lg:w-1/5">
      <div className="sticky top-0 z-10 flex flex-col transition-all duration-300 lg:py-8">
        <Profile />
        <div className="hidden lg:block">
          <Breakline />
          <Menu list={filteredMenu} />
          <Breakline />
          <div className="flex items-center justify-center gap-5 py-1">
            {SOCIAL_MEDIA.filter((item) => item.isShow).map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.title}
                className={`text-neutral-600 transition-all duration-300 hover:scale-110 dark:text-neutral-400 ${item.className}`}
              >
                {item.icon}
              </a>
            ))}
          </div>
          <Breakline />
          <Copyright />
        </div>
      </div>
    </header>
  );
};

export default Sidebar;
