import { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface IHttpService {
  get: <Response = any, Data = any>(url: string, config?: AxiosRequestConfig<Data>) => Promise<AxiosResponse<Response>>
  post: <Response = any, Data = any>(url: string, data?: Data, config?: AxiosRequestConfig<Data>) => Promise<AxiosResponse<Response>>
  put: <Response = any, Data = any>(url: string, data?: Data, config?: AxiosRequestConfig<Data>) => Promise<AxiosResponse<Response>>
  delete: <Response = any, Data = any>(url: string, config?: AxiosRequestConfig<Data>) => Promise<AxiosResponse<Response>>
}
