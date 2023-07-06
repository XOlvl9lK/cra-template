import React, { FC, PropsWithChildren, useMemo } from 'react'
import { FormItemProps as _FormItemProps, InputProps, Form } from 'antd'
import { PasswordProps } from 'antd/es/input/Password'
import { TextInput } from './TextInput'
import { PasswordInput } from './PasswordInput'

type FormItemProps = _FormItemProps & (
  {
    inputType?: 'text'
    inputProps?: InputProps
  } | {
    inputType?: 'password'
    inputProps?: PasswordProps
  }
)

export const FormItem: FC<PropsWithChildren<FormItemProps>> = ({ inputType, inputProps, ...props}) => {
  const Item = useMemo(() => {
    switch (inputType) {
      case 'text':
        return TextInput
      case 'password':
        return PasswordInput
      default:
        return null
    }
  }, [inputType])

  return (
    <Form.Item {...props}>
      {Item ? <Item {...inputProps} /> : props.children}
    </Form.Item>
  )
}
