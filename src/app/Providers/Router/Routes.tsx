import { RouteObject } from 'react-router-dom'
import { RoutePath } from 'shared/config'
import { AppliablePermissions } from 'shared/types'
import { AuthPage } from 'pages/Auth'
import { AppLayout } from 'app/AppLayout/AppLayout'
import { HomePage } from 'pages/Home'

export type Route = RouteObject & {
  index?: boolean
  private?: boolean
  permissions?: AppliablePermissions
  children?: Route[]
}

export const Routes: Route[] = [
  {
    path: RoutePath.auth,
    element: <AuthPage />,
  },
  {
    path: RoutePath.root,
    element: <AppLayout />,
    private: true,
    children: [
      {
        index: true,
        path: RoutePath.home,
        element: <HomePage />,
        private: true
      }
    ]
  },
]
