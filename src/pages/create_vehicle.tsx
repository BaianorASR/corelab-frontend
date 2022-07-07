import { ABackButton } from 'atomic/atoms/ABackButton';
import { OVehicleForm } from 'atomic/organisms/OVehicleForm';
import { NextPage } from 'next';
import React from 'react';

const CreateVehicle: NextPage = () => {
  return (
    <div>
      <ABackButton />
      <OVehicleForm />
    </div>
  );
};

export default CreateVehicle;
