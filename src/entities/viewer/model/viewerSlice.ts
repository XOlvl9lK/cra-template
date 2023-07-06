import { PermissionCodeEnum, User } from 'shared/types'
import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'app/Providers'

type ViewerState = {
  viewer: User | null
  isViewerLoading: boolean
  viewerPermissions: PermissionCodeEnum[] | null
}

const initialState: ViewerState = {
  viewer: null,
  isViewerLoading: true,
  viewerPermissions: null
}

export const selectViewer = (state: RootState) => state.viewerReducer.viewer
export const selectViewerState = (state: RootState) => state.viewerReducer

const viewerSlice = createSlice({
  name: 'viewerSlice',
  initialState,
  reducers: {
    setViewer(
      state: ViewerState,
      { payload }: PayloadAction<User | null>
    ) {
      state.viewer = payload
    },
    setIsViewerLoading(
      state: ViewerState,
      { payload }: PayloadAction<boolean>
    ) {
      state.isViewerLoading = payload
    }
  }
})

export const {
  setViewer,
  setIsViewerLoading
} = viewerSlice.actions

export const viewerReducer = viewerSlice.reducer
