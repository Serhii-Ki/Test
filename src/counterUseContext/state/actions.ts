export type ActionsType = IncrType

type IncrType = ReturnType<typeof incrAC>

export const incrAC = () => {
  return {
    type: 'INCR'
  } as const
}