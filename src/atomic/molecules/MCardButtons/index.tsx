import { ACardDelete } from 'atomic/atoms/ACardDelete';
import { ACardLike } from 'atomic/atoms/ACardLike';
import { CircleNotch } from 'phosphor-react';
import { FC, useState } from 'react';
import { useTheme } from 'styled-components';

type MCardButtonsProps = {
  vehicleId: string;
  isFavorite: boolean;
};

export const MCardButtons: FC<MCardButtonsProps> = ({ vehicleId, isFavorite }) => {
  const { text } = useTheme();
  const [isFetching, setIsFetching] = useState(false);

  return (
    <div className="btn-cards">
      {isFetching ? (
        <CircleNotch size={26} weight="light" />
      ) : (
        <>
          <ACardDelete color={text} vehicleId={vehicleId} />
          <ACardLike
            color={text}
            isFavorite={isFavorite}
            vehicleId={vehicleId}
            changeIsFetchingStatus={setIsFetching}
          />
        </>
      )}
    </div>
  );
};
