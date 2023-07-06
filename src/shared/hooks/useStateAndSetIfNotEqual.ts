import { useEffect, useState } from 'react'
import { isEqual } from 'lodash'

export const useStateAndSetIfNotEqual = <T>(value: T) => {
  const [state, setState] = useState<T>(value)

  useEffect(() => {
    if (!isEqual(value, state)) {
      setState(value)
    }
  }, [value])

  return value
}
