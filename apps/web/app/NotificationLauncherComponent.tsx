'use client'

import dynamic from 'next/dynamic'

const NotificationLauncherComponent = dynamic(
  () => import('@notificationapi/react').then((mod) => mod.NotificationLauncher),
  {
    ssr: false,
  }
)

export function LauncherComponent() {
  return (
    <NotificationLauncherComponent buttonStyles={{ backgroundColor: 'white' }} />
  )
}