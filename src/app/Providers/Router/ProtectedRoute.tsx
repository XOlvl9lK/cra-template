import React, { FC, PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'
import { RoutePath } from 'shared/config'
import { AppliablePermissions } from 'shared/types'
import { useSelector } from 'react-redux'
import { viewerModel } from 'entities/viewer'

type ProtectedRouteProps = {
  permissions?: AppliablePermissions
}

export const ProtectedRoute: FC<PropsWithChildren<ProtectedRouteProps>> = ({ children }) => {
  const { viewer, viewerPermissions } = useSelector(viewerModel.selectViewerState)

  if (!viewer) {
    return <Navigate to={RoutePath.auth} replace />
  }

  return (
    <>
      {children}
    </>
  )
}
