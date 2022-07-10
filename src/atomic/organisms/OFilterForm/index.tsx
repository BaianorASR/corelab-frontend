import { ADefaultButton } from 'atomic/atoms/AButton';
import { MFormInput } from 'atomic/molecules/MFormInput';
import { MFormSelect } from 'atomic/molecules/MFormSelect';
import { useRouter } from 'next/router';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { vehiclesApi } from 'services/api';
import { useSearchContext } from 'shared/contexts/SearchContext';
import { IFiltersOptions } from 'shared/types/IFiltersOptions';

import * as S from './styles';

type OFilterFormProps = {
  selectOptions: IFiltersOptions;
};

export const OFilterForm: FC<OFilterFormProps> = ({ selectOptions }) => {
  const { push } = useRouter();
  const { handleSubmit } = useFormContext();
  const { setVehiclesFound } = useSearchContext();

  const test = async (data: any) => {
    const filtered = await vehiclesApi.getFilteredVehicles(data);
    setVehiclesFound(filtered);
    push('/search');
  };

  return (
    <S.FormContainer action="geGET" onSubmit={handleSubmit(test)}>
      <MFormSelect label="Marca" options={selectOptions.brands} name="brand" />
      <MFormSelect label="Cor:" options={selectOptions.colors} name="color" />
      <MFormSelect label="Ano:" options={selectOptions.years} name="year" />
      <S.Prices>
        <MFormInput label="Preço mín." name="minPrice" />
        <MFormInput label="Preço máx." name="maxPrice" />
      </S.Prices>
      <ADefaultButton type="submit" width={125} height={50}>
        SALVAR
      </ADefaultButton>
    </S.FormContainer>
  );
};
