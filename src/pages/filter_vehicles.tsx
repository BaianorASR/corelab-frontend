import { ABackButton } from 'atomic/atoms/ABackButton';
import { OFilterForm } from 'atomic/organisms/OFilterForm';
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { vehiclesApi } from 'services/api';
import { IFiltersOptions } from 'shared/types/IFiltersOptions';

const FilterVehicles: NextPage = () => {
  const methods = useForm();
  const [selectOptions, setSelectOptions] = useState<IFiltersOptions>();

  useEffect(() => {
    (async () => {
      const data = await vehiclesApi.filters();
      setSelectOptions(data);
    })();
  }, []);

  return (
    <div>
      <ABackButton />
      <FormProvider {...methods}>
        {selectOptions && <OFilterForm selectOptions={selectOptions} />}
      </FormProvider>
    </div>
  );
};

export default FilterVehicles;
