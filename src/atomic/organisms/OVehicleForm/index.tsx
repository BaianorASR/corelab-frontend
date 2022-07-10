import { ADefaultButton } from 'atomic/atoms/AButton';
import { MColorPicker } from 'atomic/molecules/MColorPicker';
import { MFormInput } from 'atomic/molecules/MFormInput';
import { useRouter } from 'next/router';
import { CircleNotch } from 'phosphor-react';
import { FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ReactLoading from 'react-loading';
import { vehiclesApi } from 'services/api';
import { useTheme } from 'styled-components';

import * as S from './styles';

type OVehicleFormProps = {
  // submitFunction: (data: any) => void;
};

export const OVehicleForm: FC<OVehicleFormProps> = ({ submitFunction }) => {
  const [isloading, setIsLoading] = useState(false);
  const { handleSubmit } = useFormContext();
  const theme = useTheme();

  const { pathname, push } = useRouter();

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    const dataToCreate = {
      ...data,
      price: Number(data.price),
    };

    if (pathname.includes('edit')) {
      return vehiclesApi.updateVehicle(data.id, dataToCreate);
    }
    await vehiclesApi.createVehicle(dataToCreate);
    setIsLoading(false);
    return push('/');
  };

  return (
    <S.Form action="POST" onSubmit={handleSubmit(onSubmit)}>
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
        {isloading ? (
          <ADefaultButton>
            <CircleNotch size={40} />
          </ADefaultButton>
        ) : (
          <ADefaultButton type="submit">SALVAR</ADefaultButton>
        )}
      </S.Content>
    </S.Form>
  );
};
