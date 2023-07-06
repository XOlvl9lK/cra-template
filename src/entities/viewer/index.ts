import { useViewer } from 'entities/viewer/model/useViewer'
import { setViewer, setIsViewerLoading, selectViewerState } from './model/viewerSlice'

export { viewerReducer } from './model/viewerSlice'

export const viewerModel = {
  setViewer,
  setIsViewerLoading,
  useViewer,
  selectViewerState
}
