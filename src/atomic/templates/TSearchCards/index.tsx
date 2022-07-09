import { OVehicleCard } from 'atomic/organisms/OVehicleCard';
import React, { FC } from 'react';
import { useSearchContext } from 'shared/contexts/SearchContext';

import * as S from './styles';

type TSearchCardsProps = {
  // myVehicles: IVehiclesData[];
};

export const TSearchCards: FC<TSearchCardsProps> = () => {
  const { vehiclesFound } = useSearchContext();

  return (
    <S.Container>
      <h2>Anúncios encontrados</h2>
      <S.CardsContainer>
        {vehiclesFound?.map(vehicle => (
          <li key={vehicle.id}>
            <OVehicleCard vehicle={vehicle} />
          </li>
        ))}
      </S.CardsContainer>
    </S.Container>
  );
};
