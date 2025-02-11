import { FixtureWeeksMap } from '@/app/types'
import { useEffect, useState } from 'react'
import { getWeeksBetween, getLastMonday } from './utils.ts/fixtures'

export function useFixtureList() {
    const [fixtures, setFixtures] = useState<FixtureWeeksMap>()

    useEffect(() => {
        const getFixtures = async () => {
            const fixtures: FixtureWeeksMap = new Map()

            const resp = await fetch(
                'https://rugby-union-feeds.incrowdsports.com/v1/matches?&compId=1068&provider=rugbyviz&season=202401&images=true'
            )
            const fixturesRAW = await resp.json()
            const fixtureList = fixturesRAW?.data

            const firstMonday = getLastMonday(fixtureList[0]?.date)

            const gameCalendarWeeks = new Map<number, number>()
            let fixtureWeekCount = 0

            for (const fixture of fixtureList) {
                const calendarWeek = getWeeksBetween(
                    firstMonday,
                    new Date(fixture.date)
                )

                if (!gameCalendarWeeks.has(calendarWeek)) {
                    gameCalendarWeeks.set(calendarWeek, fixtureWeekCount)
                    fixtureWeekCount++
                }
                const week = gameCalendarWeeks.get(calendarWeek) || 0
                const currentWeek = fixtures.get(week)

                if (!currentWeek) {
                    fixtures.set(week, {
                        firstDate: new Date(fixture.date),
                        lastDate: new Date(fixture.date),
                        fixtures: [fixture],
                    })
                } else {
                    const currentDate = new Date(fixture.date)

                    if (currentDate < currentWeek.firstDate) {
                        currentWeek.firstDate = currentDate
                    } else if (currentDate > currentWeek.lastDate) {
                        currentWeek.lastDate = currentDate
                    }
                    currentWeek.fixtures.push(fixture)
                }
            }
            setFixtures(fixtures)
        }
        getFixtures()
    }, [])

    return fixtures
}
