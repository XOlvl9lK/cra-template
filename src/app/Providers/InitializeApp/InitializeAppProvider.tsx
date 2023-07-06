import React, { FC, PropsWithChildren } from 'react'
import styled from 'styled-components'
import { Spin } from 'antd'

export const InitializeAppProvider: FC<PropsWithChildren> = ({ children }) => {
  // const { isAppLoading } = useInitializeApp()

  if (true) {
    return <SLoaderContainer>
      <Spin />
    </SLoaderContainer>
  }

  return <>
    {children}
  </>
}

const SLoaderContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .ant-spin-dot {
    font-size: 25px;
  }
`
