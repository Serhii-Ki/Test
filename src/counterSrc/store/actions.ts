export type ActionsCounterType =
    IncrementType
    |  DecrementType
    | ResetType
    | ChangeMin
    | ChangeMax
    | SetMinType
    | SetMaxType;

type IncrementType = ReturnType<typeof incrementAC>;

export const incrementAC = ( ) => {
  return {
    type: 'INCREMENT'
  } as const
};

type DecrementType = ReturnType<typeof decrementAC>;

export const decrementAC = ( ) => {
  return {
    type: 'DECREMENT'
  } as const
}

type ResetType = ReturnType<typeof resetAC>;

export const resetAC = ( ) => {
  return {
    type: 'RESET'
  } as const
};

type ChangeMin = ReturnType<typeof changeMinAC>;

export const changeMinAC = ( min: string ) => {
  return {
    type: 'CHANGE_MIN',
    min
  } as const
};

type ChangeMax = ReturnType<typeof changeMaxAC>;

export const changeMaxAC = ( max: string ) => {
  return {
    type: 'CHANGE_MAX',
    max
  } as const
}

type SetMinType = ReturnType<typeof setMin>;

export const setMin = (  ) => {
  return {
    type: 'SET_MIN'
  } as const
}

type SetMaxType = ReturnType<typeof setMax>;

export const setMax = (  ) => {
  return {
    type: 'SET_MAX'
  } as const
}