import React, { forwardRef, ForwardRefRenderFunction, ReactNode, useImperativeHandle, useMemo } from 'react'
import { Button, Modal, ModalProps } from 'antd'
import { useIsVisible } from 'shared/hooks'
import { ButtonProps } from 'antd/es/button/button'
import styled from 'styled-components'

type ModalControlledProps = {
  onOpen?: () => void
  onClose?: () => void
  content?: ReactNode
  opened?: boolean
  buttonProps?: ButtonProps
  okButtonProps?: OkButtonProps
  loading?: boolean
} & Omit<ModalProps, 'visible' | 'open' | 'onOk' | 'onCancel'>

type OkButtonProps = {
  okText?: string
  htmlType?: string
  onOk?: () => void
}

// @ts-ignore
export const _ModalControlled: ForwardRefRenderFunction<any, ModalControlledProps> = (
  {
    content,
    onClose,
    onOpen,
    opened,
    buttonProps,
    okButtonProps,
    loading,
    ...modalProps
  },
  ref
) => {
  const [isVisible, open, close] = useIsVisible({
    onOpen,
    onClose,
    initialState: opened
  })

  useImperativeHandle(ref, () => ({ open, close }))

  const footer = useMemo(() => {
    return <SModalFooter>
      <Button disabled={loading} onClick={close} type='default'>Отмена</Button>
      <Button loading={loading} type='primary' {...okButtonProps}>{okButtonProps?.okText || 'Сохранить'}</Button>
    </SModalFooter>
  }, [close, okButtonProps, loading])

  return (
    <>
      <div>
        <Button {...buttonProps} onClick={open}>{buttonProps?.title}</Button>
      </div>
      <Modal
        footer={footer}
        centered
        {...modalProps}
        open={isVisible}
        onCancel={close}
      >
        {content}
      </Modal>
    </>
  )
}

const SModalFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
`

export const ModalControlled = forwardRef(_ModalControlled)
