import { OVehicleCard } from 'atomic/organisms/OVehicleCard';
import { FC } from 'react';
import { useFetch } from 'shared/hooks/useFetch';

import * as S from './styles';

type TFavoritesCardsProps = {
  // favoritesVehicles: IVehiclesData[];
};

export const TFavoritesCards: FC<TFavoritesCardsProps> = () => {
  const { data } = useFetch('favorites');

  // if (isLoading) {
  //   return <p>loading</p>;
  // }

  return (
    <S.Container>
      <h2>Favoritos</h2>
      <S.CardsContainer>
        {data?.map(faVehicle => (
          <li key={faVehicle.id}>
            <OVehicleCard vehicle={faVehicle} />
          </li>
        ))}
      </S.CardsContainer>
    </S.Container>
  );
};
