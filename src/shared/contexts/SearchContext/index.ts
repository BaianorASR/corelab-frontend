import { createContext, useContext } from 'react';
import { IVehiclesData } from 'shared/types/IVehiclesData';

export type TSearchContext = {
  vehiclesFound: IVehiclesData[];
  setVehiclesFound: (data: IVehiclesData[]) => void;
};

export const SearchContext = createContext<TSearchContext>({} as TSearchContext);
export const useSearchContext = () => useContext(SearchContext);
