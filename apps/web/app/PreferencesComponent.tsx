'use client'

import dynamic from 'next/dynamic'
import { Suspense } from 'react'

const LoadingPrefs = () => (
  <div className="flex items-center justify-center p-4">
    <div className="w-8 h-8 border-4 border-blue-200 rounded-full animate-spin border-t-blue-600">
      <span className="sr-only">Loading Preferences...</span>
    </div>
  </div>
)

const NotificationPreferencesInline = dynamic(
  () => import('@notificationapi/react').then((mod) => mod.NotificationPreferencesInline),
  {
    ssr: false,
    loading: () => <LoadingPrefs />,
  }
)

export function PreferencesComponent() {
  return (
    <Suspense fallback={<LoadingPrefs />}>
      <NotificationPreferencesInline />
    </Suspense>
  )
}