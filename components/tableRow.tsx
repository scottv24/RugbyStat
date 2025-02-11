import { TeamTableInfo } from '@/app/types'
import Image from './image'

export default function TableRow({ team }: { team: TeamTableInfo }) {
    return (
        <tr
            key={team.teamId}
            className='group hover:bg-sky-900 hover:bg-opacity-40 hover:cursor-pointer'
        >
            <th scope='row' className='sm:p-2 p-1 flex justify-center'>
                <div
                    className={`rounded-full sm:p-2 sm:w-full w-1/2 ${
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
            <td className=' group-hover:underline group-hover:font-semibold sm:overflow-auto overflow-hidden sm:text-wrap text-nowrap text-ellipsis'>
                {team.name}
            </td>
            <td className='p-2 text-center text-clip overflow-hidden'>
                {team.played}
            </td>
            <td className='p-2 text-center'>{team.won}</td>
            <td className='p-2 text-center'>{team.lost}</td>
            <td className='p-2 text-center'>{team.drawn}</td>
            <td className='p-2 text-center lg:table-cell hidden'>
                {team.pointsDiff}
            </td>
            <td className='p-2 text-center lg:table-cell hidden'>
                {team.triesBonus}
            </td>
            <td className='p-2 text-center lg:table-cell hidden'>
                {team.losingBonus}
            </td>
            <td className='p-2 text-center font-bold'>{team.points}</td>
        </tr>
    )
}
