import Image from 'next/image'

export default function Spinner() {
  return (
    <div className='flex justify-center items-center h-full w-full'>
      <div className='xl:w-1/6 md:w-1/3  w-1/4 sm:p-4 p-0'>
        <Image src='/SpinnerSVG.svg' alt='spinner' width={200} height={200} />
      </div>
    </div>
  )
}
