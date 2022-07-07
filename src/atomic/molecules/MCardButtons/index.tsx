import { CircleNotch, Heart, X } from 'phosphor-react';
import { FC, useState } from 'react';
import { vehiclesApi } from 'services/api';

type MCardButtonsProps = {
  vehicleId: string;
  isFavorite: boolean;
};

export const MCardButtons: FC<MCardButtonsProps> = ({ vehicleId, isFavorite }) => {
  const [isFetching, setIsFetching] = useState(false);
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);

  const handleFavoriteStatus = async () => {
    setIsFetching(true);
    const data = await vehiclesApi.changeFavoriteStatus(vehicleId);
    setIsFavoriteState(data);
    setIsFetching(false);
  };

  const handleDeleteVehicle = async () => {
    await vehiclesApi.deleteVehicleById(vehicleId);
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
