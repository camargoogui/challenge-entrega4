'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import loginCar from '/public/images/login-car.svg';
import "../globals.css";

const Login: React.FC = () => {
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const validarCPF = (cpf: string) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    return cpf.length === 11;
  };

  const validarFormulario = (e: React.FormEvent) => {
    e.preventDefault();
    if (cpf === '' || senha === '') {
      alert('Por favor, preencha todos os campos.');
      return false;
    }
    if (!validarCPF(cpf)) {
      alert('CPF inválido. Por favor, insira um CPF válido.');
      return false;
    }

    router.push('/veiculo');
    return true;
  };

  return (
    <div className="flex h-screen bg-black bg-cover bg-center" style={{ backgroundImage: "url('/images/38bcf9ecdd4b2d6e57e4c14ec9dfe563.png')" }}>
      <div className="flex flex-col items-center justify-center w-1/2 h-full">
        <h1 className="text-2xl text-white mb-6">ÁREA DE ACESSO A CONTA</h1>
        <Image src={loginCar} alt="Carro" className="w-1/3" />
      </div>
      <div className="flex items-center justify-center w-1/2 h-full">
        <div className="flex flex-col items-center p-8 bg-gray-800 rounded-lg shadow-xl w-3/5">
          <h1 className="text-white font-bold mb-4">ACESSE SUA CONTA</h1>
          <div className="w-full flex flex-col items-start mb-4">
            <label htmlFor="usuario" className="text-white mb-2">CPF</label>
            <input
              type="text"
              id="usuario"
              name="usuario"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
              placeholder="CPF"
              className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-md outline-none placeholder-gray-400"
            />
          </div>
          <div className="w-full flex flex-col items-start mb-4">
            <label htmlFor="senha" className="text-white mb-2">Senha</label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Senha"
              className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-md outline-none placeholder-gray-400"
            />
          </div>
          <form onSubmit={validarFormulario} className="w-full">
            <button className="w-full py-4 mt-6 bg-gray-600 text-white font-bold rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition">
              Entrar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
