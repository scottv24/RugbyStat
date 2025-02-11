'use client'
import Card from '@/components/card'
import Fixtures from '@/components/fixtures'
import { AllFlags } from '@/components/flag'
import Table from '@/components/table'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
    const [selected, setSelected] = useState('table')
    return (
        <div>
            <div className='w-full bg-background p-4  flex shadow-md'>
                <h1 className='font-extrabold text-2xl flex justify-center items-center'>
                    <Image
                        src='/img/RugbyStat.png'
                        alt='Rugby Stat Logo'
                        width={50}
                        height={50}
                        className='p-2 dark:hidden'
                    />
                    <Image
                        src='/img/RugbyStatDark.png'
                        alt='Rugby Stat Logo'
                        width={50}
                        height={50}
                        className='p-2 dark:block hidden'
                    />{' '}
                    RugbyStat
                </h1>
            </div>
            <div className='w-full grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-6 pt-8 xl:px-64 lg:px-32 sm:px-16 px-2 justify-items-center'>
                <Card className='w-full bg-background xl:col-span-5 md:col-span-2 flex'>
                    <Image
                        src='/img/URC.png'
                        alt='URC logo'
                        width={50}
                        height={50}
                    />
                    <div className='px-4'>
                        <h2 className='font-semibold sm:text-xl text-md'>
                            United Rugby Championship
                        </h2>
                        <AllFlags />
                    </div>
                </Card>

                <Card
                    className={`${selected === 'table' ? '' : 'md:block hidden'} xl:col-span-3`}
                >
                    <h2 className='p-2 md:block hidden'>Table</h2>
                    <div className='px-2 md:hidden flex justify-start gap-4 w-full'>
                        <button className='p-2 underline font-bold'>
                            Table
                        </button>
                        <button
                            className='p-2'
                            onClick={() => setSelected('fixtures')}
                        >
                            Fixtures & Results
                        </button>
                    </div>

                    <Table />
                </Card>
                <Card
                    className={`${selected === 'fixtures' ? '' : 'md:block hidden'} xl:col-span-2`}
                >
                    <div className='px-2 md:hidden flex justify-start gap-4 w-full'>
                        <button
                            className='p-2'
                            onClick={() => setSelected('table')}
                        >
                            Table
                        </button>
                        <button className='p-2 underline font-bold'>
                            Fixtures & Results
                        </button>
                    </div>

                    <Fixtures />
                </Card>
            </div>
            <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
        </div>
    )
}

//<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 '>
