export function ContactPage() {
	return (
		<div className="bg-gray-50 min-h-screen py-10 px-5">
			<header className="text-center mb-12">
				<h1 className="text-4xl font-bold text-blue-600">Entre em Contato</h1>
				<p className="text-lg text-gray-600 mt-3">
					Estamos à disposição para atender você! Preencha o formulário abaixo
					ou entre em contato conosco por outros canais.
				</p>
			</header>

			<section className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{/* Formulário de Contato */}
				<div className="bg-white p-8 rounded-lg shadow-lg col-span-1">
					<h2 className="text-3xl font-semibold text-blue-600 mb-6">
						Fale Conosco
					</h2>
					<form action="#" method="POST">
						<div className="mb-4">
							<label htmlFor="name" className="block text-gray-headline">
								Nome Completo
							</label>
							<input
								type="text"
								id="name"
								name="name"
								className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
								required
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="email" className="block text-gray-headline">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
								required
							/>
						</div>
						<div className="mb-4">
							<label htmlFor="message" className="block text-gray-headline">
								Mensagem
							</label>
							<textarea
								id="message"
								name="message"
								className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
								required
							/>
						</div>
						<button
							type="submit"
							className="w-full py-3 bg-brand-green text-white rounded-lg hover:bg-brand-green-hover focus:outline-none"
						>
							Enviar Mensagem
						</button>
					</form>
				</div>

				{/* Informações de Contato */}
				<div className="bg-white p-8 rounded-lg shadow-lg col-span-1">
					<h2 className="text-3xl font-semibold text-blue-600 mb-6">
						Nossos Contatos
					</h2>
					<div className="mb-6">
						<h3 className="text-xl font-semibold text-gray-800">Endereço</h3>
						<p className="text-gray-600 mt-2">
							Rua da Saúde, 123 - Centro, Cidade, Estado
						</p>
					</div>
					<div className="mb-6">
						<h3 className="text-xl font-semibold text-gray-800">Telefone</h3>
						<p className="text-gray-600 mt-2">(XX) XXXX-XXXX</p>
					</div>
					<div className="mb-6">
						<h3 className="text-xl font-semibold text-gray-800">Email</h3>
						<p className="text-gray-600 mt-2">contato@clinicadental.com</p>
					</div>
					<div className="mb-6">
						<h3 className="text-xl font-semibold text-gray-800">
							Horário de Atendimento
						</h3>
						<p className="text-gray-600 mt-2">Segunda a Sexta: 08:00 - 18:00</p>
						<p className="text-gray-600">Sábado: 08:00 - 12:00</p>
						<p className="text-gray-600">Domingo: Fechado</p>
					</div>
				</div>
			</section>

			{/* Mapa de Localização */}
			<section className="mt-16">
				<h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">
					Nos Visite
				</h2>
				<div className="relative w-full h-96">
					{/* Usando um iframe do Google Maps */}
					<iframe
						title="Localização da Clínica"
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.45767176256!2d-46.63881882776089!3d-23.55052056735758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce597e2a7c9c81%3A0x8cddbbf625b58ee7!2sSão%20Paulo%2C%20SP!5e0!3m2!1sen!2sbr!4v1615197425242!5m2!1sen!2sbr"
						width="100%"
						height="100%"
						frameBorder="0"
						style={{ border: 0 }}
						aria-hidden="false"
					/>
				</div>
			</section>
		</div>
	)
}
