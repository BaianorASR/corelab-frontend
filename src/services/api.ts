import { IFiltersOptions } from 'shared/types/IFiltersOptions';
import { IVehiclesData } from 'shared/types/IVehiclesData';

import { NEXT_PUBLIC_API_URL } from '@configs/ENV';

import { BaseAPI } from './BaseApi';

interface IVehiclesResponse extends IVehiclesData {}
interface IFilterJSON {
  color?: string;
  brand?: string;
  year?: string;
  minPrice?: number;
  maxPrice?: number;
}

export class VehiclesApi extends BaseAPI {
  constructor(API_URL: string) {
    super(API_URL);
  }

  public async getAllVehicles() {
    const { data } = await this.get<IVehiclesResponse[]>('/');
    return data;
  }

  public async deleteVehicleById(id: string) {
    const apiResponse = await this.delete(`/${id}`);
    return apiResponse.status;
  }

  public async createVehicle(vehicleData: IVehiclesResponse) {
    const { data } = await this.post<IVehiclesResponse>('/', vehicleData);
    return data;
  }

  public async updateVehicle(vehicleId: string, vehicleData: IVehiclesResponse) {
    const apiResponse = await this.put(`/${vehicleId}`, vehicleData);
    if (apiResponse.status === 204) return true;
    return false;
  }

  public async changeFavoriteStatus(vehicleId: string) {
    const { data } = await this.put<{
      message: 'Vehicle favorite status changed successfully';
      favoriteStatus: false;
    }>(`/favorite/${vehicleId}`);
    return data;
  }

  public async getFavoriteVehicles() {
    const { data } = await this.get<IVehiclesResponse[]>('/favorite');
    return data;
  }

  public async getFilteredVehicles(JSON: IFilterJSON) {
    const { data } = await this.get<IVehiclesResponse[]>('/filter', JSON);
    return data;
  }

  public async filters() {
    const { data } = await this.get<IFiltersOptions>('/get_filters');
    return data;
  }

  public async searchVehicles(query: string) {
    const { data } = await this.get<IVehiclesResponse[]>(`/search`, {
      query,
    });
    return data;
  }
}

export const vehiclesApi = new VehiclesApi(NEXT_PUBLIC_API_URL);
