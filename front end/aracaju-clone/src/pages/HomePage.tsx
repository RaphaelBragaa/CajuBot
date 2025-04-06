import React from 'react';

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center text-sm">
        <a href="/" className="text-[#0a6ac6] hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 inline-block h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </a>
        <span className="mx-2 text-gray-500">/</span>
        <span className="text-gray-500">Serviços para o Cidadão</span>
      </div>

      {/* Page Title */}
      <h1 className="mb-10 text-3xl font-bold text-[#041b34]">Certidões</h1>

      {/* Service Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105">
          <div className="p-6">
            <h3 className="mb-4 text-xl font-semibold text-[#041b34]">Certidão Negativa de Débitos - CND</h3>
            <p className="mb-4 text-gray-600">
              Documento que comprova a inexistência de débitos relativos a tributos municipais.
            </p>
            <a
              href="/"
              className="inline-flex items-center text-[#0a6ac6] hover:text-[#28abf2]"
            >
              Acessar o Serviço
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Card 2 */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105">
          <div className="p-6">
            <h3 className="mb-4 text-xl font-semibold text-[#041b34]">Certidão Positiva Especial - CPE</h3>
            <p className="mb-4 text-gray-600">
              Documento que atesta a existência de débitos com exigibilidade suspensa.
            </p>
            <a
              href="/"
              className="inline-flex items-center text-[#0a6ac6] hover:text-[#28abf2]"
            >
              Acessar o Serviço
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105">
          <div className="p-6">
            <h3 className="mb-4 text-xl font-semibold text-[#041b34]">Certidão Negativa de Imóvel - CNI</h3>
            <p className="mb-4 text-gray-600">
              Documento que comprova a inexistência de débitos relativos a um imóvel específico.
            </p>
            <a
              href="/"
              className="inline-flex items-center text-[#0a6ac6] hover:text-[#28abf2]"
            >
              Acessar o Serviço
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Card 4 */}
        <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105">
          <div className="p-6">
            <h3 className="mb-4 text-xl font-semibold text-[#041b34]">Certidão de Baixa de Inscrição - CBI</h3>
            <p className="mb-4 text-gray-600">
              Documento que comprova o encerramento de atividade de uma inscrição municipal.
            </p>
            <a
              href="/"
              className="inline-flex items-center text-[#0a6ac6] hover:text-[#28abf2]"
            >
              Acessar o Serviço
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="mt-16">
        <h2 className="mb-6 text-2xl font-bold text-[#041b34]">Serviços Relacionados</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Related Service 1 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105">
            <div className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-[#041b34]">Consulta de Débitos</h3>
              <p className="mb-4 text-gray-600">
                Consulte os débitos relacionados ao seu CPF ou CNPJ.
              </p>
              <a
                href="/"
                className="inline-flex items-center text-[#0a6ac6] hover:text-[#28abf2]"
              >
                Acessar o Serviço
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Related Service 2 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105">
            <div className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-[#041b34]">Emissão de DAM</h3>
              <p className="mb-4 text-gray-600">
                Emita o Documento de Arrecadação Municipal para pagamento de tributos.
              </p>
              <a
                href="/"
                className="inline-flex items-center text-[#0a6ac6] hover:text-[#28abf2]"
              >
                Acessar o Serviço
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Related Service 3 */}
          <div className="overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:scale-105">
            <div className="p-6">
              <h3 className="mb-4 text-xl font-semibold text-[#041b34]">IPTU 2025</h3>
              <p className="mb-4 text-gray-600">
                Emissão da guia de recolhimento do Imposto Predial e Territorial Urbano.
              </p>
              <a
                href="/"
                className="inline-flex items-center text-[#0a6ac6] hover:text-[#28abf2]"
              >
                Acessar o Serviço
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Return Button */}
      <div className="mt-12 text-center">
        <a
          href="/"
          className="inline-flex items-center rounded-full border border-[#0a6ac6] px-6 py-3 text-[#0a6ac6] hover:bg-[#0a6ac6] hover:text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mr-2 h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Voltar
        </a>
      </div>
    </div>
  );
};

export default HomePage;
