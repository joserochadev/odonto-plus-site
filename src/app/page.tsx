import AboutContainer from './Home/aboutContainer'
import IntroductionContainer from './Home/introductionContainer'
import ServiceContainer from './Home/servicesContainer'
import TipsContainer from './Home/tipsContainer'
import { ContactPage } from './contact/page'
import { FutureProjectsPage } from './futureProjects/page'
import { PartnersPage } from './partners/page'
import { ProjectDetailPage } from './projectDetail/page'
import { TipsPage } from './tips/page'

export default function Home() {
	return (
		<>
			<IntroductionContainer />
			<ServiceContainer />
			<AboutContainer />
			<TipsContainer />
			<TipsPage />
			<PartnersPage />
			<FutureProjectsPage />
			<ProjectDetailPage />
			<ContactPage />
		</>
	)
}
