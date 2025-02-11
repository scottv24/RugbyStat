/** Takes a date string input and returns a Date object for the first day of that week (at midnight).*/
export function getLastMonday(date: string) {
    const firstMatchDate = new Date(date)
    const weekday = firstMatchDate.getDay()
    const firstMonday = new Date(firstMatchDate)
    firstMonday.setDate(firstMonday.getDate() - weekday + 1)
    firstMonday.setHours(0, 0, 0, 0)
    return firstMonday
}

/** Takes two Date objects and returns the number of weeks between them. */
export function getWeeksBetween(firstDate: Date, matchDate: Date) {
    const days = matchDate.getTime() - firstDate.getTime()
    const week = Math.floor(days / (1000 * 60 * 60 * 24 * 7))
    return week
}
