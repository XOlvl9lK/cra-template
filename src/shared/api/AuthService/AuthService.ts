import { BaseService } from '../BaseService'
import { httpConfig } from 'shared/config'
import { IHttpService } from '../IHttpService'
import { httpService } from '../HttpService'
import { LoginResponse } from './Response/LoginResponse'
import { LoginRequest } from './Request/LoginRequest'

class AuthService extends BaseService {
  protected serviceUrl: string = httpConfig.authServiceUrl

  constructor(private httpService: IHttpService) {
    super()
  }

  login = async (data: LoginRequest): Promise<LoginResponse> => {
    const url = this.createRequestUrl('/login')
    return (await this.httpService.post(url, data)).data
  }

  logout = async (): Promise<void> => {
    const url = this.createRequestUrl('/logout')
    await this.httpService.post(url)
  }
}

export const authService = new AuthService(httpService)
