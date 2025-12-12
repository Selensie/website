export function logError(error: Error, context?: Record<string, any>) {
  if (process.env.NODE_ENV === 'production') {
    console.error('Error:', error, 'Context:', context)
  } else {
    console.error(error)
  }
}

export function captureException(error: Error, context?: Record<string, any>) {
  logError(error, context)
}