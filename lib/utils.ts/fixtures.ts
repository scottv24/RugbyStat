/** Takes a date string input and returns a Date object for the first day of that week (at midnight).*/
export function getLastMonday(date: Date) {
    const weekday = date.getDay()
    const firstMonday = new Date(date)
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
