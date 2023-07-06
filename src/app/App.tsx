import React from 'react';
import { ConfigProvider } from 'antd'
import ru from 'antd/lib/locale/ru_RU'
import { InitializeAppProvider, QueryClientProvider, RouterProvider, StoreProvider } from './Providers'
import { GlobalStyles } from './GlobalStyles/GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ConfigProvider locale={ru}>
        <StoreProvider>
          <QueryClientProvider>
            <InitializeAppProvider>
              <RouterProvider />
            </InitializeAppProvider>
          </QueryClientProvider>
        </StoreProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
