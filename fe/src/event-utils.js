let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [{
        id: createEventId(),
        title: 'All-day event',
        value: 'All-day event',
        label: 'All-day event',
        start: todayStr
    },
    {
        id: createEventId(),
        title: 'Timed event',
        value: 'Timed event',
        label: 'Timed event',
        start: todayStr + 'T12:00:00'
    }
]

export function createEventId() {
    return String(eventGuid++)
}