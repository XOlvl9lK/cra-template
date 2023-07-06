import React, { FC } from 'react'
import { Input, InputProps } from 'antd'

export const TextInput: FC<InputProps> = (props) => {
  return <Input {...props} autoComplete='off' />
}
