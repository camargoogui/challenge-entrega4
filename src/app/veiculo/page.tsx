'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import specifyCar from '/public/images/specify-car.svg';

const Veiculo: React.FC = () => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [placa, setPlaca] = useState('');
  const router = useRouter();

  const validarPlaca = (placa: string) => {
    const regexPlaca = /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/;
    return regexPlaca.test(placa);
  };

  const validarFormularioVeiculo = (e: React.FormEvent) => {
    e.preventDefault();
    if (!marca || !modelo || !ano || !placa) {
      alert('Por favor, preencha todos os campos.');
      return false;
    }

    if (!validarPlaca(placa)) {
      alert('Placa inválida. A placa deve estar no formato ABC-1234 ou ABC1D23.');
      return false;
    }

    // Redireciona para a página de chatbot após a validação
    router.push('/chatbot');
    return true;
  };

  return (
    <div className="flex h-screen bg-black bg-cover bg-center" style={{ backgroundImage: "url('/images/38bcf9ecdd4b2d6e57e4c14ec9dfe563.png')" }}>
      <div className="flex flex-col items-center justify-center w-1/2 h-full">
        <h1 className="text-2xl text-white mb-6">ÁREA DE CADASTRO DO VEÍCULO</h1>
        <Image src={specifyCar} alt="Carro" className="w-1/3" />
      </div>
      <div className="flex items-center justify-center w-1/2 h-full">
        <div className="flex flex-col items-center p-8 bg-gray-800 rounded-lg shadow-xl w-3/5">
          <h1 className="text-white font-bold mb-4">ESPECIFIQUE SEU VEÍCULO</h1>
          <div className="w-full flex flex-col items-start mb-4">
            <label htmlFor="marca" className="text-white mb-2">MARCA</label>
            <input
              type="text"
              id="marca"
              name="marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              placeholder="MARCA"
              className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-md outline-none placeholder-gray-400"
            />
          </div>
          <div className="w-full flex flex-col items-start mb-4">
            <label htmlFor="modelo" className="text-white mb-2">MODELO</label>
            <input
              type="text"
              id="modelo"
              name="modelo"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              placeholder="MODELO"
              className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-md outline-none placeholder-gray-400"
            />
          </div>
          <div className="w-full flex flex-col items-start mb-4">
            <label htmlFor="ano" className="text-white mb-2">ANO DE FABRICAÇÃO</label>
            <input
              type="text"
              id="ano"
              name="ano"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              placeholder="ANO DE FABRICAÇÃO"
              className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-md outline-none placeholder-gray-400"
            />
          </div>
          <div className="w-full flex flex-col items-start mb-4">
            <label htmlFor="placa" className="text-white mb-2">PLACA</label>
            <input
              type="text"
              id="placa"
              name="placa"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              placeholder="PLACA"
              className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-md outline-none placeholder-gray-400"
            />
          </div>
          <form onSubmit={validarFormularioVeiculo} className="w-full">
            <button className="w-full py-4 mt-6 bg-gray-600 text-white font-bold rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition">
              ENVIAR
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Veiculo;
