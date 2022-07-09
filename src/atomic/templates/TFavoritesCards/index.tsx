import { OVehicleCard } from 'atomic/organisms/OVehicleCard';
import { FC } from 'react';
import { useFetch } from 'shared/hooks/useFetch';

import * as S from './styles';

export const TFavoritesCards: FC = () => {
  const { data } = useFetch('favorites');

  return (
    <S.Container>
      {!!data?.length && (
        <>
          <h2>Favoritos</h2>
          <S.CardsContainer>
            {data?.map(faVehicle => (
              <li key={faVehicle.id}>
                <OVehicleCard vehicle={faVehicle} />
              </li>
            ))}
          </S.CardsContainer>
        </>
      )}
    </S.Container>
  );
};
