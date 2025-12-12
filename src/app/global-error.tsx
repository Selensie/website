'use client'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="bg-black text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Critical Error</h2>
          <p className="text-gray-400 mb-8">Something went critically wrong.</p>
          <button
            onClick={reset}
            className="px-6 py-3 bg-white text-black rounded-full font-semibold"
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  )
}