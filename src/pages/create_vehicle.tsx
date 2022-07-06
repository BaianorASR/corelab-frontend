import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { ArrowLeft } from 'phosphor-react';
import React from 'react';

const CreateVehicle: NextPage = () => {
  const { push } = useRouter();

  return (
    <div>
      <ArrowLeft size={32} weight="light" onClick={() => push('/')} />
      <form action="POST">
        <label htmlFor="input">
          Nome
          <input type="text" id="input" />
        </label>
        <label htmlFor="input">
          Marca
          <input type="text" id="input" />
        </label>
        <label htmlFor="input">
          Preço
          <input type="text" id="input" />
        </label>
        <label htmlFor="input">
          Descrição
          <input type="text" id="input" />
        </label>
        <label htmlFor="input">
          Cor
          <input type="text" id="input" />
        </label>
        <label htmlFor="input">
          Ano
          <input type="text" id="input" />
        </label>
        <label htmlFor="input">
          Placa
          <input type="text" id="input" />
        </label>
      </form>
    </div>
  );
};

export default CreateVehicle;
