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
    router.push('/app/chatbot');
    return true;
  };

  return (
    <div className="mainLogin">
      <div className="leftLogin">
        <h1>ÁREA DE CADASTRO DO VEÍCULO</h1>
        <Image src={specifyCar} className="leftLoginImage" alt="Carro" />
      </div>
      <div className="rightLogin">
        <div className="cardLogin">
          <h1>ESPECIFIQUE SEU VEÍCULO</h1>
          <div className="textfield">
            <label htmlFor="marca">MARCA</label>
            <input
              type="text"
              id="marca"
              name="marca"
              value={marca}
              onChange={(e) => setMarca(e.target.value)}
              placeholder="MARCA"
            />
          </div>
          <div className="textfield">
            <label htmlFor="modelo">MODELO</label>
            <input
              type="text"
              id="modelo"
              name="modelo"
              value={modelo}
              onChange={(e) => setModelo(e.target.value)}
              placeholder="MODELO"
            />
          </div>
          <div className="textfield">
            <label htmlFor="ano">ANO DE FABRICAÇÃO</label>
            <input
              type="text"
              id="ano"
              name="ano"
              value={ano}
              onChange={(e) => setAno(e.target.value)}
              placeholder="ANO DE FABRICAÇÃO"
            />
          </div>
          <div className="textfield">
            <label htmlFor="placa">PLACA</label>
            <input
              type="text"
              id="placa"
              name="placa"
              value={placa}
              onChange={(e) => setPlaca(e.target.value)}
              placeholder="PLACA"
            />
          </div>
          <form onSubmit={validarFormularioVeiculo}>
            <button className="btnLogin" type="submit">ENVIAR</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Veiculo;
