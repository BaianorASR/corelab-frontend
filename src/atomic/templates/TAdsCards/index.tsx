import { OVehicleCard } from 'atomic/organisms/OVehicleCard';
import React, { FC } from 'react';
import { IVehiclesData } from 'shared/types/IVehiclesData';

import * as S from './styles';

type TAdsCardsProps = {
  vehicles: IVehiclesData[];
};

export const TAdsCards: FC<TAdsCardsProps> = ({ vehicles }) => {
  return (
    <S.Container>
      <h2>Meus Anúncios</h2>
      <S.CardsContainer>
        {vehicles.map(vehicle => (
          <li key={vehicle.id}>
            <OVehicleCard vehicle={vehicle} />
          </li>
        ))}
      </S.CardsContainer>
    </S.Container>
  );
};
