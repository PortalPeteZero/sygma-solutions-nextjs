import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-md">
        <div>
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Page Not Found</h2>
          <p className="text-lg text-slate-300">
            Sorry, we could not find the page you were looking for.
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-slate-400">
            The page may have been moved, deleted, or the URL might be incorrect.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
            >
              Back to Home
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-slate-400 text-slate-300 font-medium hover:bg-slate-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-700">
          <p className="text-sm text-slate-500">
            Try visiting our <Link href="/knowledge-hub" className="text-primary hover:underline">Knowledge Hub</Link> or <Link href="/courses" className="text-primary hover:underline">Courses</Link> pages
          </p>
        </div>
      </div>
    </div>
  )
}