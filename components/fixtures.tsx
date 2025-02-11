'use client'

import { TeamResult } from '@/app/types'
import { useFixtureList } from '@/lib/hooks'
import Image from 'next/image'
import { useState } from 'react'

export default function Fixtures() {
    const fixtures = useFixtureList()
    const [selectedWeek, setSelectedWeek] = useState<number>(0)

    const resultColors = (currentTeam: TeamResult, opposition: TeamResult) => {
        if (currentTeam.score > opposition.score)
            return 'bg-green-700 bg-opacity-90'
        if (currentTeam.score === opposition.score)
            return 'bg-yellow-500 bg-opacity-90'
        return 'bg-black bg-opacity-20'
    }

    if (!fixtures) return <div></div>
    console.log(fixtures)
    return (
        <div className='w-full flex flex-col'>
            <div className='flex w-full items-center justify-center p-2'>
                <button
                    onClick={() => {
                        if (selectedWeek > 0) setSelectedWeek(selectedWeek - 1)
                    }}
                    className={`${selectedWeek > 0 ? 'bg-blue-800 cursor-pointer' : 'bg-slate-600 cursor-default'} rounded-xl p-1 px-3 font-extrabold text-3xl`}
                >
                    ‹
                </button>
                <h3 className='p-3 font-semibold'>
                    {fixtures
                        .get(selectedWeek)
                        ?.firstDate.toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: 'short',
                        }) +
                        ' - ' +
                        fixtures
                            .get(selectedWeek)
                            ?.lastDate.toLocaleDateString('en-GB', {
                                day: '2-digit',
                                month: 'short',
                            })}
                </h3>
                <button
                    onClick={() => {
                        setSelectedWeek(selectedWeek + 1)
                    }}
                    className='bg-blue-800 rounded-xl p-1 px-3 font-extrabold text-3xl'
                >
                    ›
                </button>
            </div>
            {fixtures.get(selectedWeek)?.fixtures.map((fixture, i) => (
                <div
                    className='flex w-full justify-between border-t-2 border-slate-400 border-opacity-50 py-3 hover:bg-sky-900 hover:bg-opacity-40 hover:cursor-pointer'
                    key={i}
                >
                    <div className='flex w-1/3 gap-4 justify-end items-center'>
                        <p className='justify-end text-right'>
                            {fixture.homeTeam.name}
                        </p>
                        <Image
                            src={fixture.homeTeam.imageUrls.ON_DARK}
                            alt={`${fixture.homeTeam.name} Logo`}
                            height={100}
                            width={100}
                            className='w-1/5 aspect-square'
                        />
                    </div>
                    <div className='w-1/4 flex flex-col items-center'>
                        {fixture.status !== 'result' ? (
                            <p className='text-center text-clip'>
                                {new Date(fixture.date).toLocaleTimeString(
                                    'en-GB',
                                    { timeStyle: 'short' }
                                )}
                            </p>
                        ) : (
                            <p className='font-semibold'>FT</p>
                        )}
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
                    <div className='flex w-1/3 gap-2 items-center'>
                        <Image
                            src={fixture.awayTeam.imageUrls.ON_DARK}
                            alt={`${fixture.awayTeam.name} Logo`}
                            height={100}
                            width={100}
                            className='w-1/5 aspect-square'
                        />
                        <p className='w-3/4'>{fixture.awayTeam.name}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
