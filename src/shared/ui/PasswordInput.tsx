import { FC } from 'react'
import { PasswordProps } from 'antd/es/input/Password'
import { Input } from 'antd'

export const PasswordInput: FC<PasswordProps> = (props) => {
  return <Input.Password {...props} type='password' autoComplete='off' />
}
