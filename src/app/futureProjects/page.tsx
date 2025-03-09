const futureProjects = [
  {
    title: "Expansão para Novas Localizações",
    description:
      "Estamos planejando expandir nossas unidades para outras regiões, proporcionando mais acessibilidade aos nossos pacientes.",
  },
  {
    title: "Tecnologia de Diagnóstico Avançada",
    description:
      "Em breve, implementaremos sistemas de diagnóstico por IA que ajudarão a detectar problemas dentários de forma mais eficiente e precisa.",
  },
  {
    title: "Sustentabilidade e Eco-Friendly",
    description:
      "A sustentabilidade é uma prioridade para nós. Estamos desenvolvendo projetos para tornar nossa clínica mais ecológica, utilizando energia solar e materiais recicláveis.",
  },
  {
    title: "Aprimoramento do Atendimento ao Cliente",
    description:
      "Estamos criando uma plataforma digital para facilitar o agendamento de consultas, além de oferecer acompanhamento personalizado para nossos pacientes.",
  },
];

export default function FutureProjectsPage() {
  return (
    <div className="max-w-4xl mx-auto bg-gray-50 min-h-screen py-10 px-5">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-600">Futuros Projetos</h1>
        <p className="text-lg text-gray-600">
          Veja o que estamos planejando para o futuro da nossa clínica
          odontológica.
        </p>
      </header>

      <section className="space-y-12">
        {futureProjects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {project.title}
            </h2>
            <p className="text-gray-500 mt-3">{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
