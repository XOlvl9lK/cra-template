import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from 'app/Providers/Store/rootReducer'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware]
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof rootReducer>