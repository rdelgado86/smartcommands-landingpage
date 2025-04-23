import React from "react";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <header className="bg-white shadow p-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-blue-900">SmartCommands</h1>
        <nav>
          <ul className="flex gap-4 text-blue-900">
            <li><a href="#servicos">Serviços</a></li>
            <li><a href="#sobre">Sobre</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </header>

      <section className="bg-blue-900 text-white p-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Soluções inteligentes para transformar seu negócio</h2>
        <p className="text-xl mb-6">Consultoria em software, web e IA para empresas e pequenos negócios</p>
        <button className="bg-lime-400 text-blue-900 px-6 py-2 rounded-xl font-semibold">
          Solicite uma reunião gratuita
        </button>
      </section>

      <section id="sobre" className="p-12 bg-white text-center">
        <h3 className="text-2xl font-bold mb-4 text-blue-900">Sobre a SmartCommands</h3>
        <p className="max-w-2xl mx-auto">
          Unimos tecnologia de ponta com atendimento humano para oferecer soluções sob medida
          em desenvolvimento de software, criação de páginas web e uso estratégico de inteligência artificial.
        </p>
      </section>

      <section id="servicos" className="p-12 bg-gray-100">
        <h3 className="text-2xl font-bold mb-8 text-center text-blue-900">Serviços</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold text-lg mb-2">Consultoria de Software</h4>
            <p>Análise, arquitetura e desenvolvimento de projetos personalizados.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold text-lg mb-2">Sites para Negócios</h4>
            <p>Criação de páginas rápidas, otimizadas e com identidade profissional.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold text-lg mb-2">Aplicações com IA</h4>
            <p>Incorpore inteligência artificial no seu produto para gerar valor real.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-bold text-lg mb-2">Suporte e Evolução</h4>
            <p>Manutenção, melhorias e evolução contínua do seu sistema.</p>
          </div>
        </div>
      </section>

      <section id="contato" className="p-12 bg-blue-900 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Entre em contato</h3>
        <p className="mb-6">Pronto para dar o próximo passo? Fale com a gente!</p>
        <a href="mailto:contato@smartcommands.com" className="bg-lime-400 text-blue-900 px-6 py-2 rounded-xl font-semibold">
          contato@smartcommands.com
        </a>
      </section>

      <footer className="p-6 bg-gray-100 text-center text-sm text-gray-600">
        © 2025 SmartCommands. Todos os direitos reservados.
      </footer>
    </div>
  );
}
