import { useRouter } from 'next/router';
import { Heart } from 'phosphor-react';
import { FC, useEffect, useState } from 'react';
import { vehiclesApi } from 'services/api';
import { useSearchContext } from 'shared/contexts/SearchContext';
import { favoriteStatus } from 'shared/helpers/mutates';
import { IVehiclesData } from 'shared/types/IVehiclesData';
import { mutate as mutateGlobal } from 'swr';

type ACardLikeProps = {
  color: string;
  isFavorite: boolean;
  vehicleId: string;
  changeIsFetchingStatus: (boll: boolean) => void;
};

export const ACardLike: FC<ACardLikeProps> = ({
  color,
  isFavorite,
  vehicleId,
  changeIsFetchingStatus,
}) => {
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const { pathname } = useRouter();
  const { updateFavoriteStatus } = useSearchContext();

  const handleFavoriteStatus = async () => {
    changeIsFetchingStatus(true);
    const { favoriteStatus: bool } = await vehiclesApi.changeFavoriteStatus(vehicleId);

    if (pathname.includes('/search')) {
      updateFavoriteStatus(vehicleId, bool);
      return changeIsFetchingStatus(false);
    }

    mutateGlobal('favorites');
    mutateGlobal(
      'my-vehicles',
      (data: IVehiclesData[]) => favoriteStatus(vehicleId, data),
      false,
    );
    mutateGlobal(
      'all-vehicles',
      (data: IVehiclesData[]) => favoriteStatus(vehicleId, data),
      false,
    );
    return changeIsFetchingStatus(false);
  };

  useEffect(() => {
    if (isFavoriteState !== isFavorite) setIsFavoriteState(isFavorite);
  }, [isFavorite, isFavoriteState]);

  return (
    <Heart
      size={26}
      weight={isFavoriteState ? 'fill' : 'light'}
      color={color}
      onClick={handleFavoriteStatus}
      cursor="pointer"
    />
  );
};
