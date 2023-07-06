import React from 'react'
import { Layout, Space, theme } from 'antd'
import { Outlet } from 'react-router-dom'

export const AppLayout = () => {
  return (
    <Layout>
      <Layout.Sider collapsed>
        Sider
      </Layout.Sider>
      <Layout>
        <Outlet />
      </Layout>
      <Layout.Footer>Footer</Layout.Footer>
    </Layout>
  )
}
