import { PermissionCodeEnum, PermissionOperandEnum } from 'shared/types/entities/PermissionEntity'

export type AppliablePermissions = PermissionCodeEnum[] | { operand: PermissionOperandEnum, permissions: PermissionCodeEnum[] }
