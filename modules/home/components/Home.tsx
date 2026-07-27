import Breakline from "@/common/components/elements/Breakline";

import FeaturedProjects from "./FeaturedProjects";
import Introduction from "./Introduction";
import Services from "./Services";
import SkillList from "./SkillList";

const Home = () => {
  return (
    <>
      <Introduction />
      <Breakline className="my-8" />
      <SkillList />
      <Breakline className="my-8" />
      <Services />
      <Breakline className="my-8" />
      <FeaturedProjects />
    </>
  );
};

export default Home;
