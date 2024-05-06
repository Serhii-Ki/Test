export type ActionsType = IncType;

type IncType = ReturnType<typeof incAC>

export const incAC = () => {
  return {
    type: 'INCR'
  } as const
}