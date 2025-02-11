'use client'
import { PositionTransition, TeamTable } from '@/app/types'
import { useEffect, useState } from 'react'
import TableRow from './tableRow'

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

    return (
        <table className='w-full overflow-x-scroll table-fixed'>
            <thead>
                <tr>
                    <th scope='col' className='p-3 sm:w-1/12 w-[14%]'>
                        #
                    </th>
                    <th scope='col' className='p-2'></th>
                    <th
                        scope='col'
                        className='p-2 sm:w-1/4 w-1/3 sm:overflow-auto overflow-hidden'
                    ></th>
                    <th scope='col' className='p-2 w-1/12'>
                        Pl
                    </th>
                    <th scope='col' className='p-2 w-1/12'>
                        W
                    </th>
                    <th scope='col' className='p-2 w-1/12'>
                        L
                    </th>
                    <th scope='col' className='p-2 w-1/12'>
                        D
                    </th>
                    <th
                        scope='col'
                        className='p-2 lg:w-1/12 w-1/6 lg:table-cell hidden'
                    >
                        PD
                    </th>
                    <th
                        scope='col'
                        className='p-2 lg:w-1/12 w-1/6 lg:table-cell hidden'
                    >
                        TBP
                    </th>
                    <th
                        scope='col'
                        className='p-2 lg:w-1/12 w-1/6 lg:table-cell hidden'
                    >
                        LBP
                    </th>
                    <th scope='col' className='p-2'>
                        Pts
                    </th>
                </tr>
            </thead>
            <tbody>
                {!tableData && <TableLoading />}

                {tableData &&
                    tableData.map((team) => (
                        <TableRow key={team.teamId} team={team} />
                    ))}
            </tbody>
        </table>
    )
}

function TableLoading() {
    return (
        <>
            {Array.from({ length: 16 }, (_, i) => i + 1).map((i) => {
                return (
                    <tr
                        key={i}
                        className={` ${PositionTransition[i]} dark:bg-sky-900 opacity-10 bg-gray-200 animate-pulse`}
                    >
                        <th scope='row' className='p-3'>
                            <div className={`rounded-full p-2 invisible`}>
                                {i}
                            </div>
                        </th>
                        <td colSpan={10} className='p-3'></td>
                    </tr>
                )
            })}
        </>
    )
}
