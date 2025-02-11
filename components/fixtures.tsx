'use client'

import { TeamResult } from '@/app/types'
import { useFixtureList } from '@/lib/hooks'
import Image from 'next/image'
import { useState } from 'react'
import WeekSelector from './weekSelector'
import Spinner from './Spinner'

export default function Fixtures() {
    const fixtures = useFixtureList()
    const [selectedWeek, setSelectedWeek] = useState<number>(0)
    const firstDate = fixtures?.get(selectedWeek)?.firstDate
    const lastDate = fixtures?.get(selectedWeek)?.lastDate

    const resultColors = (currentTeam: TeamResult, opposition: TeamResult) => {
        if (currentTeam.score > opposition.score)
            return 'bg-green-700 bg-opacity-90'
        if (currentTeam.score === opposition.score)
            return 'bg-yellow-500 bg-opacity-90'
        return 'bg-black bg-opacity-20'
    }

    if (!fixtures)
        return (
            <div>
                <Spinner />
            </div>
        )

    return (
        <div className='w-full flex flex-col'>
            <WeekSelector
                setSelectedWeek={setSelectedWeek}
                selectedWeek={selectedWeek}
                numWeeks={fixtures.size}
                firstDate={firstDate}
                lastDate={lastDate}
            />
            {fixtures.get(selectedWeek)?.fixtures.map((fixture, i) => (
                <div
                    className='flex w-full justify-between border-t-2 border-slate-400 border-opacity-50 py-3 hover:bg-sky-900 hover:bg-opacity-40 hover:cursor-pointer'
                    key={i}
                >
                    <HomeTeam team={fixture.homeTeam} home={true} />
                    <div className='w-1/4 flex flex-col items-center'>
                        <FixtureTime
                            status={fixture.status}
                            date={fixture.date}
                            minute={fixture.minute}
                        />
                        <p className='text-center text-nowrap'>
                            {new Date(fixture.date).toLocaleDateString(
                                'en-GB',
                                {
                                    day: '2-digit',
                                    month: 'short',
                                    year: '2-digit',
                                }
                            )}
                        </p>

                        {fixture.status === 'result' && (
                            <div className='flex w-full justify-between rounded-3xl  p-1'>
                                <div
                                    className={`${resultColors(fixture.homeTeam, fixture.awayTeam)} text-white rounded-l-2xl p-2 w-1/2 text-center`}
                                >
                                    {fixture.homeTeam.score}
                                </div>
                                <div
                                    className={`${resultColors(fixture.awayTeam, fixture.homeTeam)} text-white rounded-r-2xl p-2 w-1/2 text-center`}
                                >
                                    {fixture.awayTeam.score}
                                </div>
                            </div>
                        )}
                    </div>
                    <HomeTeam team={fixture.awayTeam} home={false} />
                </div>
            ))}
        </div>
    )
}

function HomeTeam({ team, home }: { team: TeamResult; home: boolean }) {
    return (
        <div
            className={`${home ? 'justify-end' : ''} flex w-1/3 gap-4 items-center`}
        >
            {home && <p className='justify-end text-right'>{team.name}</p>}
            {team.name !== 'TBC' && (
                <Image
                    src={team.imageUrls.ON_DARK}
                    alt={`${team.name} Logo`}
                    height={100}
                    width={100}
                    className='w-1/5 aspect-square'
                />
            )}
            {!home && <p className='justify-end text-left'>{team.name}</p>}
        </div>
    )
}

function FixtureTime({
    status,
    date,
    minute,
}: {
    status: string
    date: Date
    minute: number
}) {
    if (status === 'result') {
        return <p className='text-center text-clip'>FT</p>
    } else if (status === 'fixture') {
        return (
            <p className='text-center text-clip'>
                {date.toLocaleTimeString('en-GB', { timeStyle: 'short' })}
            </p>
        )
    } else {
        return (
            <p className='text-center text-clip bg-green-700 rounded-xl px-2 font-semibold'>
                {minute}
            </p>
        )
    }
}
