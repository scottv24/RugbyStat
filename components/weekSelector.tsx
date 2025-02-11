export default function WeekSelector({
    setSelectedWeek,
    selectedWeek,
    numWeeks,
    firstDate,
    lastDate,
}: {
    setSelectedWeek: (week: number) => void
    selectedWeek: number
    numWeeks: number
    firstDate: Date | undefined
    lastDate: Date | undefined
}) {
    const shortDate = (date?: Date) =>
        date?.toLocaleDateString('en-GB', {
            day: 'numeric',
            month: 'short',
        })

    return (
        <div className='flex sm:w-2/3 w-5/6 items-center justify-between self-center p-2'>
            <button
                onClick={() => {
                    if (selectedWeek > 0) setSelectedWeek(selectedWeek - 1)
                }}
                className={`${selectedWeek > 0 ? 'bg-blue-800 cursor-pointer' : 'bg-slate-600 cursor-default'} rounded-xl p-1 px-3 font-extrabold text-3xl`}
            >
                ‹
            </button>

            <h3 className='p-3 font-semibold'>
                {firstDate?.getDate() !== lastDate?.getDate()
                    ? `${shortDate(firstDate)}-${shortDate(lastDate)}`
                    : shortDate(firstDate)}
            </h3>

            <button
                onClick={() => {
                    if (selectedWeek < numWeeks - 1)
                        setSelectedWeek(selectedWeek + 1)
                }}
                className='bg-blue-800 rounded-xl p-1 px-3 font-extrabold text-3xl'
            >
                ›
            </button>
        </div>
    )
}
