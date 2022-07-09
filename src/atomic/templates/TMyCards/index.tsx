import { OVehicleCard } from 'atomic/organisms/OVehicleCard';
import React, { FC } from 'react';
import { useFetch } from 'shared/hooks/useFetch';

import * as S from './styles';

export const TMyCards: FC = () => {
  const { data } = useFetch('my-vehicles');

  return (
    <S.Container>
      {!!data?.length && (
        <>
          <h2>Meus Anúncios</h2>
          <S.CardsContainer>
            {data?.map(vehicle => (
              <li key={vehicle.id}>
                <OVehicleCard vehicle={vehicle} />
              </li>
            ))}
          </S.CardsContainer>
        </>
      )}
    </S.Container>
  );
};
