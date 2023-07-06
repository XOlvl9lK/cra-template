import { IHttpService } from './IHttpService'
import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { AccessToken } from 'shared/config'

class HttpService implements IHttpService {
  private axios: AxiosInstance

  constructor() {
    const axiosInstance = axios.create({
      withCredentials: true
    })
    axiosInstance.interceptors.request.use(this.requestInterceptor)
    axiosInstance.interceptors.response.use(config => config, this.responseErrorInterceptor)

    this.axios = axiosInstance
  }

  get = <Response = any, Data = any>(url: string, config?: AxiosRequestConfig<Data>): Promise<AxiosResponse<Response>> => {
    return this.axios.get<Response>(url, config)
  }

  post = <Response = any, Data = any>(url: string, data?: Data, config?: AxiosRequestConfig<Data>): Promise<AxiosResponse<Response>> => {
    return this.axios.post<Response>(url, data, config)
  }

  put = <Response = any, Data = any>(url: string, data?: Data, config?: AxiosRequestConfig<Data>): Promise<AxiosResponse<Response>> => {
    return this.axios.put<Response>(url, data, config)
  }

  delete = <Response = any, Data = any>(url: string, config?: AxiosRequestConfig<Data>): Promise<AxiosResponse<Response>> => {
    return this.axios.delete<Response>(url, config)
  }

  request = <Response = any, Data = any>(config: AxiosRequestConfig<Data>): Promise<AxiosResponse<Response>> => {
    return this.axios.request(config)
  }

  private requestInterceptor = (config: InternalAxiosRequestConfig) => {
    const accessToken = AccessToken.get()
    if (config.headers && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  }

  private responseErrorInterceptor = async (error: AxiosError) => {

  }
}

export const httpService = new HttpService()
