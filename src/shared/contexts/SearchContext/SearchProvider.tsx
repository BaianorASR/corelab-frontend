import { ReactNode, useCallback, useMemo, useState } from 'react';
import { IVehiclesData } from 'shared/types/IVehiclesData';

import { SearchContext } from '.';

type SearchProviderProps = {
  children: ReactNode;
};

export function DatabaseProvider({ children }: SearchProviderProps) {
  const [vehiclesFound, setVehiclesFound] = useState<IVehiclesData[]>([]);

  const removeVehicle = useCallback(
    (vehicleId: string) => {
      setVehiclesFound(vehiclesFound.filter(vehicle => vehicle.id !== vehicleId));
    },
    [vehiclesFound],
  );

  const updateFavoriteStatus = useCallback(
    (vehicleId: string, isFavorite: boolean) => {
      setVehiclesFound(
        vehiclesFound.map(vehicle => {
          if (vehicle.id === vehicleId) {
            return { ...vehicle, isFavorite };
          }
          return vehicle;
        }),
      );
    },
    [vehiclesFound],
  );

  const database = useMemo(
    () => ({
      vehiclesFound,
      setVehiclesFound,
      removeVehicle,
      updateFavoriteStatus,
    }),
    [vehiclesFound, removeVehicle, updateFavoriteStatus],
  );

  return <SearchContext.Provider value={database}>{children}</SearchContext.Provider>;
}
