import React from 'react'
import { ProtectedRoute } from './ProtectedRoute'
import { Route, Routes } from './Routes'
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider as ReactRouterProvider
} from 'react-router-dom'

const withProtectedRoute = (routes: Route[]): RouteObject[] => {
  return routes.map(route => {
    return ({
      ...route,
      element: route.private ? <ProtectedRoute permissions={route.permissions}>
          {route.element}
        </ProtectedRoute> :
        route.element,
      ...(route.children ? { children: withProtectedRoute(route.children as Route[]) } : {})
    }) as RouteObject
  })
}

const router = createBrowserRouter(withProtectedRoute(Routes))

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />
}
