export enum AppRoutesEnum {
  HOME = 'home',
  AUTH = 'auth',
  ROOT = 'root',
  FORBIDDEN = 'forbidden'
}

export const RoutePath: Record<AppRoutesEnum, string> = {
  [AppRoutesEnum.ROOT]: '/',
  [AppRoutesEnum.HOME]: '/main',
  [AppRoutesEnum.AUTH]: '/auth',
  [AppRoutesEnum.FORBIDDEN]: '/forbidden'
}
