import { Form } from 'antd'
import { useStateAndSetIfNotEqual } from './useStateAndSetIfNotEqual'
import { useCallback, useEffect, useId } from 'react'
import { FormInstance } from '../types'

type UseFormProps<Values> = {
  form?: FormInstance<Values>
  initialValues?: Partial<Values>
}

export const useForm = <Values extends Record<string, any>>({ initialValues, form }: UseFormProps<Values> = {}): FormInstance<Values> => {
  const [_form] = Form.useForm<Values>(form)
  const id = useId()

  const _initialValues = useStateAndSetIfNotEqual(initialValues)

  const resetFields = useCallback(() => {
    _form.resetFields()
    if (_initialValues) {
      _form.setFieldsValue(_initialValues)
    }
  }, [_form, _initialValues])

  useEffect(() => {
    resetFields()
  }, [_initialValues])

  return {
    ..._form,
    resetFields,
    id
  }
}
