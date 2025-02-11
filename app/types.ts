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
    imageUrls: ImageUrls
}

export type TeamTable = TeamTableInfo[]

export type ImageUrls = {
    ON_LIGHT?: string
    ON_DARK: string
    DEFAULT: string
}

export enum PositionTransition {
    '',
    '-animation-delay-300',
    '-animation-delay-600',
    '-animation-delay-900',
    '-animation-delay-1200',
    '-animation-delay-1500',
    '-animation-delay-1800',
    '-animation-delay-2100',
    '-animation-delay-2400',
    '-animation-delay-2700',
    '-animation-delay-3000',
    '-animation-delay-3300',
    '-animation-delay-3600',
    '-animation-delay-3900',
    '-animation-delay-4200',
    '-animation-delay-4500',
    '-animation-delay-4800',
}

export type FixtureWeeksMap = Map<number, FixtureWeek>

export type FixtureWeek = {
    firstDate: Date
    lastDate: Date
    fixtures: Fixture[]
}

export type Fixture = {
    date: Date
    status: string
    minute: number
    timerRunning: boolean
    homeTeam: TeamResult
    awayTeam: TeamResult
}

export type TeamResult = {
    name: string
    score: number
    imageUrls: ImageUrls
}
