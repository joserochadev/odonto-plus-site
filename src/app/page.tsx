import AboutContainer from "./Home/aboutContainer";
import IntroductionContainer from "./Home/introductionContainer";
import ServiceContainer from "./Home/servicesContainer";
import TipsContainer from "./Home/tipsContainer";


export default function Home() {
  return (
    <>
      <IntroductionContainer />
      <ServiceContainer />
      <AboutContainer />
      <TipsContainer/>
    </>


  )
}