export type ActionsType = IncType | DecrType | ResetType | SetMin | SetMax | SetCount;

type IncType = ReturnType<typeof incAC>

export const incAC = () => {
  return {
    type: 'INCR'
  } as const
}

type DecrType = ReturnType<typeof decrAC>;

export const decrAC = () => {
  return {
    type: 'DECR'
  } as const
}

type ResetType = ReturnType<typeof resetAC>

export const resetAC = () => {
  return {
    type: 'RESET'
  } as const
}

type SetMin = ReturnType<typeof setMinAC>;

export const setMinAC = (min: number) => {
  return {
    type: 'SET_MIN',
    payload: min
  } as const
}

type SetMax = ReturnType<typeof setMaxAC>;

export const setMaxAC = (max: number) => {
  return {
    type: 'SET_MAX',
    payload: max
  } as const
}

type SetCount = ReturnType<typeof setCountAC>

export const setCountAC = (count: number) => {
  return {
    type: 'SET_COUNT',
    payload: count
  } as const
}