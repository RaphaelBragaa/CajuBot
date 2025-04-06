import React from 'react';
import logoBrasao from '../assets/images/logo-brasao.png';
import logoSlim from '../assets/images/logo-slim.png';
import iconLogin from '../assets/icons/icon-login.svg';

const Header = () => {
  return (
    <header>
      {/* Accessibility Links */}
      <div className="flex bg-[#041b34] py-2 text-white">
        <div className="container mx-auto flex justify-start px-4">
          <ul className="flex space-x-4">
            <li>
              <a href="#content" className="hover:underline">
                Ir para Conteúdo <span className="ml-1">1</span>
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:underline">
                Ir para Navegação <span className="ml-1">2</span>
              </a>
            </li>
            <li>
              <a href="#search" className="hover:underline">
                Ir para Busca <span className="ml-1">3</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <a href="/" className="flex items-center">
              <img src={logoBrasao} alt="Brasão da Prefeitura de Aracaju" className="h-14" />
              <div className="ml-2 flex flex-col">
                <span className="text-xl font-bold text-[#041b34]">ARACAJU</span>
                <span className="text-sm text-[#041b34]">PREFEITURA MUNICIPAL</span>
              </div>
            </a>
            <div className="ml-4 h-10 w-px bg-gray-300"></div>
            <a href="/" className="flex items-center">
              <img src={logoSlim} alt="Logo SLIM" className="h-10" />
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="O que você procura?"
                className="w-64 rounded-full border border-gray-300 bg-[#f2f3fa] px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[#0a6ac6]"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 transform">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>

            <a
              href="/login"
              className="flex items-center space-x-2 rounded-md bg-[#0a6ac6] px-4 py-2 text-white hover:bg-[#0855a1] focus:outline-none focus:ring-2 focus:ring-[#0a6ac6] focus:ring-offset-2"
            >
              <img src={iconLogin} alt="Login" className="h-5 w-5" />
              <span className="text-sm font-medium">Acesso exclusivo Servidor Público</span>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-[#041b34] py-4 text-white" id="menu">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-6">
            <li className="group relative">
              <a href="#" className="flex items-center hover:text-[#28abf2]">
                Institucional
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 top-full z-10 hidden min-w-48 bg-white py-2 text-[#041b34] shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Sobre o SLIM
                </a>
              </div>
            </li>
            <li className="group relative">
              <a href="#" className="flex items-center hover:text-[#28abf2]">
                Todos os Serviços
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 top-full z-10 hidden min-w-48 bg-white py-2 text-[#041b34] shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Pessoa Física
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Pessoa Jurídica
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Sanitário
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Ambiental
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Tributário
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Urbanismo
                </a>
              </div>
            </li>
            <li className="group relative">
              <a href="#" className="flex items-center hover:text-[#28abf2]">
                Acompanhar e Consultar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 top-full z-10 hidden min-w-48 bg-white py-2 text-[#041b34] shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Andamento de Processos
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Autenticidade de Documentos
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Consultar Alvará por Estabelecimento
                </a>
              </div>
            </li>
            <li className="group relative">
              <a href="#" className="flex items-center hover:text-[#28abf2]">
                Orientações e Manuais
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 top-full z-10 hidden min-w-48 bg-white py-2 text-[#041b34] shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Legislações
                </a>
              </div>
            </li>
            <li className="group relative">
              <a href="#" className="flex items-center hover:text-[#28abf2]">
                Denúncias
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 top-full z-10 hidden min-w-48 bg-white py-2 text-[#041b34] shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Nova Denúncia
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Acompanhar Denúncia
                </a>
              </div>
            </li>
            <li className="group relative">
              <a href="#" className="flex items-center hover:text-[#28abf2]">
                Links Úteis
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <div className="absolute left-0 top-full z-10 hidden min-w-48 bg-white py-2 text-[#041b34] shadow-lg group-hover:block">
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Prefeitura Municipal de Aracaju
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Vigilância Sanitária
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Agiliza SE
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  JUCESE
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                  Receita Federal
                </a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
