import { ABackButton } from 'atomic/atoms/ABackButton';
import { OVehicleForm } from 'atomic/organisms/OVehicleForm';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { vehiclesApi } from 'services/api';
import { FormLayout } from 'styles/layouts/FormLayout';

const CreateOrEditVehicle: NextPage = () => {
  const methods = useForm();
  const { pathname, push } = useRouter();

  const onSubmit = async (data: any) => {
    const dataToCreate = {
      ...data,
      price: Number(data.price),
    };

    if (pathname.includes('edit')) {
      return vehiclesApi.updateVehicle(data.id, dataToCreate);
    }
    await vehiclesApi.createVehicle(dataToCreate);
    return push('/');
  };

  return (
    <FormLayout>
      <ABackButton />
      <FormProvider {...methods}>
        <OVehicleForm submitFunction={onSubmit} />
      </FormProvider>
    </FormLayout>
  );
};

export default CreateOrEditVehicle;
