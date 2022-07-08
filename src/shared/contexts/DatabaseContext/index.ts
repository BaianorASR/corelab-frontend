import { Dispatch, SetStateAction, createContext, useContext } from 'react';
import { IVehiclesData } from 'shared/types/IVehiclesData';

export type TDatabaseContext = {
  vehicles: IVehiclesData[];
  setVehicles: Dispatch<SetStateAction<IVehiclesData[]>>;

  favoritesVehicles: IVehiclesData[];
  setFavoritesVehicles: Dispatch<SetStateAction<IVehiclesData[]>>;

  myVehicles: IVehiclesData[];
  setMyVehicles: Dispatch<SetStateAction<IVehiclesData[]>>;
};

export const DatabaseContext = createContext<TDatabaseContext>({} as TDatabaseContext);
export const useDatabaseContext = () => useContext(DatabaseContext);
