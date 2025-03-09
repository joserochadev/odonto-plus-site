export function ProjectDetailPage() {
	const project = {
		title: 'Expansão para Novas Localizações',
		description:
			'Estamos ampliando nossos horizontes e planejamos abrir novas unidades da nossa clínica odontológica para alcançar ainda mais pacientes. Com isso, nosso atendimento será mais acessível e eficiente, trazendo um novo padrão de qualidade para a saúde bucal.',
		imageUrl:
			'https://i0.wp.com/cimientosconstrutora.com.br/wp-content/uploads/2020/12/Clinica-escola-1-Cimientos-Construtora.jpg?ssl=1', // Imagem do projeto (substitua pela URL real)
		details: [
			{
				subtitle: 'Objetivo da Expansão',
				text: 'Nosso principal objetivo com essa expansão é garantir que a qualidade do atendimento chegue a mais pessoas. Estamos investindo em novas tecnologias, processos mais ágeis e uma estrutura moderna para que a experiência do paciente seja a melhor possível.',
				image: 'https://mid-noticias.curitiba.pr.gov.br/2022/00360735.jpg', // Imagem ilustrativa do objetivo
			},
			{
				subtitle: 'Localizações Planejadas',
				text: 'Estamos mirando em regiões estratégicas para nossas novas unidades, onde a demanda por serviços odontológicos de qualidade tem crescido. As novas unidades estarão equipadas com consultórios modernos e acessibilidade para todos.',
				image:
					'https://www.sabreodonto.com.br/wp-content/uploads/2020/08/Mapa-Gravata%C3%AD.png', // Imagem ilustrativa da localização
			},
			{
				subtitle: 'Tecnologia de Ponta',
				text: 'Cada nova unidade será equipada com tecnologias de diagnóstico e tratamento de última geração, como scanners 3D, tratamentos a laser e IA para análise e acompanhamento dos pacientes. A inovação será nossa marca registrada.',
				image:
					'https://bcxconsultoria.com.br/wp-content/uploads/2022/06/Captura-de-Tela-2022-06-17-as-14.28.28.png', // Imagem ilustrativa da tecnologia
			},
			{
				subtitle: 'Benefícios para os Pacientes',
				text: 'A expansão também visa tornar o atendimento mais próximo e conveniente para nossos pacientes. Consultas online, agendamentos rápidos e acompanhamento contínuo são apenas algumas das facilidades que serão oferecidas.',
				image:
					'https://oraldents.com.br/wp-content/uploads/2024/10/Localizacao-e-acessibilidade-da-clinica-odontologica-perto-de-mim.jpg', // Imagem ilustrativa dos benefícios
			},
		],
	}

	return (
		<div className="max-w-4xl mx-auto bg-gray-50 min-h-screen py-10 px-5">
			<header className="text-center mb-12">
				<h1 className="text-4xl font-bold text-blue-600">{project.title}</h1>
				<p className="text-lg text-gray-600 mt-3">{project.description}</p>
			</header>

			{/* Imagem Principal do Projeto */}
			<div className="mb-12">
				<img
					src={project.imageUrl}
					alt="Expansão da Clínica"
					className="w-full h-auto rounded-lg shadow-lg"
				/>
			</div>

			<section className="space-y-12">
				{project.details.map((detail, index) => (
					<div
						key={index}
						className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
					>
						<h3 className="text-3xl font-semibold text-blue-600">
							{detail.subtitle}
						</h3>
						<p className="text-gray-500 mt-4">{detail.text}</p>

						{/* Imagem Secundária do Detalhe */}
						<div className="mt-6">
							<img
								src={detail.image}
								alt={detail.subtitle}
								className="w-full h-auto rounded-lg shadow-md"
							/>
						</div>
					</div>
				))}
			</section>
		</div>
	)
}
