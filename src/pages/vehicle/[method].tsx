import { ABackButton } from 'atomic/atoms/ABackButton';
import { OVehicleForm } from 'atomic/organisms/OVehicleForm';
import { NextPage } from 'next';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FormLayout } from 'styles/layouts/FormLayout';

const CreateOrEditVehicle: NextPage = () => {
  const methods = useForm();

  return (
    <FormLayout>
      <ABackButton />
      <FormProvider {...methods}>
        <OVehicleForm />
      </FormProvider>
    </FormLayout>
  );
};

export default CreateOrEditVehicle;
