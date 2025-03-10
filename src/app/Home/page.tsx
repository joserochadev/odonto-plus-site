import ContactForm from "@/components/contactForm";

import AboutContainer from "./aboutContainer";
import ContactContainer from "./contact";
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
      <ContactContainer />
    </>
  );
}
