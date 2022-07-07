import { ADefaultButton } from 'atomic/atoms/AButton';
import { MFormInput } from 'atomic/molecules/MFormInput';
import { FormProvider, useForm } from 'react-hook-form';

import * as S from './styles';

export const OVehicleForm: React.FC = () => {
  const methods = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <FormProvider {...methods}>
      <S.Form action="POST" onSubmit={methods.handleSubmit(onSubmit)}>
        <S.Content>
          <MFormInput label="Nome" name="name" />
          <MFormInput label="Marca" name="brand" />
          <MFormInput label="Descrição" name="description" />
          <div>
            <MFormInput label="Cor" name="color" />
            <MFormInput label="Ano" name="year" />
          </div>
          <div style={{ display: 'flex' }}>
            <MFormInput label="Placa" name="plate" />
            <MFormInput label="Preço" name="price" />
          </div>
          <ADefaultButton type="submit">SALVAR</ADefaultButton>
        </S.Content>
      </S.Form>
    </FormProvider>
  );
};
