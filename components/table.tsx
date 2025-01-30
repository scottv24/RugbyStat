import { TeamTable } from '@/app/types'
import { useEffect, useState } from 'react'
import Image from './image'

export default function Table() {
    const [tableData, setTableData] = useState<TeamTable>()

    useEffect(() => {
        const getTableData = async () => {
            const response = await fetch(
                'https://rugby-union-feeds.incrowdsports.com/v1/tables/1068?provider=rugbyviz&season=202401'
            )
            const tableDataRaw = await response.json()
            const tableData = tableDataRaw?.data?.groups[0]?.teams
            setTableData(tableData)
        }

        getTableData()
    }, [])

    enum PositionTransition {
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

    return (
        <table className='w-full overflow-x-scroll table-fixed'>
            <thead>
                <tr>
                    <th scope='col' className='p-3 w-1/12'>
                        #
                    </th>
                    <th scope='col' className='p-2'></th>
                    <th scope='col' className='p-2 w-1/4'></th>
                    <th scope='col' className='p-2'>
                        Pl
                    </th>
                    <th scope='col' className='p-2'>
                        W
                    </th>
                    <th scope='col' className='p-2'>
                        L
                    </th>
                    <th scope='col' className='p-2'>
                        D
                    </th>
                    <th scope='col' className='p-2 sm:table-cell hidden'>
                        PD
                    </th>
                    <th scope='col' className='p-2 sm:table-cell hidden'>
                        TBP
                    </th>
                    <th scope='col' className='p-2 sm:table-cell hidden'>
                        LBP
                    </th>
                    <th scope='col' className='p-2'>
                        Pts
                    </th>
                </tr>
            </thead>
            <tbody>
                {!tableData &&
                    Array.from({ length: 16 }, (_, i) => i + 1).map((i) => {
                        return (
                            <tr
                                key={i}
                                className={` ${PositionTransition[i]} dark:bg-sky-900 opacity-10 bg-gray-200 animate-pulse`}
                            >
                                <th scope='row' className='p-3'>
                                    <div
                                        className={`rounded-full p-2 invisible`}
                                    >
                                        {i}
                                    </div>
                                </th>
                                <td colSpan={10} className='p-3'></td>
                            </tr>
                        )
                    })}

                {tableData &&
                    tableData.map((team) => (
                        <tr
                            key={team.teamId}
                            className='group hover:bg-sky-900 hover: cursor-pointer'
                        >
                            <th scope='row' className='p-3'>
                                <div
                                    className={`rounded-full p-2  ${
                                        team.position <= 4
                                            ? 'bg-green-800'
                                            : team.position <= 8
                                              ? 'bg-orange-700'
                                              : ''
                                    }`}
                                >
                                    {team.position}
                                </div>
                            </th>
                            <td>
                                <Image
                                    alt={`${team.name} Logo`}
                                    lightSrc={team.imageUrls.ON_LIGHT}
                                    darkSrc={team.imageUrls.ON_DARK}
                                    defaultSrc={team.imageUrls.DEFAULT}
                                    height={30}
                                    width={30}
                                />
                            </td>
                            <td className=' group-hover:underline group-hover:font-semibold'>
                                {team.name}
                            </td>
                            <td className='p-2 text-center'>{team.played}</td>
                            <td className='p-2 text-center'>{team.won}</td>
                            <td className='p-2 text-center'>{team.lost}</td>
                            <td className='p-2 text-center'>{team.drawn}</td>
                            <td className='p-2 text-center sm:table-cell hidden'>
                                {team.pointsDiff}
                            </td>
                            <td className='p-2 text-center sm:table-cell hidden'>
                                {team.triesBonus}
                            </td>
                            <td className='p-2 text-center sm:table-cell hidden'>
                                {team.losingBonus}
                            </td>
                            <td className='p-2 text-center font-bold'>
                                {team.points}
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    )
}
