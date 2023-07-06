import React, { FC } from 'react'
import { DefaultFormProps } from 'shared/types'
import { Form, Input } from 'antd'
import { FormItem } from 'shared/ui'

export type LoginFormValues = {
  username: string
  password: string
}

type LoginFormProps = DefaultFormProps<LoginFormValues> & {}

export const LoginForm: FC<LoginFormProps> = ({ ...formProps }) => {
  return (
    <Form<LoginFormValues> {...formProps} id={formProps.form.id} layout='vertical'>
      <FormItem label='Имя пользователя' name='username' rules={[{ required: true }]} inputType='text' />
      <FormItem label='Пароль' name='password' rules={[{ required: true }]} inputType='password' />
    </Form>
  )
}
