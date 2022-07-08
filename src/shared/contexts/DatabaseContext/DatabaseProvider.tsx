import { ReactNode, useMemo, useState } from 'react';

import { DatabaseContext } from '.';

type DatabaseProviderProps = {
  children: ReactNode;
};

export function DatabaseProvider({ children }: DatabaseProviderProps) {
  const [vehicles, setVehicles] = useState<any[]>([]);
  const [favoritesVehicles, setFavoritesVehicles] = useState<any[]>([]);
  const [myVehicles, setMyVehicles] = useState<any[]>([]);

  const database = useMemo(
    () => ({
      vehicles,
      setVehicles,
      favoritesVehicles,
      setFavoritesVehicles,
      myVehicles,
      setMyVehicles,
    }),
    [favoritesVehicles, myVehicles, vehicles],
  );

  return <DatabaseContext.Provider value={database}>{children}</DatabaseContext.Provider>;
}
