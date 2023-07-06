import React, { FC, PropsWithChildren } from 'react'
import { QueryClient, QueryClientProvider as ReactQueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

export const QueryClientProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <ReactQueryClientProvider client={queryClient}>
      {children}
    </ReactQueryClientProvider>
  )
}
