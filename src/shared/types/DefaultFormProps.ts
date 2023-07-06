import { FormInstance } from './FormInstance'

export type DefaultFormProps<Values = any> = {
  form: FormInstance<Values>
  onFinish?: (values: Values) => void
}
