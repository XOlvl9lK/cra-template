import { useCallback, useState } from 'react'

type UseIsVisibleProps<OnOpenArgs extends any[]> = {
  initialState?: boolean
  onOpen?: (...args: OnOpenArgs) => void
  onClose?: () => void
}

export const useIsVisible = <OnOpenArgs extends any[]>({ onOpen, onClose, initialState }: UseIsVisibleProps<OnOpenArgs> = {}): [
  boolean,
  (...args: OnOpenArgs) => void,
  () => void,
  (...args: OnOpenArgs) => void
] => {
  const [isVisible, setIsVisible] = useState<boolean>(initialState || false)

  const open = useCallback((...args: OnOpenArgs) => {
    setIsVisible(true)
    onOpen?.(...args)
  }, [onOpen])

  const close = useCallback(() => {
    setIsVisible(false)
    onClose?.()
  }, [onClose])

  const toggle = useCallback((...args: OnOpenArgs) => {
    setIsVisible(prev => {
      if (prev) {
        onClose?.()
      } else {
        onOpen?.(...args)
      }
      return !prev
    })
  }, [onClose, onOpen])

  return [
    isVisible,
    open,
    close,
    toggle
  ]
}
