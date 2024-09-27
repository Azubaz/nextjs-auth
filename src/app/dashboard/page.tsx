import { getServerSession } from "next-auth/next"
import { redirect } from "next/navigation"
import Link from 'next/link'
import LogoutButton from './logout-button'

export default async function DashboardPage() {
  const session = await getServerSession()

  if (!session) {
    redirect('/login')
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-2xl font-bold text-black">Dashboard</h1>
        <p className="text-black">Welcome, {session.user?.name || 'User'}!</p>
        <div className="space-y-2">
          <LogoutButton />
          <Link href="/" className="block text-center px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}