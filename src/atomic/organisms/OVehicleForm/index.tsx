import { ADefaultButton } from 'atomic/atoms/AButton';
import { MColorPicker } from 'atomic/molecules/MColorPicker';
import { MFormInput } from 'atomic/molecules/MFormInput';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';

import * as S from './styles';

type OVehicleFormProps = {
  submitFunction: (data: any) => void;
};

export const OVehicleForm: FC<OVehicleFormProps> = ({ submitFunction }) => {
  const { handleSubmit } = useFormContext();

  return (
    <S.Form action="POST" onSubmit={handleSubmit(submitFunction)}>
      <S.Content>
        <MFormInput label="Nome" name="name" />
        <MFormInput label="Marca" name="brand" />
        <MFormInput label="Descrição" name="description" />
        <div className="">
          <MColorPicker />
        </div>
        <MFormInput label="Placa" name="plate" />
        <div className="content">
          <MFormInput label="Ano" name="year" />
          <MFormInput label="Preço" name="price" type="number" />
        </div>
        <ADefaultButton type="submit">SALVAR</ADefaultButton>
      </S.Content>
    </S.Form>
  );
};
