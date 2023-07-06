import { BaseEntity } from './BaseEntity'

export type User = BaseEntity & {
  username: string
}
