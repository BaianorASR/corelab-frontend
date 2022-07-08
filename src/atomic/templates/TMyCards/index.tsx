import { OVehicleCard } from 'atomic/organisms/OVehicleCard';
import React, { FC } from 'react';
import { useFetch } from 'shared/hooks/useFetch';

import * as S from './styles';

// import { IVehiclesData } from 'shared/types/IVehiclesData';

type TMyCardsProps = {
  // myVehicles: IVehiclesData[];
};

export const TMyCards: FC<TMyCardsProps> = () => {
  const { data } = useFetch('my-vehicles');

  return (
    <S.Container>
      <h2>Meus Anúncios</h2>
      <S.CardsContainer>
        {data?.map(vehicle => (
          <li key={vehicle.id}>
            <OVehicleCard vehicle={vehicle} />
          </li>
        ))}
      </S.CardsContainer>
    </S.Container>
  );
};
