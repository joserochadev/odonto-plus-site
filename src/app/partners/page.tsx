const partners = [
	{
		name: 'Clínica OdontoCare',
		logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfimH_-O_EE8t0JJDcBnr66KxRo9WVysceLw&s',
		description: 'Especializada em tratamentos dentários de alta qualidade.',
	},
	{
		name: 'DentalTech',
		logo: 'https://d2yghbees9788u.cloudfront.net/saudebusiness/2020/11/cad-cam.png',
		description: 'Tecnologia de ponta para exames e diagnósticos rápidos.',
	},
	{
		name: 'Sorriso Feliz',
		logo: 'https://www.cemoi.com.br/wp-content/uploads/2019/12/planejamento-clinica-odontologica.png',
		description: 'Compromisso com a saúde bucal e o bem-estar dos pacientes.',
	},
]

export function PartnersPage() {
	return (
		<div className="bg-gray-50 min-h-screen py-10 px-5">
			<header className="text-center mb-12">
				<h1 className="text-4xl font-bold text-blue-600">Nossos Parceiros</h1>
				<p className="text-lg text-gray-600">
					Temos orgulho de trabalhar com empresas que compartilham nosso
					compromisso com a saúde e o bem-estar.
				</p>
			</header>

			<section className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
				{partners.map((partner, index) => (
					<div
						key={index}
						className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all"
					>
						<div className="flex justify-center mb-4">
							<img
								src={partner.logo}
								alt={partner.name}
								className="w-auto h-40 object-contain max-w-full grayscale rounded-2xl"
							/>
						</div>
						<h2 className="text-xl font-semibold text-gray-800 text-center">
							{partner.name}
						</h2>
						<p className="text-gray-500 text-center mt-2">
							{partner.description}
						</p>
					</div>
				))}
			</section>
		</div>
	)
}
