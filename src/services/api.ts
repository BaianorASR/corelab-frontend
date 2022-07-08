import { IFiltersOptions } from 'shared/types/IFiltersOptions';
import { IVehiclesData } from 'shared/types/IVehiclesData';

import { NEXT_PUBLIC_API_URL } from '@configs/ENV';

import { BaseAPI } from './BaseApi';

interface IVehiclesResponse extends IVehiclesData {}

export class VehiclesApi extends BaseAPI {
  constructor(API_URL: string) {
    super(API_URL);
  }

  public async getAllVehicles() {
    const { data } = await this.get<IVehiclesResponse[]>('/');
    return data;
  }

  public async deleteVehicleById(id: string) {
    const apiResponse = await this.delete<IVehiclesResponse>(`/${id}`);
    return apiResponse.status;
  }

  public async createVehicle(vehicleData: IVehiclesResponse) {
    const { data } = await this.post<IVehiclesResponse>('/', vehicleData);
    return data;
  }

  public async updateVehicle(vehicleId: string, vehicleData: IVehiclesResponse) {
    const apiResponse = await this.put<IVehiclesResponse>(`/${vehicleId}`, vehicleData);
    if (apiResponse.status === 204) return true;
    return false;
  }

  public async changeFavoriteStatus(vehicleId: string) {
    const { data } = await this.put<{ favoriteStatus: boolean }>(
      `/favorite/${vehicleId}`,
    );
    return data.favoriteStatus;
  }

  public async getFavoriteVehicles() {
    const { data } = await this.get<IVehiclesResponse[]>('/favorite');
    console.log(data);
    return data;
  }

  public async filters() {
    const { data } = await this.get<IFiltersOptions>('/get_filters');
    return data;
  }
}

export const vehiclesApi = new VehiclesApi(NEXT_PUBLIC_API_URL);
