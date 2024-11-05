'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import specifyCar from '/public/images/specify-car.svg';
import "../globals.css";
import { createVeiculo, updateVeiculo, deleteVeiculo, fetchVeiculos } from '../../api/api';

// Definindo a interface para o tipo Veiculo
interface Veiculo {
    id: number;
    marca: string;
    modelo: string;
    ano: number;
    placa: string;
}

const VeiculoComponent: React.FC = () => {
  const [id, setId] = useState<string>(''); // Novo estado para ID
  const [marca, setMarca] = useState<string>('');
  const [modelo, setModelo] = useState<string>('');
  const [ano, setAno] = useState<string>('');
  const [placa, setPlaca] = useState<string>('');
  const [veiculos, setVeiculos] = useState<Veiculo[]>([]);
  const [editandoId, setEditandoId] = useState<number | null>(null);

  useEffect(() => {
    fetchVeiculos()
      .then((data: Veiculo[]) => setVeiculos(data))
      .catch((error: unknown) => console.error('Erro ao buscar veículos:', error));
  }, []);

  const validarPlaca = (placa: string) => /^[A-Z]{3}[0-9][A-Z0-9][0-9]{2}$/.test(placa);

  const validarFormularioVeiculo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!id || !marca || !modelo || !ano || !placa) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (!validarPlaca(placa)) {
      alert('Placa inválida. A placa deve estar no formato ABC-1234 ou ABC1D23.');
      return;
    }

    try {
      const veiculoData = { id: parseInt(id), marca, modelo, ano: parseInt(ano), placa };

      if (editandoId) {
        // Atualiza veículo existente
        await updateVeiculo(editandoId, veiculoData);
        setVeiculos(await fetchVeiculos());
        alert('Veículo atualizado com sucesso!');
        setEditandoId(null);
      } else {
        // Cria novo veículo
        const novoVeiculo = await createVeiculo(veiculoData);
        setVeiculos((prevVeiculos) => [...prevVeiculos, novoVeiculo]);
        alert('Veículo criado com sucesso!');
      }

      // Limpa os campos após o cadastro ou atualização
      setId('');
      setMarca('');
      setModelo('');
      setAno('');
      setPlaca('');
    } catch (error) {
      console.error('Erro ao cadastrar/atualizar veículo:', error);
    }
  };

  const handleUpdateClick = (veiculo: Veiculo) => {
    setId(veiculo.id.toString());
    setMarca(veiculo.marca);
    setModelo(veiculo.modelo);
    setAno(veiculo.ano.toString());
    setPlaca(veiculo.placa);
    setEditandoId(veiculo.id);
  };

  const handleDelete = async (id: number) => {
    try {
      await deleteVeiculo(id);
      setVeiculos(await fetchVeiculos());
      alert('Veículo deletado com sucesso!');
    } catch (error) {
      console.error('Erro ao deletar veículo:', error);
    }
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
          <form onSubmit={validarFormularioVeiculo} className="w-full">
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="ID"
              className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-md outline-none placeholder-gray-400 mb-4"
            />
            <input
              type="text"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              placeholder="MARCA"
              className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-md outline-none placeholder-gray-400 mb-4"
            />
            <input
              type="text"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              placeholder="MODELO"
              className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-md outline-none placeholder-gray-400 mb-4"
            />
            <input
              type="text"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              placeholder="ANO DE FABRICAÇÃO"
              className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-md outline-none placeholder-gray-400 mb-4"
            />
            <input
              type="text"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              placeholder="PLACA"
              className="w-full p-4 bg-gray-800 text-white rounded-lg shadow-md outline-none placeholder-gray-400 mb-4"
            />
            <button type="submit" className="w-full py-4 mt-6 bg-gray-600 text-white font-bold rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition">
              {editandoId ? 'ATUALIZAR' : 'ENVIAR'}
            </button>
          </form>
          <ul className="w-full mt-6">
            {veiculos.map((veiculo, index) => (
              <li key={veiculo.id || index} className="flex justify-between items-center bg-gray-700 text-white p-4 rounded-lg mb-2">
                {veiculo.id} - {veiculo.marca} - {veiculo.modelo} - {veiculo.ano} - {veiculo.placa}
                <div>
                  <button onClick={() => handleUpdateClick(veiculo)} className="mr-2 px-4 py-2 bg-blue-600 rounded hover:bg-blue-700">Atualizar</button>
                  <button onClick={() => handleDelete(veiculo.id)} className="px-4 py-2 bg-red-600 rounded hover:bg-red-700">Deletar</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default VeiculoComponent;
