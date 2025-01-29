import { TeamTable } from '@/app/types'
import { useEffect, useState } from 'react'
import Spinner from './Spinner'

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

    if (!tableData) {
        return (
            <div className='w-full flex-col h-screen'>
                <Spinner />
            </div>
        )
    }

    return (
        <div className='w-full flex-col'>
            {tableData.map((team) => (
                <div key={team.teamId} className='w-full flex p-2'>
                    <div
                        className={`w-1/12 font-semibold ${
                            team.previousPosition - team.position > 0
                                ? 'text-green-600'
                                : team.previousPosition - team.position < 0
                                  ? 'text-red-600'
                                  : ''
                        }`}
                    >
                        {team.previousPosition - team.position > 0
                            ? `+${team.previousPosition - team.position}`
                            : team.previousPosition - team.position < 0
                              ? `-${team.position - team.previousPosition}`
                              : ''}
                    </div>
                    <div
                        className={`rounded-lg  px-2 py-1 mx-1  ${
                            team.position <= 4
                                ? 'bg-green-800'
                                : team.position <= 8
                                  ? 'bg-orange-700'
                                  : ''
                        }`}
                    >
                        {team.position}
                    </div>
                    <div className=' w-full flex justify-between'>
                        <p>{team.name}</p>
                        <p className='font-bold'>{team.points}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}
