import { BaseEntity } from './BaseEntity'

export enum PermissionOperandEnum {
  AND = 'AND',
  OR = 'OR'
}

export enum PermissionCodeEnum {
}

export type Permission = BaseEntity & {
  code: PermissionCodeEnum
}
