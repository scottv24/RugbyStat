'use client'
import Card from '@/components/card'
import { AllFlags } from '@/components/flag'
import Table from '@/components/table'
import Image from 'next/image'

export default function Home() {
    return (
        <div>
            <div className='w-full bg-background p-8  flex shadow-md'>
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
            <div className='w-full grid  md:grid-cols-2 grid-cols-1 gap-6 pt-8 lg:px-32 sm:px-16 px-8 justify-items-center'>
                <Card className='w-full bg-background  md:col-span-2 flex'>
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

                <Card>
                    <h2>Table</h2>
                    <Table />
                </Card>
                <Card>Fixtures & Results </Card>
            </div>
            <footer className='row-start-3 flex gap-6 flex-wrap items-center justify-center'></footer>
        </div>
    )
}

//<div className='grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 '>
