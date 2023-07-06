import { ErroneousProps, SuccessfulProps, User } from 'shared/types'
import { AxiosError } from 'axios'
import { useDispatch } from 'react-redux'
import { useQuery } from '@tanstack/react-query'
import { userService } from 'shared/api'
import { setIsViewerLoading, setViewer } from './viewerSlice'
import { useEffect } from 'react'

type UseLoadViewerProps = SuccessfulProps<User> & ErroneousProps<AxiosError>

export const LoadViewerQueryKey = 'viewer'

export const useLoadViewer = ({ onError, onSuccess }: UseLoadViewerProps = {}) => {
  const dispatch = useDispatch()

  const { refetch, isFetching } = useQuery({
    queryKey: [LoadViewerQueryKey],
    queryFn: userService.getCurrent,
    enabled: false,
    onSuccess(viewer) {
      dispatch(setViewer(viewer))
      onSuccess?.(viewer)
    },
    onError() {
      dispatch(setViewer(null))
      onError?.()
    },
    onSettled() {
      dispatch(setIsViewerLoading(false))
    }
  })

  useEffect(() => {
    if (isFetching) {
      dispatch(setIsViewerLoading(true))
    }
  }, [isFetching])

  return {
    loadViewer: refetch
  }
}
