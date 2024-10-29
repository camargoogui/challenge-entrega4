import React from 'react';
import Link from 'next/link';

const Cabecalho: React.FC = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-black">
      <Link href="/" className="text-2xl font-bold text-white">
        PORTO
      </Link>
      <nav className="flex space-x-8">
        <Link href="/" className="text-white hover:text-gray-700">Início</Link>
        <Link href="/todos-os-servicos" className="text-white hover:text-gray-700">Todos os Serviços</Link>
        <Link href="/fale-conosco" className="text-white hover:text-gray-700">Fale Conosco</Link>
        <Link href="/integrantes" className="text-white hover:text-gray-700">Integrantes</Link>
        <Link href="/login" className="text-white hover:text-gray-700">Entrar</Link>
      </nav>
    </header>
  );
};

export default Cabecalho;
