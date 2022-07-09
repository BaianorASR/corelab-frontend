import { vehiclesApi } from 'services/api';
import { IVehiclesData } from 'shared/types/IVehiclesData';
import useSWR from 'swr';

export function useFetch(key: string) {
  const { data, error, mutate } = useSWR<IVehiclesData[]>(key, () => {
    switch (key) {
      case 'favorites':
        return vehiclesApi.getFavoriteVehicles().then(res => res);
      case 'my-vehicles':
        return vehiclesApi.getAllVehicles().then(res => res);
      default:
        return vehiclesApi.getAllVehicles().then(res => res);
    }
  });

  return { data, error, isLoading: !data && !error, mutate };
}
