import { IVehiclesData } from 'shared/types/IVehiclesData';

export const removedData = (id: string, array: IVehiclesData[]) => {
  return array.filter(vehicle => vehicle.id !== id);
};

export const favoriteStatus = (id: string, array: IVehiclesData[]) => {
  return array.map(vehicle => {
    if (vehicle.id !== id) return vehicle;
    return { ...vehicle, isFavorite: !vehicle.isFavorite };
  });
};
