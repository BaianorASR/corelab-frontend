import { ReactNode, useMemo, useState } from 'react';
import { IVehiclesData } from 'shared/types/IVehiclesData';

import { SearchContext } from '.';

type SearchProviderProps = {
  children: ReactNode;
};

export function DatabaseProvider({ children }: SearchProviderProps) {
  const [vehiclesFound, setVehiclesFound] = useState<IVehiclesData[]>([]);

  const database = useMemo(
    () => ({
      vehiclesFound,
      setVehiclesFound,
    }),
    [vehiclesFound],
  );

  return <SearchContext.Provider value={database}>{children}</SearchContext.Provider>;
}
