import { BaseService } from '../BaseService'
import { IHttpService } from '../IHttpService'
import { httpConfig } from 'shared/config'
import { User } from 'shared/types'
import { httpService } from '../HttpService'

class UserService extends BaseService {
  protected serviceUrl: string = httpConfig.userServiceUrl

  constructor(private httpService: IHttpService) {
    super()
  }

  getCurrent = async (): Promise<User> => {
    const url = this.createRequestUrl('/current')
    return (await this.httpService.get<User>(url)).data
  }
}

export const userService = new UserService(httpService)
