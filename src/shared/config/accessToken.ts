export class AccessToken {
  private static tokenKey = 'access_token'

  static get(): string | null {
    return localStorage.getItem(AccessToken.tokenKey)
  }

  static set(value: string): void {
    localStorage.setItem(AccessToken.tokenKey, value)
  }

  static remove(): void {
    localStorage.removeItem(AccessToken.tokenKey)
  }
}
