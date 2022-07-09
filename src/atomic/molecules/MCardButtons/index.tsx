import { useRouter } from 'next/router';
import { CircleNotch, Heart, X } from 'phosphor-react';
import { FC, useEffect, useState } from 'react';
import { vehiclesApi } from 'services/api';
import { favoriteStatus, removedData } from 'shared/helpers/mutates';
import { IVehiclesData } from 'shared/types/IVehiclesData';
import { mutate as mutateGlobal } from 'swr';

type MCardButtonsProps = {
  vehicleId: string;
  isFavorite: boolean;
};

export const MCardButtons: FC<MCardButtonsProps> = ({ vehicleId, isFavorite }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  const { pathname } = useRouter();

  const handleFavoriteStatus = async () => {
    setIsFetching(true);

    const bool = await vehiclesApi.changeFavoriteStatus(vehicleId);

    if (pathname === '/search') {
      setIsFetching(bool);
      return setIsFetching(false);
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

    return setIsFetching(false);
  };

  useEffect(() => {
    if (isFavoriteState !== isFavorite) setIsFavoriteState(isFavorite);
  }, [isFavorite, isFavoriteState]);

  const handleDeleteVehicle = async () => {
    await vehiclesApi.deleteVehicleById(vehicleId);
    await mutateGlobal('favorites');

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
    <div>
      {isFetching ? (
        <CircleNotch size={26} weight="light" />
      ) : (
        <>
          <X size={26} weight="light" onClick={handleDeleteVehicle} />
          <Heart
            size={26}
            weight={isFavoriteState ? 'fill' : 'light'}
            color="red"
            onClick={handleFavoriteStatus}
          />
        </>
      )}
    </div>
  );
};
