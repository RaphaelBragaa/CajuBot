import React from 'react';
import logoBrasao from '../assets/images/logo-brasao.png';
import logoSlim from '../assets/images/logo-slim.png';

const Footer = () => {
  return (
    <footer className="bg-[#041b34] text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-bold uppercase">Institucional</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Sobre o SLIM
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-bold uppercase">Todos os Serviços</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Pessoa Física
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Pessoa Jurídica
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Sanitário
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Ambiental
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Tributário
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Urbanismo
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-bold uppercase">Acompanhar e Consultar</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Andamento de Processos
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Autenticidade de Documentos
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Consultar Alvará por Estabelecimento
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-bold uppercase">Orientações e Manuais</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Legislações
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-bold uppercase">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Prefeitura Municipal de Aracaju
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Vigilância Sanitária
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Agiliza SE
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  JUCESE
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-[#28abf2]">
                  Receita Federal
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center space-y-4 border-t border-[#0f345d] pt-6 md:flex-row md:justify-between md:space-y-0">
          <div className="flex items-center space-x-6">
            <a href="/" className="text-white hover:text-[#28abf2]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.599-.1-.898a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"></path>
              </svg>
            </a>
            <a href="/" className="text-white hover:text-[#28abf2]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
              </svg>
            </a>
            <a href="/" className="text-white hover:text-[#28abf2]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                <path d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"></path>
              </svg>
            </a>
            <a href="/" className="text-white hover:text-[#28abf2]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
              >
                <path d="M21.593 7.203a2.506 2.506 0 0 0-1.762-1.766C18.265 5.007 12 5 12 5s-6.264-.007-7.831.404a2.56 2.56 0 0 0-1.766 1.778c-.413 1.566-.417 4.814-.417 4.814s-.004 3.264.406 4.814c.23.857.905 1.534 1.763 1.765 1.582.43 7.83.437 7.83.437s6.265.007 7.831-.403a2.515 2.515 0 0 0 1.767-1.763c.414-1.565.417-4.812.417-4.812s.02-3.265-.407-4.831zM9.996 15.005l.005-6 5.207 3.005-5.212 2.995z"></path>
              </svg>
            </a>
          </div>

          <div className="text-center text-sm md:text-right">
            <p>R. Frei Luiz Canolo de Noronha, 42 - Ponto Novo, Aracaju/SE</p>
            <p>CEP: 49097-270. <a href="/" className="text-[#28abf2] hover:underline">Ver no mapa</a></p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#0f345d] py-4 text-center">
        <p>© 2025 - Prefeitura Municipal de Aracaju.</p>
      </div>
    </footer>
  );
};

export default Footer;
