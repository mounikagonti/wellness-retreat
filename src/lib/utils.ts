export function debounce(func: (...args: any[]) => void, wait: number) {
  let timeout: NodeJS.Timeout | undefined

  return function executedFunction(...args: any[]) {
    const later = () => {
      timeout = undefined
      func(...args)
    }

    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(later, wait)
  }
}

export function convertToUnixTimestamp(dateString: string): number {
  const date = new Date(dateString)

  // Error handling for invalid dates
  if (isNaN(date.getTime())) {
    throw new Error('Invalid date string')
  }

  const timestampInMillis = date.getTime()
  const timestampInSeconds = Math.floor(timestampInMillis / 1000)

  return timestampInSeconds
}

export function objectToUrlSearchParams(
  obj: Record<string, unknown>
): URLSearchParams {
  const stringifiedObj: Record<string, string> = {}

  Object.entries(obj).forEach(([key, value]) => {
    stringifiedObj[key] = String(value)
  })

  return new URLSearchParams(stringifiedObj)
}

export function removeEmptyOrNullProperties<T extends Object>(obj: T): T {
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = (obj as Record<string, unknown>)[key]
      if (value === '' || value === null) {
        delete (obj as Record<string, unknown>)[key]
      }
    }
  }
  return obj
}
