'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { logError } from '@/lib/error-tracking'
import { Button } from '@/components/ui/button'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    logError(error, { page: 'root' })
  }, [error])

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-md"
      >
        <h2 className="text-4xl font-bold mb-4">Something went wrong</h2>
        <p className="text-gray-400 mb-8">
          We encountered an unexpected error. Please try again.
        </p>
        <Button onClick={reset}>
          Try again
        </Button>
      </motion.div>
    </div>
  )
}