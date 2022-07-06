import axios, { AxiosInstance, AxiosResponse } from 'axios';

export abstract class BaseAPI {
  protected baseUrl: string;

  private axiosInstance: AxiosInstance | any = null;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.axiosInstance = axios.create({ baseURL: this.baseUrl });
  }

  protected async get<T>(
    url: string,
    params?: any,
    headers?: any,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance({
      method: 'GET',
      url,
      params: params || null,
      headers: headers || null,
    });
  }

  protected post<T>(url: string, data?: any, headers?: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance({
      method: 'POST',
      url,
      data: data || null,
      headers: headers || null,
    });
  }

  protected put<T>(url: string, data?: any, headers?: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance({
      method: 'PUT',
      url,
      data: data || null,
      headers: headers || null,
    });
  }

  protected delete<T>(url: string, headers?: any): Promise<AxiosResponse<T>> {
    return this.axiosInstance({
      method: 'DELETE',
      url,
      headers: headers || null,
    });
  }
}
