'use client'

import { signOut } from 'next-auth/react'

export default function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: '/' })}
      className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
    >
      Log Out
    </button>
  )
}