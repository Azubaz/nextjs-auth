import Link from 'next/link'
import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-background text-foreground">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-8">
          Welcome to My Auth App
        </h1>
        
        <p className="text-xl mb-8">
          This is a simple authentication demo using Next.js and NextAuth.js
        </p>

        {session ? (
          <div className="space-y-4">
            <p className="text-2xl mb-4">
              Welcome back, {session.user?.name || 'User'}!
            </p>
            <Link 
              href="/dashboard" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Go to Dashboard
            </Link>
          </div>
        ) : (
          <div className="space-y-4 flex flex-col">
            <Link 
              href="/login" 
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
            >
              Sign up
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}