import { ADefaultButton } from 'atomic/atoms/AButton';
import { MFormInput } from 'atomic/molecules/MFormInput';
import { MFormSelect } from 'atomic/molecules/MFormSelect';
import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { IFiltersOptions } from 'shared/types/IFiltersOptions';

type OFilterFormProps = {
  selectOptions: IFiltersOptions;
};

export const OFilterForm: FC<OFilterFormProps> = ({ selectOptions }) => {
  const { handleSubmit } = useFormContext();

  const test = (data: any) => console.log(data);

  return (
    <form action="POST" onSubmit={handleSubmit(test)}>
      <MFormSelect label="Marca" options={selectOptions.brands} name="brand" />
      <MFormSelect label="Cor:" options={selectOptions.colors} name="color" />
      <MFormSelect label="Ano:" options={selectOptions.years} name="year" />
      <MFormInput label="Preço mín." name="minPrice" />
      <MFormInput label="Preço máx." name="maxPrice" />
      <ADefaultButton type="submit">SALVAR</ADefaultButton>
    </form>
  );
};
