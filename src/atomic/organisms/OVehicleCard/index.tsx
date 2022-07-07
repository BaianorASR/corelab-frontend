import { Heart, X } from 'phosphor-react';
import React from 'react';
import { IVehiclesData } from 'shared/types/IVehiclesData';

type OVehicleCardProps = {
  vehicle: IVehiclesData;
};

export const OVehicleCard: React.FC<OVehicleCardProps> = ({ vehicle }) => {
  return (
    <div>
      <div>
        <X size={26} weight="light" />
        <Heart size={26} weight="light" />
      </div>
      <h1>{vehicle.name}</h1>
      <p>{vehicle.description}</p>
      <p>{vehicle.color}</p>
      <p>{vehicle.plate}</p>
      <p>{vehicle.price}</p>
      <p>{vehicle.year}</p>
    </div>
  );
};
