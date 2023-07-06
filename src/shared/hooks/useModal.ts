import { useRef } from 'react'

type ModalInstance = {
  open: () => void
  close: () => void
}

export const useModal = () => {
  return useRef<ModalInstance>()!
}
