import { FormInstance as AntdFormInstance } from 'antd/es/form/hooks/useForm'

export type FormInstance<Values> = Omit<AntdFormInstance<Values>, 'resetFields'> & {
  resetFields: () => void
  id: string
}
