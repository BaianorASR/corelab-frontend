import { ABackButton } from 'atomic/atoms/ABackButton';
import { OVehicleForm } from 'atomic/organisms/OVehicleForm';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { vehiclesApi } from 'services/api';

const CreateOrEditVehicle: NextPage = () => {
  const methods = useForm();
  const { pathname, push } = useRouter();

  const onSubmit = (data: any) => {
    const dataToCreate = {
      ...data,
      price: Number(data.price),
      year: Number(data.year),
    };

    if (pathname.includes('edit')) {
      return vehiclesApi.updateVehicle(data.id, dataToCreate);
    }
    vehiclesApi.createVehicle(dataToCreate);
    return push('/');
  };

  return (
    <div>
      <ABackButton />
      <FormProvider {...methods}>
        <OVehicleForm submitFunction={onSubmit} />
      </FormProvider>
    </div>
  );
};

export default CreateOrEditVehicle;
