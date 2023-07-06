import { useNavigate } from 'react-router-dom'
import { useCallback } from 'react'

export const useGoTo = (to: string) => {
  const navigate = useNavigate()

  return useCallback(() => {
    navigate(to)
  }, [navigate, to])
}
