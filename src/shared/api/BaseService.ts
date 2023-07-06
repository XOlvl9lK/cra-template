export abstract class BaseService {
  protected abstract serviceUrl: string

  protected createRequestUrl = (route?: string) => {
    return `${this.serviceUrl}${route || ''}`
  }
}
