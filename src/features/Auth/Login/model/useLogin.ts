import { authService, LoginResponse } from 'shared/api'
import { ErroneousProps, SuccessfulProps } from 'shared/types'
import { AxiosError } from 'axios'
import { useMutation } from '@tanstack/react-query'

type UseLoginProps = SuccessfulProps<LoginResponse> & ErroneousProps<AxiosError>

export const useLogin = ({ onSuccess, onError }: UseLoginProps = {}) => {
  const { mutate, isLoading } = useMutation(authService.login, {
    onSuccess,
    onError
  })

  return {
    login: mutate,
    isLoginInProgress: isLoading
  }
}
