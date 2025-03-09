export function TipsPage() {
	return (
		<div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-2xl">
			<h1 className="text-3xl font-bold text-gray-900 mb-4">
				5 Dicas Essenciais para uma Saúde Bucal Perfeita
			</h1>
			<p className="text-gray-600 mb-6">Publicado em 9 de março de 2025</p>

			<img
				src="https://blog.amorsaude.com.br/wp-content/uploads/2021/04/saude-bucal.jpg"
				alt="Saúde Bucal"
				className="w-full h-64 object-cover rounded-xl mb-6"
			/>

			<article className="text-gray-800 space-y-4">
				<p>
					Manter a saúde bucal em dia é essencial para evitar problemas como
					cáries, gengivite e mau hálito. Aqui estão cinco dicas que vão te
					ajudar a cuidar melhor do seu sorriso:
				</p>

				<h2 className="text-xl font-semibold text-gray-900">
					1. Escove os Dentes Corretamente
				</h2>
				<p>
					Utilize uma escova de cerdas macias e faça movimentos suaves e
					circulares para remover a placa sem machucar a gengiva.
				</p>

				<h2 className="text-xl font-semibold text-gray-900">
					2. Use Fio Dental Todos os Dias
				</h2>
				<p>
					O fio dental ajuda a remover resíduos de alimentos e bactérias entre
					os dentes, prevenindo problemas gengivais.
				</p>

				<h2 className="text-xl font-semibold text-gray-900">
					3. Evite Excesso de Açúcar
				</h2>
				<p>
					Alimentos ricos em açúcar aumentam o risco de cáries, então reduza o
					consumo e prefira uma alimentação equilibrada.
				</p>

				<h2 className="text-xl font-semibold text-gray-900">
					4. Visite o Dentista Regularmente
				</h2>
				<p>
					Consultas periódicas ajudam a detectar e tratar problemas bucais antes
					que se tornem graves.
				</p>

				<h2 className="text-xl font-semibold text-gray-900">
					5. Beba Bastante Água
				</h2>
				<p>
					A água ajuda a limpar resíduos da boca e estimula a produção de
					saliva, que protege os dentes contra bactérias.
				</p>
			</article>

			<div className="mt-8">
				<p className="text-gray-600 italic">
					Cuide do seu sorriso e garanta uma saúde bucal impecável!
				</p>
			</div>
		</div>
	)
}
