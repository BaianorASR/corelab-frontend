import { useRouter } from 'next/router';
import { X } from 'phosphor-react';
import React from 'react';
import { vehiclesApi } from 'services/api';
import { useSearchContext } from 'shared/contexts/SearchContext';
import { removedData } from 'shared/helpers/mutates';
import { IVehiclesData } from 'shared/types/IVehiclesData';
import { mutate as mutateGlobal } from 'swr';

type ACardDeleteProps = {
  vehicleId: string;
  color: string;
};

export const ACardDelete: React.FC<ACardDeleteProps> = ({ vehicleId, color }) => {
  const { pathname } = useRouter();
  const { removeVehicle } = useSearchContext();

  const handleDeleteVehicle = async () => {
    await vehiclesApi.deleteVehicleById(vehicleId);
    await mutateGlobal('favorites');

    if (pathname === '/search') {
      removeVehicle(vehicleId);
    }

    mutateGlobal(
      'favorites',
      (vehiclesData: IVehiclesData[]) => removedData(vehicleId, vehiclesData),
      false,
    );
    mutateGlobal(
      'my-vehicles',
      (vehiclesData: IVehiclesData[]) => removedData(vehicleId, vehiclesData),
      false,
    );
    mutateGlobal(
      'all-vehicles',
      (vehiclesData: IVehiclesData[]) => removedData(vehicleId, vehiclesData),
      false,
    );
  };

  return (
    <X
      size={26}
      weight="light"
      onClick={handleDeleteVehicle}
      color={color}
      cursor="pointer"
    />
  );
};
