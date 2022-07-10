import { MCardButtons } from 'atomic/molecules/MCardButtons';
import { MCardInfoDetails } from 'atomic/molecules/MCardIfoDetails';
import React from 'react';
import { IVehiclesData } from 'shared/types/IVehiclesData';

import * as S from './styles';

type OVehicleCardProps = {
  vehicle: IVehiclesData;
};

export const OVehicleCard: React.FC<OVehicleCardProps> = ({ vehicle }) => {
  return (
    <S.Card color={vehicle.color}>
      <MCardButtons vehicleId={vehicle.id} isFavorite={vehicle.isFavorite} />
      <S.CardVehicleName>{vehicle.name}</S.CardVehicleName>
      <MCardInfoDetails
        price={vehicle.price}
        description={vehicle.description}
        year={vehicle.year}
        color={vehicle.color}
        plate={vehicle.plate}
      />
    </S.Card>
  );
};
