'use client'

import { useSearchParams } from 'next/navigation'

export default function MessageDisplay() {
  const searchParams = useSearchParams()
  const message = searchParams.get('message')

  if (!message) return null

  return <p className="mb-4 text-green-500">{message}</p>
}