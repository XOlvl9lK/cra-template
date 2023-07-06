import { useSelector } from 'react-redux'
import { selectViewer } from './viewerSlice'

export const useViewer = () => {
  return useSelector(selectViewer)
}
