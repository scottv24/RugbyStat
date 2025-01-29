import { Country } from '@/app/types'
import Image from 'next/image'

export default function Flag({ country }: { country: Country }) {
    return (
        <Image
            src={`/img/${country}.jpeg`}
            alt=''
            width={25}
            height={12.5}
            className='rounded-sm mr-2'
        />
    )
}

export function AllFlags({}) {
    const countries: Array<Country> = [
        'scotland',
        'ireland',
        'wales',
        'italy',
        'sa',
    ]
    return (
        <div className='flex justify-items-center py-2'>
            {countries.map((country) => (
                <Flag country={country} key={`${country}Flag`} />
            ))}
        </div>
    )
}
