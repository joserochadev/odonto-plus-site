import AboutContainer from "./aboutContainer";
import IntroductionContainer from "./introductionContainer";
import ProjectsContainer from "./projectsContainer";
import ServiceContainer from "./servicesContainer";
import TipsContainer from "./tipsContainer";

export default function PageHome() {
  return (
    <>
      <IntroductionContainer />
      <ServiceContainer />
      <AboutContainer />
      <TipsContainer />
      <ProjectsContainer />
    </>
  );
}
