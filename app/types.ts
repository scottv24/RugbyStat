export type Country = 'scotland' | 'ireland' | 'wales' | 'italy' | 'sa'

export type TeamTableInfo = {
  teamId: number
  name: string
  position: number
  points: number
  won: number
  lost: number
  drawn: number
  played: number
  pointsFor: number
  pointsAgainst: number
  pointsDiff: number
  triesFor: number
  triesAgainst: number
  triesBonus: number
  losingBonus: number
  previousPosition: number
}

export type TeamTable = TeamTableInfo[]
